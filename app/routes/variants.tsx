import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { variants } from "~/acmg-functions-utilities/variants";
import { Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { DotsVerticalIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import React, { useCallback } from "react";
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
          <CardContainer key={variant.id} variant={variant} />
        ))}
      </main>
    </div>
  );
}

const CardContainer = ({ variant }: { variant: VariantCardType }) => {
  const [flip, setFlip] = React.useState(false);

  const handleFlip = useCallback(() => {
    setFlip((flip) => !flip);
  }, []);

  return (
    <div
      key={variant.id}
      className="h-[350px] w-[450px] rounded-md border-2 bg-gray-800 p-2 "
    >
      <div className="duration-800 preserve-3d relative h-full w-full transform-gpu items-center transition-transform">
        {flip ? (
          <CardBack variant={variant} handleFlip={handleFlip} />
        ) : (
          <CardFront variant={variant} handleFlip={handleFlip} />
        )}
      </div>
    </div>
  );
};

function CardFront({
  handleFlip,
  variant,
}: {
  handleFlip: () => void;
  variant: VariantCardType;
}) {
  return (
    <div className="[ backface-visibility:hidden] absolute flex h-full w-full flex-col">
      <div className="flex h-auto w-full grow flex-col justify-between gap-3 overflow-hidden rounded-md border p-2">
        <Link to={`/variants/${variant.id}/annotate`}>
          <h3 className="text-xl font-bold text-slate-50">{variant.symbol}</h3>
        </Link>
        <div className="flex flex-row items-center justify-between gap-3">
          <div className="flex w-1/2 flex-col items-start gap-1">
            <span className="text-xs text-gray-500">
              <p className="text-left text-xs font-semibold text-slate-50">
                HGVS:
              </p>
              <p className="text-xs text-gray-500">{variant.hgvs}</p>
            </span>
            <span className="text-xs text-gray-500">
              <p className="text-left text-xs font-semibold text-slate-50">
                Protein:
              </p>
              <p className="text-xs text-gray-500">{variant.protein}</p>
            </span>
            <span className="text-xs text-gray-500">
              <p className="text-left text-xs font-semibold text-slate-50">
                cDNA:
              </p>
              <p className="text-xs text-gray-500">{variant.cdna}</p>
            </span>
          </div>
          <div className="flex w-1/2 flex-col items-start gap-2 ">
            <span className="text-xs text-gray-500">
              <p className="text-left text-xs font-semibold text-slate-50">
                Transcript:
              </p>
              <p className="text-xs text-gray-500">{variant.transcript}</p>
            </span>
            <span className="text-xs text-gray-500">
              <p className="text-left text-xs font-semibold text-slate-50">
                CPRA:
              </p>
              <p className="text-xs text-gray-500">
                chr{variant.chr}:{variant.pos}
                {variant.ref}&gt;{variant.alt}
              </p>
            </span>
            <span className="text-xs text-gray-500">
              <p className="text-left text-xs font-semibold text-slate-50">
                AA:
              </p>
              <p className="text-xs text-gray-500">{variant.aa}</p>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-center text-xs font-semibold text-slate-50">
            Description
          </p>
          <p className="text-xs text-gray-500">{variant.description}</p>
        </div>
      </div>

      <div className="flex flex-row justify-end gap-2">
        <button onClick={handleFlip}>
          <InfoCircledIcon />
        </button>
      </div>
    </div>
  );
}

function CardBack({
  handleFlip,
  variant,
}: {
  handleFlip: () => void;
  variant: VariantCardType;
}) {
  return (
    <div className="[ backface-visibility:hidden] absolute flex h-full w-full flex-col">
      <div className="flex h-auto w-full grow flex-col gap-1 overflow-hidden rounded-md border p-2">
        back
      </div>
      <div className="flex flex-row justify-end gap-2">
        <button onClick={handleFlip}>
          <InfoCircledIcon />
        </button>
      </div>
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
  description: string;
};

export function VariantCardFront({ variant }: { variant: VariantCardType }) {
  const [flip, setFlip] = React.useState(false);

  return (
    <div className="flex  w-full flex-col gap-1 rounded-md border-2 p-2">
      <div
        className="flex h-[350px] w-[350px] flex-col gap-1 overflow-hidden rounded-md bg-transparent p-2"
        key={variant.id}
      ></div>
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

          <span className="text-xs text-gray-500">{variant.gnomad}</span>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full flex-col gap-2">
            <div
              className="flex flex-col gap-2
               rounded-md p-1
            "
            >
              <h5 className="text-left text-xs font-semibold text-gray-500">
                inSilico
              </h5>
              <div className="flex flex-row gap-1">
                <p className="text-xs text-gray-500">Combined:</p>
                <p className="text-xs text-gray-500">
                  {sortInSilico({
                    polyphen: variant.polyphen,
                    sift: variant.sift,
                  })}
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="text-xs text-gray-500">SIFT:</p>
                <span className="text-xs text-gray-500">{variant.sift}</span>
                <p className="text-xs text-gray-500">PolyPhen:</p>

                <span className="text-xs text-gray-500">
                  {variant.polyphen}
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row gap-1">
            <h5 className="text-xs font-semibold text-gray-500">
              Inheritance:
            </h5>
            <span className="text-xs text-gray-500">
              {variant.inheritance === "Autosomal Dominant" ? "A.D" : "A.R"}
            </span>
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

function sortInSilico({ polyphen, sift }: { polyphen: string; sift: string }) {
  const phen = polyphen.toLowerCase();
  const sifted = sift.toLowerCase();

  if (phen === "benign" && sift === "benign") {
    return "Benign";
  } else if (phen === "benign" && sifted === "deleterious") {
    return "Likely Benign";
  } else if (phen === "possibly damaging" && sifted === "tolerated") {
    return "Likely Benign";
  } else if (phen === "possibly damaging" && sifted === "deleterious") {
    return "Likely Pathogenic";
  } else if (phen === "probably damaging" && sifted === "tolerated") {
    return "Likely Pathogenic";
  } else if (phen === "probably damaging" && sifted === "deleterious") {
    return "Pathogenic";
  } else {
    return "Unknown";
  }
}
