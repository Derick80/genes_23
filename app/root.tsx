import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import Layout from "./components/layout";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Variant Classifications" },
    {
      name: "description",
      content: "ACMG Variant Classifications Powered by Remix-run",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}
export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold text-red-500">Uh Oh!...</h1>
        <h1 className="text-2xl font-bold text-red-500">
          Status:{error.status}
        </h1>
        <p className="text-xl">{error.data.message}</p>
      </div>
    );
  }
  let errorMessage = "unknown error";
  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold">uh Oh..</h1>
      <p className="text-xl">something went wrong</p>
      <pre>{errorMessage}</pre>
    </div>
  );
}
