import { useMatches } from "@remix-run/react";
import { useMemo } from "react";
import { ZodError, ZodSchema } from "zod";

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



// UP



type ActionErrors<T> = Partial<Record<keyof T, string>>

export async function validateAction<ActionInput>({
  request,
  schema
}: {
  request: Request
  schema: ZodSchema
}) {
  const body = Object.fromEntries(await request.formData()) as ActionInput

  try {
    const formData = schema.parse(body) as ActionInput
    return { formData, errors: null }
  } catch (error) {
    console.log(error)

    const errors = error as ZodError<ActionInput>

    return {
      formData: body,
      errors: errors.issues.reduce((acc: ActionErrors<ActionInput>, curr) => {
        const key = curr.path[0] as keyof ActionInput

        acc[key] = curr.message
        return acc
      }, {})
    }
  }
}