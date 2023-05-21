export default function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Documentation />
    </div>
  );
}

function Documentation() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Documentation</h1>
      <p className="text-gray-500">
        This is a work in progress. Please check back later.
      </p>
      <p className="text-gray-500">Generating Criterion</p>

      <h3 className="text-xl font-bold">Criterion</h3>
      <p className="text-gray-500">
        The ACMG/AMP guidelines are broken down into 28 individual criteria.
        Each Criterion is assigned an evidenceType Group of which there are 8
      </p>
      <h3 className="text-xl font-bold">Variants</h3>
      <p className="text-gray-500">
        Variants are the individual mutations that are being evaluated. Each
        variant is assigned a classification based on the criteria.
      </p>
    </div>
  );
}
