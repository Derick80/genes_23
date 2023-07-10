import type { Prisma } from '@prisma/client'
import { prisma } from './prisma.server'
//  extract PMCiD from last part of url
export async function getPMSearchTerm(url: string) {
    console.log(url, 'url from getPMSearchTerm')

    const urlParts = url.split('/')
    const lastPart = urlParts[urlParts.length - 1]
    const pmcId = lastPart.split('.')[0]
    return pmcId
}

export async function createPdfEntry(data: Prisma.PdfLibraryCreateInput) {
    const alreadyExists = await prisma.pdfLibrary.findUnique({
        where: {
            internalPdfUrl: data.internalPdfUrl,
        },
    })
    if (alreadyExists) {
        return
    }
    const pdfEntry = await prisma.pdfLibrary.create({
        data,
    })
    return pdfEntry
}

export async function getPdfLibrary({
    whereFilter,
}: {
    whereFilter: Prisma.PdfLibraryWhereInput
}) {
    const pdfLibrary = await prisma.pdfLibrary.findMany({
        where: {
            ...whereFilter,
        },
        orderBy: {
            pubYear: 'desc',
        },
    })
    return pdfLibrary
}

export async function getPdfLibraryItem(id: string) {
    const pdfLibraryItem = await prisma.pdfLibrary.findUnique({
        where: {
            id,
        },
    })
    return pdfLibraryItem
}
// Convert internalPdfUrl to webp url for display in kdb
export function convertUrlToImg(url: string) {
    // remove .pdf extension from url and replace with .webp
    const baseUrl = url.slice(0, -4)

    const urlWithWebp = baseUrl + '.webp'

    return urlWithWebp
}

// Semantic Scholor API
// https://api.semanticscholar.org/api-docs/graph#tag/Paper-Data/operation/get_graph_get_paper

//
// https://api.semanticscholar.org/graph/v1/paper/PMID:30191630?fields=abstract,authors,externalIds,fieldsOfStudy,influentialCitationCount,paperId,references,title,url,venue,year
export async function getSemanticScholorArticleDetails(pmid: string) {
    // Determine which identifier to use based upon the extracted filename
    const typeofId = pmid.startsWith('PMC') ? 'pmcid' : 'pmid'

    const fields =
        'abstract,authors,externalIds,fieldsOfStudy,influentialCitationCount,paperId,title,url,venue,year'

    const builtUrl = `https://api.semanticscholar.org/graph/v1/paper/${typeofId}:${pmid}?fields=${fields}`
    console.log(builtUrl, 'builtUrl from getSemanticScholorArticleDetails')

    const response = await fetch(builtUrl)
    const data = (await response.json()) as Root

    // reconstrut data to return to client to match pdfLibrary schema in prisma
    const dataToReturn = {
        semanticScholarId: data.paperId,
        semanticScholarUrl: data.url,
        title: data.title,
        abstract: data.abstract || '',
        authors: data.authors.map((author: Author) => author.name),
        journal: data.venue,
        pubYear: data.year,
        pmid: data.externalIds.PubMed,
        pmcId: data.externalIds.PubMedCentral || '',
        doi: data.externalIds.DOI,
    }
    console.log(
        dataToReturn,
        'dataToReturn from getSemanticScholorArticleDetails'
    )

    return dataToReturn as DataToReturn
}

// Semantic Scholor API Types
export interface Root {
    paperId: string
    externalIds: ExternalIds
    url: string
    title: string
    abstract: string
    venue: string
    year: number
    influentialCitationCount: number
    fieldsOfStudy: string[]
    authors: Author[]
}

export interface ExternalIds {
    PubMedCentral: string
    MAG: string
    DOI: string
    CorpusId: number
    PubMed: string
}

export interface Author {
    authorId: string
    name: string
}
export interface DataToReturn {
    semanticScholarId: string
    semanticScholarUrl: string
    title: string
    abstract: string
    authors: string[]
    journal: string
    pubYear: number
    pmid: string
    pmcId: string
    doi: string
}
