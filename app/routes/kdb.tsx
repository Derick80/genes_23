import type { Prisma } from '@prisma/client'
import { FileIcon } from '@radix-ui/react-icons'
import type { LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { NavLink, Outlet, useLoaderData } from '@remix-run/react'
import KdbWelcome from '~/components/kdb-components/kdb-welcome'
import PdfList from '~/components/kdb-components/pdf-library-list'
import Search from '~/components/shared/search'
import { prisma } from '~/server/prisma.server'
export function shouldRevalidate() {
    return true
}

export async function loader({ request, params }: LoaderArgs) {
    const url = new URL(request.url)
    const filter = url.searchParams.get('filter')
    console.log('filter', filter)

    let textFilter: Prisma.PdfLibraryWhereInput = {}
    if (filter) {
        textFilter = {
            OR: [
                {
                    title: {
                        contains: filter,
                        mode: 'insensitive',
                    },
                },
                {
                    abstract: {
                        contains: filter,
                        mode: 'insensitive',
                    },
                },
                {
                    pmcid: {
                        contains: filter,
                        mode: 'insensitive',
                    },
                },
                {
                    pmid: {
                        contains: filter,
                        mode: 'insensitive',
                    },
                },
                {
                    authors: {
                        has: filter,
                    },
                },
            ],
        }
    }

    const pdfLibrary = await prisma.pdfLibrary.findMany({
        where: {
            ...textFilter,
        },
        include: {
            pdfNotes: {
                take: 1,
                orderBy: {
                    createdAt: 'desc',
                },
            },
        },
        
    }) 

    // const pdfLibrary = await getPdfLibrary( textFilter);

    if (!pdfLibrary) {
        throw new Error('pdfLibrary not found')
    }

    return json({ pdfLibrary })
}

export default function KdbIndex() {
    const data = useLoaderData<typeof loader>()
    return (
        <div className="mt-15 mb-10 flex flex-col justify-center gap-2 overflow-auto md:flex-row ">
            <div className="itesms-center flex w-full flex-col md:h-full md:w-1/5">
                <Search searchSourceName="kdb" />
                <NavLink className="flex flex-col items-center" to="/kdb/new">
                    <FileIcon />
                    Add New PDF
                </NavLink>
                <Outlet />
            </div>

            <div className="flex w-full flex-col items-center   gap-2  md:h-full md:w-4/5">
                <KdbWelcome />
                <p className="text-2xl font-bold">PDF Library</p>
                {data.pdfLibrary.length === 0 ? (
                    <p className="text-xl font-bold">
                        No PDFs found. Add a new PDF to get started.
                    </p>
                ) : (
                    <p className="text-xl font-bold">
                        {data.pdfLibrary.length} PDFs found.
                    </p>
                )}
                {data.pdfLibrary.map((pdf) => {
                    return <PdfList key={pdf.id} pdfLibrary={pdf} />
                })}
            </div>
        </div>
    )
}
