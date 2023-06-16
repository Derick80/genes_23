import { Form } from '@remix-run/react'

export default function EditAbstract({ pdfId }: { pdfId: string }) {
    return (
        <Form
            className="z-10 flex flex-col"
            method="post"
            action={`/kdb/${pdfId}/edit-abstract`}
        >
            <div className="flex flex-col">
                <label htmlFor="abstract">Abstract</label>
                <textarea
                    name="abstract"
                    id="abstract"
                    cols={30}
                    rows={10}
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </Form>
    )
}
