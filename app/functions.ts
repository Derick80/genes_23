import { useMatches } from "@remix-run/react";
import { useMemo } from "react";

export async function useMatchesData(
  id: string
): Promise<Record<string, string>> {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  );
  return route?.data;
}

export function textFormat(text: string) {
  const firstLetter = text.split("_")[0].substring(0, 1).toUpperCase();
  const middle = text.split("_")[0].substring(1);

  const endofword =
    text.split("_")[1].substring(0, 1).toUpperCase() +
    text.split("_")[1].substring(1);

  return firstLetter + middle + " " + endofword;
}
