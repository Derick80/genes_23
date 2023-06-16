import { PrismaClient } from "@prisma/client";
import { acmgGeneList } from "./acmg-gene-list";
import { symbol } from "zod";

const prisma = new PrismaClient();

export async function seedAcmgGenes() {
  const geneList = await prisma.gene.findMany();
  const getGeneIdBySymbol = (symbol: string) => {
    const gene = geneList.find((gene) => gene.symbol === symbol);
    return gene ? gene.id : "";
  };

  try {
    for (const g of acmgGeneList) {
      const geneId = getGeneIdBySymbol(g.symbol);
      await prisma.acmgGermlineGene.create({
        data: {
          geneId: geneId,
          symbol: g.symbol,
          geneMime: g.gene_mim,
          diseasePhenotype: g.disease_phenotype,
          disorderMime: g.disorder_mim,
          phenotypeCategory: g.phenotype_categor,
          inheritanceMode: g.inheritance,
          sfListVersion: g.sf_list_version,
          variantsToReport: g.variants_to_report,
        },
      });
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
