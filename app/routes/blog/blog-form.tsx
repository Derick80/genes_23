import { Form, useActionData, useLoaderData } from '@remix-run/react'
import React from 'react'
import BlogImageUploader from '~/components/shared/file-uploader'

type PostData = {
    id?: string
    title: string
    slug: string
    description: string
    content: string
    imgUrl: string
    categories: string[]
    authorId: string
}
export default function BlogForm() {
    const data = useLoaderData()
    // keep form state updated if data is available from loader
    // actiondata for errors
    const actionData = useActionData()

    const {
        title,
        slug,
        description,
        content,
        imgUrl,
        categories,
        authorId,
        id,
    } = data?.post || {}
    // store the form state in a variable
    const formState = {
        title,
        slug,
        description,
        content,
        imgUrl,
        categories,
        authorId,
        id,
    } as PostData

    const [state, setState] = React.useState(formState)
    // update imageUrl
    const [url, setUrl] = React.useState('')
    // write a function to update the state of the form
    function updateFormState(
        event: React.ChangeEvent<HTMLInputElement>,
        key: string
    ) {
        const value = event.target.value
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }))
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <BlogImageUploader setUrl={setUrl} />

            <Form
                className="flex flex-col items-center justify-center"
                method="post"
            >
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="text black rounded border border-gray-400 px-4 py-2"
                    defaultValue={data?.post?.title}
                    onChange={(event) => updateFormState(event, 'title')}
                />
                {actionData?.errors?.title && (
                    <div className="text-red-500">
                        {actionData?.errors?.title}
                    </div>
                )}
                <label htmlFor="slug">Slug</label>
                <div className="flex">
                    <p className="text black rounded-l border border-gray-400 px-4 py-2">
                        {data.post?.slug}
                    </p>
                </div>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    className="text black rounded border border-gray-400 px-4 py-2"
                    defaultValue={data?.post?.description}
                    onChange={(event) => updateFormState(event, 'description')}
                />
                {actionData?.errors?.description && (
                    <div className="text-red-500">
                        {actionData?.errors?.description}
                    </div>
                )}

                <label htmlFor="content">Content</label>
                <input
                    type="textarea"
                    name="content"
                    id="content"
                    className="text black rounded border border-gray-400 px-4 py-2"
                    defaultValue={data?.post?.content}
                    onChange={(event) => updateFormState(event, 'content')}
                />
                {actionData?.errors?.content && (
                    <div className="text-red-500">
                        {actionData?.errors?.content}
                    </div>
                )}

                <input type="hidden" name="id" value={data?.post?.id} />
                <input
                    type="hidden"
                    name="authorId"
                    value={data?.post?.authorId}
                />
                <input
                    type="text"
                    name="imgUrl"
                    value={url || data?.post?.imgUrl}
                    className="text black rounded border border-gray-400 px-4 py-2"
                    onChange={(event) => updateFormState(event, 'imgUrl')}
                />

                <button
                    type="submit"
                    className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                    name="intent"
                    value="create"
                >
                    Create
                </button>
            </Form>
        </div>
    )
}
