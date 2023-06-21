import type { LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { prisma } from '~/server/prisma.server'
export async function loader({ request, params }: LoaderArgs) {
    const clinvarData = await prisma.clinvar.findMany({
        take: 50,
    })
    console.log(clinvarData.slice(0, 10))

    if (!clinvarData) {
        throw new Error('No clinvar data found')
    }
    return json({ clinvarData })
}

export default function ClinVarIndexRoute() {
    const data = useLoaderData<typeof loader>()
    return (
        <div className="">
            <details className="mb-4">
                <pre className="text-sm">
                    {JSON.stringify(data.clinvarData.slice(0, 10), null, 2)}
                </pre>
            </details>
        </div>
    )
}
