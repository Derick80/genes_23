import { PrismaClient } from "@prisma/client";
import acmgClinvar from "./acmg_clinvartojson.json";

const prisma = new PrismaClient();

export async function seedACMGClinvar() {
  await prisma.clinvar.createMany({
    data: acmgClinvar,
    skipDuplicates: true,
  });
}

seedACMGClinvar()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
