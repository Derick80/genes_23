import type { LoaderArgs } from "@remix-run/node";

import { json, redirect } from "@remix-run/node";
export async function loader({ request, params }: LoaderArgs) {
  return json({});
}
