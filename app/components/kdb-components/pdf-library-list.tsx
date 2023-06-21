import {
    ChevronUpIcon,
    ChevronDownIcon,
    DownloadIcon,
} from '@radix-ui/react-icons'
import { Link } from '@remix-run/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useCallback } from 'react'
import type { PdfLibrary, myPdfLibrary } from '~/types/kdb-types'
import EditAbstract from './pdf-edit-abstract'


type PdfListProps = {
    pdfLibrary: myPdfLibrary 
}

export default function PdfList({ pdfLibrary }: PdfListProps) {
    const [edit, setEdit] = React.useState(false)

    return (
        <div className=" flex w-full flex-col gap-2 ">
            <div
                key={pdfLibrary.id}
                className="flex w-full flex-col items-stretch gap-4 rounded-md  border-2 p-1 "
            >
                <div className="flex flex-col items-center justify-between gap-2  text-xs md:flex-row md:items-baseline">
                    <p className="text-center text-base font-bold">
                        {pdfLibrary.title}
                    </p>
                    <p className="hidden text-xs font-bold md:block">
                        ({pdfLibrary.pubYear})
                    </p>
                </div>
                <AccordianTriggerBar kdbEntry={pdfLibrary}>
                    <div className="flex h-full flex-col items-start gap-2  px-4 py-2 md:flex-row">
                        <div className="relative h-full w-full">
                            {/* inline 
                                    replace .pdf with .webp
                                */}
                            <img
                                src={pdfLibrary.internalPdfUrl.replace(
                                    '.pdf',
                                    '.webp'
                                )}
                                alt="pdf"
                            />
                            <button className="absolute right-0 top-0 flex flex-col items-center rounded-md  px-2 font-bold text-black hover:bg-blue-400">
                                <Link
                                    to={pdfLibrary.internalPdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download
                                </Link>
                                <DownloadIcon />
                            </button>
                        </div>

                        <ul className="flex h-full w-full px-2">
                            <li className="flex list-none flex-col gap-2 text-teal-400">
                                <p className="text-xs font-bold underline">
                                    Abstract:
                                </p>
                                {pdfLibrary.abstract ? (
                                    <p className="text-xs">
                                        {pdfLibrary.abstract}
                                    </p>
                                ) : (
                                    <>
                                        <p className="text-xs">no abstract</p>
                                        <button onClick={() => setEdit(true)}>
                                            add abstract
                                        </button>
                                        {edit ? (
                                            <EditAbstract
                                                pdfId={pdfLibrary.id}
                                            />
                                        ) : null}
                                    </>
                                )}
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col justify-between">
                                        <p className="text-xs font-bold underline">
                                            Authors:
                                        </p>
                                        <p className="text-xs">
                                            {pdfLibrary.authors.join(', ')}
                                        </p>
                                    </div>
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="flex flex-col">
                                            <p className="text-xs font-bold underline">
                                                PMID:
                                            </p>
                                            <p className="text-xs">
                                                {pdfLibrary.pmid}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs font-bold underline">
                                                PMCID:
                                            </p>
                                            <p className="text-xs">
                                                {pdfLibrary.pmcid}
                                            </p>
                                        </div>
                                        <Link
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            to={pdfLibrary.internalPdfUrl}
                                            className="text-xs"
                                        >
                                            <p className="text-xs font-bold underline">
                                                Download PDF
                                            </p>
                                        </Link>
                                        <div className="flex flex-col">
                                            <Link
                                                to={`/kdb/${pdfLibrary.id}/annotate`}
                                            >
                                                <p className="text-xs font-bold underline">
                                                    annotate:
                                                </p>
                                            </Link>
                                        </div>
                                       
                                     
                                    </div> <div
                                            className="flex flex-col gap-2"
                                    >
                                            <p className="text-xs font-bold underline">
                                                Notes:
                                            </p>
                                            {
                                                pdfLibrary?.pdfNotes?.map((note) => {
                                                    return (
                                                        <div
                                                            key={note.id}
                                                        className="flex flex-col gap-2">
                                                          <div dangerouslySetInnerHTML={{__html: note.notes}}/>

                                                          <Link
                                                to={`/kdb/${note.pdfLibraryId}/annotate`}
                                            >
                                                <p className="text-xs font-bold underline">
                                                    Edit:
                                                </p>
                                            </Link>

                                                            </div>
                                                    )
                                                })
                                            }
                                        </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </AccordianTriggerBar>
            </div>
        </div>
    )
}

type Props = {
    children: React.ReactNode
    kdbEntry: PdfLibrary
}

function AccordianTriggerBar(props: Props) {
    const { children, kdbEntry } = props

    const [open, setOpen] = React.useState(false)
    const toggleOpen = useCallback(() => {
        setOpen((open) => !open)
    }, [])

    return (
        <div className="flex flex-col gap-2 rounded-md md:gap-4">
            <div className="flex flex-col items-center justify-between gap-2 text-xs md:flex-row">
                <div className="flex flex-col items-center gap-1 md:items-start ">
                    <p className="text-xs font-bold underline">Journal</p>
                    <p className="text-xs font-bold">{kdbEntry.journal}</p>
                </div>
                <div className="grow" />

                <AccordianNavBar kdbEntry={kdbEntry} />
                <div className="grow" />

                <div className="flex flex-col items-center  gap-1">
                    <p className="text-xs font-bold underline">
                        Publication Year
                    </p>
                    <p className="text-xs font-bold">({kdbEntry.pubYear})</p>
                </div>
                <div className="flex flex-col items-center gap-1 pl-4">
                    <button
                        type="button"
                        onClick={toggleOpen}
                        aria-label="Search database"
                        className="rounded-md p-2 text-teal-400 transition-all duration-300 hover:backdrop-blur-sm"
                    >
                        {open ? (
                            <div className="flex flex-col items-center gap-1 md:items-end">
                                <p className="text-xs font-bold">
                                    Hide Details
                                </p>
                                <ChevronUpIcon />
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-1 md:items-end">
                                <p className="text-xs font-bold">
                                    View Details
                                </p>
                                <ChevronDownIcon />
                            </div>
                        )}
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        key={kdbEntry.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ type: 'tween' }}
                    >
                        <div className="flex  flex-col items-stretch">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

function AccordianNavBar({ kdbEntry }: { kdbEntry: PdfLibrary }) {
    return (
        <div className="flex flex-col items-center gap-1">
            <p className="text-xs font-bold underline">Links</p>

            <div className="flex flex-row items-center justify-between gap-2 text-xs">
                <Link
                    to={`https://pubmed.ncbi.nlm.nih.gov/${kdbEntry.pmid}/`}
                    className="text-xs font-bold hover:cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    PubMed
                </Link>
                {kdbEntry.pmcid ? (
                    <Link
                        to={`https://www.ncbi.nlm.nih.gov/pmc/${kdbEntry.pmcid}/`}
                        className="text-xs font-bold hover:cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        PMC
                    </Link>
                ) : null}
                <Link
                    to={`https://doi.org/${kdbEntry.doi}`}
                    className="text-xs font-bold hover:cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    DOI
                </Link>
                <Link
                    to={kdbEntry.semanticScholarUrl}
                    className="text-center text-xs font-bold hover:cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Semantic Scholar
                </Link>
            </div>
        </div>
    )
}
