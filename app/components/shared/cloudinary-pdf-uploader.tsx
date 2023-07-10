import { useFetcher } from '@remix-run/react'
import React from 'react'

type PdfUploaderProps = {
    setUrl: React.Dispatch<React.SetStateAction<string>>
}
export default function PdfUploader({ setUrl }: PdfUploaderProps) {
    const [selectedFile, setSelectedFile] = React.useState<boolean>(false)

    const pdfFetcher = useFetcher()

    const handleDisabledState = () => {
        if (!selectedFile) {
            setSelectedFile(true)
            setUrl(pdfFetcher.data?.pdfUrl)
        }

        return false
    }

    const handlePdfUpload = async () => {
        pdfFetcher.submit({
            pdfUrl: 'pdfUrl',
            key: 'pdfUrl',
            action: `/actions/pdf`,
        })
        pdfFetcher.data?.pdfUrl && setUrl(pdfFetcher.data.pdfUrl)
        setSelectedFile(true)
    }

    return (
        <>
            <pdfFetcher.Form
                method="post"
                encType="multipart/form-data"
                action="/actions/pdf"
                onChange={handlePdfUpload}
                className="flex flex-col items-center justify-center"
            >
                <input
                    className="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="file"
                    name="pdfUrl"
                    accept="application/pdf"
                />
                <button disabled={!selectedFile} type="submit">
                    Upload
                </button>
            </pdfFetcher.Form>
            {pdfFetcher.data?.pdfUrl && (
                <div>
                    <input
                        type="text"
                        name="pdfUrl"
                        onChange={void setUrl(pdfFetcher.data?.pdfUrl)}
                    />
                </div>
            )}
        </>
    )
}
