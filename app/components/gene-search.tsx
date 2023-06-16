import { useNavigate, useSearchParams } from '@remix-run/react'

export default function GeneSearch() {
    const navigate = useNavigate()
    let [searchParams] = useSearchParams()
    return (
        <form className="text-black">
            <input type="text" placeholder="Search for a gene" name="filter" />
            <button type="submit">Search</button>
        </form>
    )
}
