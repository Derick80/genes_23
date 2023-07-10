import type { ActionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { cloudindaryBlogImageUpload } from '~/server/cloudinary.server'
export async function action({ request, params }: ActionArgs) {
    const imgUrl = await cloudindaryBlogImageUpload(request)

    console.log('imgUrl from action function', imgUrl)

    return json({ imgUrl })
}
