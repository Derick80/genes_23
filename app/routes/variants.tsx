import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { variants } from "~/constants/variants";
import { Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { DotsVerticalIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import React from "react";
export async function loader({ request, params }: LoaderArgs) {
  return json({ variants });
}

export default function VariantRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 py-2">
            

      <main className="flex flex-1 flex-col items-center gap-2 px-20 text-center">
      <Outlet />
        <h1 className="text-6xl font-bold">Variant</h1>

        {data.variants.map((variant) => (
          <VariantSummaryCard variant={variant} key={variant.id} />
        ))}
      </main>
    </div>
  );
}

export type VariantCardType = {
  id: string;
  symbol: string;
  transcript: string;
  hgvs: string;
  protein: string;
  cdna: string;
  aa: string;
  chr: string;
  pos: string;
  ref: string;
  alt: string;
  hgnc: string;
  omim: string;
  clinvar: string;
  gnomad: string;
  sift: string;
  polyphen: string;
  zygosity: string;
  inheritance: string;
  vaf: string;
};

export function VariantCardFront({ variant }: { variant: VariantCardType }) {
  const [flip, setFlip] = React.useState(false);

  return (
    <div className="flex  w-full flex-col gap-1 border-2 rounded-md p-2">
    <div
      className="flex h-auto w-full flex-col gap-1 overflow-hidden rounded-md p-2"
      key={variant.id}
    >
      <div className="flex flex-row items-center justify-between gap-2">
       <Link to={`/variants/${variant.id}`}> <h5 className="text-xl font-bold text-gray-900">{variant.symbol}</h5></Link>
       

        <span className="text-xs text-gray-500">{variant.cdna}</span>
        <span className="text-xs text-gray-500">{variant.aa}</span>
        <span className="text-xs text-gray-500">ClassificationHolder</span>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex w-full flex-col items-start gap-2">
          <h5 className=" text-base">Details</h5>
          <span className="text-xs text-gray-500">{variant.zygosity}</span>
          <span className="text-xs text-gray-500">{variant.vaf}% VAF</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export function VariantCardBack({ variant }: { variant: VariantCardType }) {

  return (
    <div
      className="flex h-auto w-full flex-col gap-1 overflow-hidden rounded-md border-red-500  p-2"
      key={variant.id}
   

    >
      <div className="flex flex-row items-center justify-between gap-2">
        <h5 className="text-xl font-bold text-gray-900">{variant.symbol}</h5>

        <span className="text-xs text-gray-500">{variant.hgvs}</span>
        <span className="text-xs text-gray-500">{variant.protein}</span>
      </div>
      <div className="flex h-full flex-col gap-2">
        <div className="flex w-full flex-row items-center gap-2">
          <span className="text-xs text-gray-500">
            chr{variant.chr}:{variant.pos}
            {variant.ref}&gt;{variant.alt}
          </span>

          <span className="text-xs text-gray-500">{variant.gnomad  }</span>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full flex-col gap-2">
            <div className="flex flex-col gap-2
               p-1 rounded-md
            ">
            <h5 className="text-xs text-gray-500 text-left font-semibold">inSilico</h5>
            <div className="flex flex-row gap-1">
  <p className="text-xs text-gray-500">Combined:</p>
<p className="text-xs text-gray-500">
 
  {sortInSilico({polyphen: variant.polyphen, sift: variant.sift})}</p>

</div>    
           <div className="flex flex-row gap-2">
            <p className="text-xs text-gray-500">SIFT:</p>
           <span className="text-xs text-gray-500">{variant.sift}</span>
            <p className="text-xs text-gray-500">PolyPhen:</p>

            <span className="text-xs text-gray-500">{variant.polyphen}</span>
            </div>





            
            
            </div>
          </div>
          <div className="flex w-full flex-row gap-1">
            <h5 className="text-xs text-gray-500 font-semibold">Inheritance:</h5>
            <span className="text-xs text-gray-500">{
              variant.inheritance === "Autosomal Dominant" ? "A.D" : "A.R"
            }</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export function VariantSummaryCard({ variant }: { variant: VariantCardType }) {
  const [flip, setFlip] = React.useState(false);

  return (
    <div
      className="flex h-auto w-full flex-col gap-1 overflow-hidden rounded-md border p-2"
      key={variant.id}
    >
      {flip ? (



          <VariantCardBack variant={variant} />
      ) : (
     
          <VariantCardFront variant={variant} />
      )}
      <div className="flex flex-row justify-end gap-2">
        <DotsVerticalIcon />
        <button onClick={() => setFlip(!flip)}>
          <InfoCircledIcon />
        </button>
      </div>
    </div>
  );
}


function sortInSilico({polyphen, sift}: {polyphen: string, sift: string}) {
  const phen = polyphen.toLowerCase()
  const sifted = sift.toLowerCase()

  if (phen === "benign" && sift === "benign") {
    return "Benign"
  } else if (phen === "benign" && sifted === "deleterious") {
    return "Likely Benign"
  } else if (phen === "possibly damaging" && sifted === "tolerated") {
    return "Likely Benign"
  } else if (phen === "possibly damaging" && sifted === "deleterious") {
    return "Likely Pathogenic"
  } else if (phen === "probably damaging" && sifted === "tolerated") {
    return "Likely Pathogenic"
  } else if (phen === "probably damaging" && sifted === "deleterious") {
    return "Pathogenic"
  } else {
    return "Unknown"
  }

}
  
    