import type { ActionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { cloudinaryPdfUpload } from '~/server/cloudinary.server'
export async function action({ request, params }: ActionArgs) {
    const pdfUrl = await cloudinaryPdfUpload(request)

    console.log('pdfUrl from action function', pdfUrl)

    return json({ pdfUrl })
}
