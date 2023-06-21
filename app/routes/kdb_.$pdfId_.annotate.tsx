import { Label } from '@radix-ui/react-label'
import type { ActionArgs, LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { z } from 'zod'
import { zx } from 'zodix'
import PdfList from '~/components/kdb-components/pdf-library-list'
import TipTap from '~/components/tiptap'
import { prisma } from '~/server/prisma.server'
import { validateAction } from '~/utilities/utility-functions'
export async function loader({ request, params }: LoaderArgs) {
    const pdfId = params.pdfId
    console.log('pdfId', pdfId)
    const pdfLibrary = await prisma.pdfLibrary.findUnique({
        where: {
            id: pdfId,
        },
        include: {
            pdfNotes: {
                where: {
                    pdfLibraryId: pdfId,
                },
                take: 1,
                orderBy: {
                    createdAt: 'desc',
                },
            },
        },
    })
    if (!pdfLibrary) {
        throw new Error('Article not found')
    }

    return json({ pdfLibrary })
}

const schema = z.object({
    notes: z.string(),
})

type ActionInput = z.infer<typeof schema>

export async function action({ request, params }: ActionArgs) {
    const pdfId = zx.parseParams(params, {
        pdfId: z.string().nonempty(),
    }).pdfId

    const { formData, errors } = await validateAction({
        request,
        schema,
    })

    if (errors) {
        return json(errors, { status: 400 })
    }

    const { notes } = formData as ActionInput
    await prisma.pdfLibrary.update({
        where: {
            id: pdfId,
        },
        data: {
            pdfNotes: {
                create: {
                    notes: notes,
                },
            },
        },
    })

    return json({ message: 'success' })
}

export default function AnnotatePdfRoute() {
    const data = useLoaderData<typeof loader>()
    return (
        <div className="flex h-full w-full flex-col  justify-center gap-2">
            <h1 className="text-2xl font-bold">Annotate PDF</h1>
            <PdfList pdfLibrary={data.pdfLibrary} />

            <Form method="post">
                <Label htmlFor="notes">Notes</Label>
                <TipTap
                    content={
                        data.pdfLibrary.pdfNotes
                            .map((note) => note.notes)
                            .join('') || 'bhi ther'
                    }
                />
                <button type="submit">Save</button>
            </Form>
            <div
                dangerouslySetInnerHTML={{
                    __html:
                        data.pdfLibrary.pdfNotes
                            .map((note) => note.notes)
                            .join('') || '',
                }}
            />
        </div>
    )
}
