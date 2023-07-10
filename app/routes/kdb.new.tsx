import type { ActionArgs } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import React from 'react'
import PdfUploader from '~/components/shared/cloudinary-pdf-uploader'
import {
    createPdfEntry,
    getPMSearchTerm,
    getSemanticScholorArticleDetails,
} from '~/server/pdf.server'

export async function action({ request, params }: ActionArgs) {
    const formData = await request.formData()

    const pdfUrl = formData.get('pdfUrl') as string
    const searchPmid = (await getPMSearchTerm(pdfUrl)) as string

    const data = await getSemanticScholorArticleDetails(searchPmid)
    console.log('data, from semantic scholor', data)

    const {
        semanticScholarId,
        semanticScholarUrl,
        title,
        abstract,
        authors,
        journal,
        pubYear,
        pmid,
        pmcId,
        doi,
    } = data

    const dbData = {
        semanticScholarId,
        semanticScholarUrl,
        title,
        abstract,
        authors,
        journal,
        pubYear: Number(pubYear),
        pmid,
        pmcid: pmcId,
        doi,
        internalPdfUrl: pdfUrl,
    }
    const pdfEntry = await createPdfEntry(dbData)

    if (!pdfEntry) {
        return json({ error: 'There was an error uploading the pdf' })
    }

    return redirect(`/kdb/${pdfEntry.id}`)
}

export default function Wip() {
    const actionData = useActionData<{
        pdfEntry: {
            error?: string
        }
    }>()

    const [url, setUrl] = React.useState<string>('')

    return (
        <div className="mb-20 flex flex-col items-center justify-center">
            <PdfUploader setUrl={setUrl} />

            <div>
                <Form
                    className="flex w-full flex-col items-center justify-center"
                    method="POST"
                >
                    {actionData?.pdfEntry?.error && (
                        <div className="text-red-500">
                            {actionData.pdfEntry.error}
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </Form>
            </div>
        </div>
    )
}
