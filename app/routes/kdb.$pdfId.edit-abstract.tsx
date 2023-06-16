import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { prisma } from "~/server/prisma.server";
export async function action({ request, params }: ActionArgs) {
  const pdfId = params.pdfId;
  console.log("pdfId", pdfId);
  const formData = await request.formData();
  const abstract = formData.get("abstract") as string;

  const updated = await prisma.pdfLibrary.update({
    where: {
      id: pdfId,
    },
    data: {
      abstract,
    },
  });

  if (!updated) {
    return json({ error: "There was an error updating the abstract" });
  }
  return redirect(`/kdb`);
}
