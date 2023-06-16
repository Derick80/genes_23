import type { Prisma } from "@prisma/client";
import { prisma } from "./prisma.server";
//  extract PMCiD from last part of url
export async function getPMSearchTerm(url: string) {
  console.log(url, "url from getPMSearchTerm");

  const urlParts = url.split("/");
  const lastPart = urlParts[urlParts.length - 1];
  const pmcId = lastPart.split(".")[0];
  return pmcId;
}
// First fetch article data from pubmed using the pmid and then fetch the abstract using the pmcId
// export async function getPmidData(pmid: string) {
//   // create a url to fetch data associated with the pmid from pubmed
//   const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmid}&retmode=json`;
//   //   below is a url for testing purposes. It will return a complete object with all the data
//   //   const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=32720330&retmode=json`;
//   const response = await fetch(url);
//   const jsonResponse = await response.json();

//   const dataToTransform = Object.values(
//     jsonResponse.result
//   ).flat() as PubmedItem[];
//   // transform the data into a format that is easier to work with in the app and get rid of any data that is not needed
//   const data = dataToTransform
//     .filter((item) => typeof item !== "string")
//     .map((item: PubmedItem) => {
//       return {
//         pmid: item.uid,
//         title: item.title,
//         journal: item.fulljournalname,
//         pubdate: item.pubdate,
//         pmcId: item.articleids
//           .filter((id) => id.idtype === "pmc")
//           .map((id) => id.value)[0],
//         firstAuthor: item.sortfirstauthor,
//         lastAuthor: item.lastauthor,
//         doi: item.articleids
//           .filter((id) => id.idtype === "doi")
//           .map((id) => id.value)[0],

//         authors: item.authors
//           .map((author) => {
//             return {
//               name: author.name,
//             };
//           })
//           .flat(),
//       };
//     });

//     const pmcid = data[0].pmcId;
//   // Build a url to fetch the abstract from pubmed using the pmcId derived from the pmid data

//   const abstractUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pmc&id=${pmcid}&retmode=xml&rettype=abstract`;
//   console.log(abstractUrl, "abstractUrl from getPmidData");

//   const abstractResponse = await fetch(abstractUrl);
//   const abstractText = await abstractResponse.text();
//   console.table(abstractText);
//   // console.log(abstractText, "abstractText from getPmidData");
//   const reg = new RegExp("<abstract>(.*?)</abstract>", "g");
//   const stuff = abstractText.match(reg);
//   const stuffContent = stuff?[1] : "";
//   const stuffToArray = Object.values(stuffContent);

//   console.log(stuffToArray, "stuff");
//   const parser = new XMLParser();
//   const abstractObject = await parser.parse(abstractText);
//   //   console.log(abstractObject, "abstractObject from getPmidData");
//   const abstractObjectToArray = Object.entries(abstractObject)
//     .flat()
//     .filter((item) => typeof item !== "string");

//   //   console.log(abstractObjectToArray, "abstractObjectToArray from getPmidData");

//   const abstract = abstractObjectToArray
//     .map((item: any) => item["article"])
//     .map((item: any) => item.front["article-meta"]["abstract"]["p"]["#text"])
//     .flat()
//     .toString()
//     .replace(/&#x\d+;/g, "");
//   return { data, abstract };
// }

export async function createPdfEntry(data: Prisma.PdfLibraryCreateInput) {
  const alreadyExists = await prisma.pdfLibrary.findUnique({
    where: {
      internalPdfUrl: data.internalPdfUrl,
    },
  });
  if (alreadyExists) {
    return;
  }
  const pdfEntry = await prisma.pdfLibrary.create({
    data,
  });
  return pdfEntry;
}

export async function getPdfLibrary({
  whereFilter,
}: {
  whereFilter: Prisma.PdfLibraryWhereInput;
}) {
  const pdfLibrary = await prisma.pdfLibrary.findMany({
    where: {
      ...whereFilter,
    },
    orderBy: {
      pubYear: "desc",
    },
  });
  return pdfLibrary;
}

export async function getPdfLibraryItem(id: string) {
  const pdfLibraryItem = await prisma.pdfLibrary.findUnique({
    where: {
      id,
    },
  });
  return pdfLibraryItem;
}

// Semantic Scholor API
// https://api.semanticscholar.org/api-docs/graph#tag/Paper-Data/operation/get_graph_get_paper

//
// https://api.semanticscholar.org/graph/v1/paper/PMID:30191630?fields=abstract,authors,externalIds,fieldsOfStudy,influentialCitationCount,paperId,references,title,url,venue,year
export async function getSemanticScholorArticleDetails(pmid: string) {
  const typeofId = pmid.startsWith("PMC") ? "pmcid" : "pmid";

  const fields =
    "abstract,authors,externalIds,fieldsOfStudy,influentialCitationCount,paperId,title,url,venue,year";

  const builtUrl = `https://api.semanticscholar.org/graph/v1/paper/${typeofId}:${pmid}?fields=${fields}`;
  console.log(builtUrl, "builtUrl from getSemanticScholorArticleDetails");

  const response = await fetch(builtUrl);
  const data = (await response.json()) as Root;

  const dataToReturn = {
    semanticScholarId: data.paperId,
    semanticScholarUrl: data.url,
    title: data.title,
    abstract: data.abstract || "",
    authors: data.authors.map((author: Author) => author.name),
    journal: data.venue,
    pubYear: data.year,
    pmid: data.externalIds.PubMed,
    pmcId: data.externalIds.PubMedCentral || "",
    doi: data.externalIds.DOI,
  };
  console.log(
    dataToReturn,
    "dataToReturn from getSemanticScholorArticleDetails"
  );

  return dataToReturn as DataToReturn;
}

// Semantic Scholor API Types
export interface Root {
  paperId: string;
  externalIds: ExternalIds;
  url: string;
  title: string;
  abstract: any;
  venue: string;
  year: number;
  influentialCitationCount: number;
  fieldsOfStudy: string[];
  authors: Author[];
}

export interface ExternalIds {
  PubMedCentral: string;
  MAG: string;
  DOI: string;
  CorpusId: number;
  PubMed: string;
}

export interface Author {
  authorId: string;
  name: string;
}
export interface DataToReturn {
  semanticScholarId: string;
  semanticScholarUrl: string;
  title: string;
  abstract: string;
  authors: string[];
  journal: string;
  pubYear: number;
  pmid: string;
  pmcId: string;
  doi: string;
}
