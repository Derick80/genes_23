import { ChevronUpIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import { Link, useLoaderData } from '@remix-run/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useCallback } from 'react'
import type { loader } from '~/routes/kdb'
import type { PdfLibrary } from '~/types/kdb-types'
import EditAbstract from './pdf-edit-abstract'

export default function PdfList() {
    const [edit, setEdit] = React.useState(false)
    const data = useLoaderData<typeof loader>()
    return (
        <div className="flex w-full flex-col gap-2 border-2 border-pink-500">
            {data.pdfLibrary.map((kdbEntry) => (
                <div
                    key={kdbEntry.id}
                    className="flex w-full flex-col items-stretch gap-4 rounded-md border-2 p-1"
                >
                    <div className="flex flex-col items-center justify-between gap-2  text-xs md:flex-row md:items-baseline">
                        <p className="text-base font-bold">{kdbEntry.title}</p>
                        <p className="text-xs font-bold">
                            ({kdbEntry.pubYear})
                        </p>
                    </div>
                    <AccordianTriggerBar kdbEntry={kdbEntry}>
                        <div className="flex h-full flex-col items-start gap-2 border-2 border-indigo-500 px-4 py-2 md:flex-row">
                            <ul className="flex border-2 border-lime-500 px-2">
                                <li className="flex list-none flex-col gap-2 text-teal-400">
                                    <p className="text-xs font-bold underline">
                                        Abstract:
                                    </p>
                                    {kdbEntry.abstract ? (
                                        <p className="text-xs">
                                            {kdbEntry.abstract}
                                        </p>
                                    ) : (
                                        <>
                                            <p className="text-xs">
                                                no abstract
                                            </p>
                                            <button
                                                onClick={() => setEdit(true)}
                                            >
                                                add abstract
                                            </button>
                                            {edit ? (
                                                <EditAbstract
                                                    pdfId={kdbEntry.id}
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
                                                {kdbEntry.authors.join(', ')}
                                            </p>
                                        </div>
                                        <div className="flex flex-row items-center justify-between">
                                            <div className="flex flex-col">
                                                <p className="text-xs font-bold underline">
                                                    PMID:
                                                </p>
                                                <p className="text-xs">
                                                    {kdbEntry.pmid}
                                                </p>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-xs font-bold underline">
                                                    PMCID:
                                                </p>
                                                <p className="text-xs">
                                                    {kdbEntry.pmcid}
                                                </p>
                                            </div>
                                            <Link
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                to={kdbEntry.internalPdfUrl}
                                                className="text-xs"
                                            >
                                                <p className="text-xs font-bold underline">
                                                    Download PDF
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </AccordianTriggerBar>
                </div>
            ))}
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
            <div className="flex flex-row items-center justify-between gap-2 text-xs">
                <div className="flex flex-col items-start gap-1 ">
                    <p className="text-xs font-bold underline">Journal</p>
                    <p className="text-xs font-bold">{kdbEntry.journal}</p>
                </div>
                <div className="grow" />

                <AccordianNavBar kdbEntry={kdbEntry} />
                <div className="grow" />

                <div className="flex flex-col items-end gap-1">
                    <p className="text-xs font-bold underline">
                        Publication Year
                    </p>
                    <p className="text-xs font-bold">({kdbEntry.pubYear})</p>
                </div>
                <div className="flex flex-col items-center justify-center pl-4">
                    <button
                        type="button"
                        onClick={toggleOpen}
                        aria-label="Search database"
                        className="rounded-md p-2 text-teal-400 transition-all duration-300 hover:backdrop-blur-sm"
                    >
                        {open ? (
                            <div className="flex flex-col items-end gap-1">
                                <p className="text-xs font-bold">
                                    Hide Details
                                </p>
                                <ChevronUpIcon />
                            </div>
                        ) : (
                            <div className="flex flex-col items-end gap-1">
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
                    className="text-xs font-bold hover:cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Semantic Scholar
                </Link>
            </div>
        </div>
    )
}
