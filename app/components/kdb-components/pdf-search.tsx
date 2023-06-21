import { redirect } from '@remix-run/node'
import { Form, useNavigate, useSearchParams } from '@remix-run/react'
import React from 'react'
import { set } from 'zod'
export function shouldRevalidate() {
    return true
}
type SearchTarget = 'kdb' | 'variants' | 'criterion' | 'genes'

const placeholderText = {
    kdb: 'Search the KDB for PMID, PMCID, Author, Title"',
    variants: 'Search Variants',
    criterion: 'Search Criterion',
    genes: 'Search Genes',
}

type SearchProps = {
    searchSourceName: string
}

export default function PdfSearch({ searchSourceName }: SearchProps) {
    const placeholder = placeholderText[searchSourceName as SearchTarget]
    console.log('placeholder', placeholder)

    const [searchParams, setSearchParams] = useSearchParams()
    const formRef = React.useRef<HTMLFormElement>(null)
    const navigate = useNavigate()
    function handleClear(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()

        searchParams.delete('filter')

        formRef.current?.reset()
        // navigate(-1)
        navigate(`/kdb/`, {
            replace: true,
        })
        return redirect('/kdb')
    }
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const { value } = e.currentTarget
        console.log('value', value)

        if (value === null) {
            setSearchParams('')
            navigate(`/kdb/`, {
                replace: true,
            })
        } else {
            setSearchParams(value)
        }
        navigate(`/kdb/?filter=${value}`, {
            replace: true,
        })
        return redirect('/kdb')
    }

    return (
        <div className="flex flex-col  items-center gap-2 border-2 border-purple-500 p-1 md:p-2">
            <Form
                ref={formRef}
                className="flex w-full flex-col items-center gap-2"
                method="GET"
            >
                <input
                    className="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white placeholder:text-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    name="filter"
                    placeholder={placeholder}
                    // defaultValue={searchParams.get('filter' ) || ''}
                />
                <div className="flex gap-2">
                    <button
                        className="rounded-xl bg-blue-300 px-3 py-2 font-semibold text-blue-600 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-400"
                        type="submit"
                        onClick={(e) => handleClick(e)}
                    >
                        Search
                    </button>

                    <button
                        className="w-1/2 rounded-xl bg-red-300 px-3 py-2 font-semibold text-blue-600 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-400"
                        onClick={(e) => handleClear(e)}
                        type="submit"
                    >
                        Clear
                    </button>
                </div>
            </Form>
        </div>
    )
}
