import type { LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
export async function loader({ request, params }: LoaderArgs) {
    return json({
        message: 'Hello from the server!',
    })
}

export default function BlogIndex() {
    const data = useLoaderData<typeof loader>()

    return <div className="">data here</div>
}
