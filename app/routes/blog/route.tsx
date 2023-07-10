import { getAuth } from '@clerk/remix/ssr.server'
import type { ActionArgs, LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { z } from 'zod'
import {
    createPost,
    deletePost,
    getAllPosts,
    updatePost,
} from '~/server/blog.server'
import { validateAction } from '~/utilities/utility-functions'
import BlogForm from './blog-form'
export async function loader(args: LoaderArgs) {
    const { userId } = await getAuth(args)
    console.log(userId, 'userId')
    const posts = await getAllPosts()

    if (posts.length === 0) {
        return json(
            {
                status: 404,
                message: 'No posts found',
            },
            {
                status: 404,
            }
        )
    }

    return json({
        posts,
    })
}

const postSchema = z.object({
    intent: z.string(),
    title: z.string(),
    slug: z.string().optional(),
    description: z.string(),
    content: z.string(),
    imgUrl: z.string(),
    categories: z.array(z.string()),
    postId: z.string().optional(),
})

type ActionInput = z.infer<typeof postSchema>

export async function action(args: ActionArgs, { request }: ActionArgs) {
    const { userId } = await getAuth(args)
    if (!userId) return json({ errors: ['Unauthorized'] }, { status: 401 })
    console.log(userId, 'userId')

    const { formData, errors } = await validateAction({
        request,
        schema: postSchema,
    })
    if (errors) {
        return json({ errors }, { status: 422 })
    }
    const { intent, title, description, content, imgUrl, categories, postId } =
        formData as ActionInput

    switch (intent) {
        case 'create': {
            // create post
            const slug = title.toLowerCase().replace(/\s/g, '-')
            const inputData = {
                title,
                slug,
                description,
                content,
                imgUrl,
                categories,
                authorId: userId,
            }
            const created = await createPost(inputData)
            return json({ created }, { status: 201 })
        }
        case 'update': {
            const slug = title.toLowerCase().replace(/\s/g, '-')
            if (!postId)
                return json({ errors: ['Invalid Form Dat'] }, { status: 400 })
            // update post
            const updateData = {
                id: postId,
                title,
                slug,
                description,
                content,
                imgUrl,
                categories,
                authorId: userId,
            }
            const updated = await updatePost(updateData)
            return json({ updated }, { status: 200 })
        }
        case 'delete': {
            // delete post]
            if (!postId)
                return json({ errors: ['Invalid Form Dat'] }, { status: 400 })

            const deleted = await deletePost(postId)
            return json({ deleted }, { status: 200 })
        }
        default:
            return json({ errors: ['Invalid Form Dat'] }, { status: 400 })
    }
}

export default function BlogIndex() {
    const data = useLoaderData<typeof loader>()
    console.log(data, 'data')

    return (
        <div className="flex flex-col items-center">
            data here
            <BlogForm />
        </div>
    )
}
