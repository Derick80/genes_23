import BayesTable from '~/components/bayes-table'

export default function Documentation() {
    return (
        <div className="flex w-full flex-col gap-2 rounded-md border-2 md:w-1/3">
            <h1 className="text-2xl font-bold">Documentation</h1>
            <p className="text-gray-500">
                This is a work in progress. Please check back later.
            </p>
            <h2 className="text-xl font-bold">Known Issues + Future Fixes</h2>
            <p className="text-gray-500">
                Cannot unselect criteria. This is a known issue and will be
                fixed in the future.
            </p>
            <p>
                Form isn't hooked up to an action yet but was built on a route
                that could recieve form data
            </p>
            <p>
                Some UI/layout issues including large dropdown menus, lack of
                actual checkboxes in the checkbox component
            </p>
            <h3 className="text-xl font-bold">ACMG Calculator</h3>
            <p className="text-gray-500">
                This implementation of the calculator is based on the 2015
                ACMG/AMP guidelines and Tavtigian paper using Bayes scores
            </p>
            <p className="text-gray-500">
                I followed most of the rules but modified the scoring such that
                a single very strong piece of evidence can not be enough to
                classify a variant as pathogenic. That means I took the
                recommended score of 8 and reduced it 2 5. This means that a
                very strong piece of evidence requires at least 1 supporting
                piece of evidence to be classified as pathogenic. I think this
                is in line with the spirit of the guidelines.
            </p>
            <BayesTable />
            <p className="text-gray-500">Generating Criterion</p>

            <h3 className="text-xl font-bold">Criterion</h3>
            <p className="text-gray-500">
                The ACMG/AMP guidelines are broken down into 28 individual
                criteria. Each Criterion is assigned an evidenceType Group of
                which there are 8
            </p>
            <h3 className="text-xl font-bold">Variants</h3>
            <p className="text-gray-500">
                Variants are the individual mutations that are being evaluated.
                Each variant is assigned a classification based on the criteria.
            </p>
        </div>
    )
}
