import cloudinary from 'cloudinary'
import type { UploadHandler } from '@remix-run/node'
import { unstable_parseMultipartFormData } from '@remix-run/node'
import {
    unstable_composeUploadHandlers,
    unstable_createMemoryUploadHandler,
    writeAsyncIterableToWritable,
} from '@remix-run/node'

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function uploadPdfToCloudinary(
    data: AsyncIterable<Uint8Array>,
    filename: string
) {
    const uploadPromise = new Promise(async (resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
            {
                cloud_name: 'dch-photo',
                folder: 'alleles_pdf',
                use_filename: true,
                unique_filename: false,
                public_id: filename,
            },

            (error, result) => {
                if (error) {
                    reject(error)
                    return
                }
                resolve(result)
            }
        )
        await writeAsyncIterableToWritable(data, uploadStream)
    })
    return uploadPromise
}

export const pdfUploadHandler: UploadHandler = unstable_composeUploadHandlers(
    async ({ name, data, filename }) => {
        if (name !== 'pdfUrl') {
            return undefined
        }
        // use the filename to create a new file in cloudinary but not the file extension

        const updatedFileName =
            filename?.replace(/\.[^/.]+$/, '') || 'no_file_name'
        console.log(
            'updatedFileName from cloudinary server file',
            updatedFileName
        )
        const uploadedPdf = (await uploadPdfToCloudinary(
            data,
            updatedFileName
        )) as string
        console.log('uploadedPdf from cloudinary server file', uploadedPdf)

        // @ts-ignore
        // this ignore came from the source i followed.  I think I kinda solved this by adding the type to the uploadImage function

        return uploadedPdf.secure_url
    },
    unstable_createMemoryUploadHandler()
)

export async function cloudinaryPdfUpload(request: Request) {
    const formData = await unstable_parseMultipartFormData(
        request,
        pdfUploadHandler
    )
    console.log(
        Object.fromEntries(formData),
        'formData from cloudinary server file'
    )

    const pdfUrl = formData.get('pdfUrl' || '') as string
    return pdfUrl
}
