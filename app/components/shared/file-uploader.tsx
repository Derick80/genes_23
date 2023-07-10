import { useFetcher } from '@remix-run/react'
import React from 'react'

type FileUploaderProps = {
    setUrl: React.Dispatch<React.SetStateAction<string>>
}
export default function BlogImageUploader({ setUrl }: FileUploaderProps) {
    const [selectedFile, setSelectedFile] = React.useState<boolean>(false)

    const fileFetcher = useFetcher()

    const handleImageUpload = async () => {
        fileFetcher.submit({
            imgUrl: 'imgUrl',
            key: 'imgUrl',
            action: `/actions/files`,
        })
        fileFetcher.data?.imgUrl && setUrl(fileFetcher.data.imgUrl)
        setSelectedFile(true)
    }

    return (
        <>
            <fileFetcher.Form
                method="post"
                encType="multipart/form-data"
                action="/actions/files"
                onChange={handleImageUpload}
                className="flex flex-col items-center justify-center"
            >
                <input
                    className="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="file"
                    name="imgUrl"
                    accept="image/*"
                />
                <button
                    className="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={!selectedFile}
                    type="submit"
                >
                    Upload
                </button>
            </fileFetcher.Form>
            {fileFetcher.data?.imgUrl && (
                <div>
                    <input
                        type="text"
                        name="imgUrl"
                        onChange={void setUrl(fileFetcher.data?.imgUrl)}
                    />
                </div>
            )}
        </>
    )
}
