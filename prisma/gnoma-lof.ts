import { PrismaClient } from "@prisma/client";
import { gene_symbols } from "./gene_symbols";
import lofMetrics from "./gnomad_lof_metrics.json";
// This file is used to seed the database with data from the gnomad_lof_metrics.json file and the gene_symbols.json file

// Instantiate the Prisma client
const prisma = new PrismaClient();
async function seed() {
  await prisma.gene.createMany({
    data: gene_symbols,
    skipDuplicates: true,
  });

  const geneList = await prisma.gene.findMany();

  // Function to dynamically assign geneId based on gene symbol
  const getGeneIdBySymbol = (symbol: string) => {
    const gene = geneList.find((gene) => gene.symbol === symbol);
    return gene ? gene.id : null;
  };

  const lofMetricsParsed = JSON.parse(JSON.stringify(lofMetrics));
  const lofmetrics = lofMetricsParsed.map(
    (item: {
      gene: string;
      transcript: any;
      obs_mis: any;
      exp_mis: any;
      oe_mis: any;
    }) => ({
      geneId: getGeneIdBySymbol(item.gene),
      transcript: item.transcript,
      obs_mis: item.obs_mis,
      exp_mis: item.exp_mis,
      oe_mis: item.oe_mis,
    })
  );

  await prisma.lofMetrics.createMany({
    data: lofmetrics,
    skipDuplicates: true,
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// Compare this snippet from prisma/backend-seed.ts:
