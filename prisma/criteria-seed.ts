import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function seed() {
  const email = "iderick@gmail.com";

  // cleanup the existing database
  await prisma.user.delete({ where: { email: email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = (await process.env.HASHEDPASSWORD) as string;

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  await prisma.criteria.createMany({
    data: [
      {
        criterion_name: "PVS0",
        criteriaCategories: "Pathogenic",
        evidenceType: "other",
        baseWeight: "Very Strong",
        baseScore: 8,
        definition:
          "Other Very strong data supporting pathogenic classification",
      },
      {
        criterion_name: "PVS1",
        criteriaCategories: "Pathogenic",
        evidenceType: "computational_data",
        baseWeight: "Very Strong",
        baseScore: 8,
        definition:
          "Predicted null variant in a gene where LOF is a known mechanism of disease",
      },
      {
        criterion_name: "PS0",
        criteriaCategories: "Pathogenic",
        evidenceType: "other",
        baseWeight: "Strong",
        baseScore: 4,
        definition: "Other strong data supporting pathogenic classification",
      },
      {
        criterion_name: "PS1",
        criteriaCategories: "Pathogenic",
        evidenceType: "computational_data",
        baseWeight: "Strong",
        baseScore: 4,
        definition:
          "Same amino acid change as previously established pathogenic variant regardless of nucleotide change",
      },
      {
        criterion_name: "PS2",
        criteriaCategories: "Pathogenic",
        evidenceType: "de_novo_data",
        baseWeight: "Strong",
        baseScore: 4,
        definition: "De novo (paternity and maternity confirmed",
      },
      {
        criterion_name: "PS3",
        criteriaCategories: "Pathogenic",
        evidenceType: "functional_data",
        baseWeight: "Strong",
        baseScore: 4,
        definition:
          "Well-established in vitro or in vivo functional studies supportive of a damaging effect on the gene or gene product",
      },
      {
        criterion_name: "PS4",
        criteriaCategories: "Pathogenic",

        evidenceType: "population_data",
        baseWeight: "Strong",
        baseScore: 4,
        definition:
          "Prevalence in affected individuals is significantly increased compared with the prevalence in controls",
      },
      {
        criterion_name: "PS5",
        criteriaCategories: "Pathogenic",
        evidenceType: "segregation_data",
        baseWeight: "Strong",
        baseScore: 4,
        definition: "Strong segregation_data",
      },

      {
        criterion_name: "PM0",
        criteriaCategories: "Pathogenic",
        evidenceType: "other",
        baseWeight: "Moderate",
        baseScore: 2,
        definition: "Other Moderate data supporting Pathogenic classification",
      },
      {
        criterion_name: "PM1",
        criteriaCategories: "Pathogenic",
        evidenceType: "functional_data",
        baseWeight: "Moderate",
        baseScore: 2,
        definition:
          "Located in a mutational hot spot and/or critical and well-established functional domain (e.g., active site of an enzyme) without benign variation",
      },
      {
        criterion_name: "PM2",
        criteriaCategories: "Pathogenic",
        evidenceType: "population_data",
        baseWeight: "Supporting",
        baseScore: 1,
        definition:
          "Absent from controls (or at extremely low frequency if recessive) in Exome Sequencing Project, 1000 Genomes Project, or Exome Aggregation Consortium",
      },
      {
        criterion_name: "PM3",
        criteriaCategories: "Pathogenic",
        evidenceType: "allelic_data",
        baseWeight: "Moderate",
        baseScore: 2,
        definition:
          "For recessive disorders, detected in trans with a pathogenic variant",
      },
      {
        criterion_name: "PM4",
        criteriaCategories: "Pathogenic",
        evidenceType: "computational_data",
        baseWeight: "Moderate",
        baseScore: 2,
        definition:
          "Protein length changes as a result of in-frame deletions/insertions in a nonrepeat region or stop-loss variants",
      },

      {
        criterion_name: "PM5",
        criteriaCategories: "Pathogenic",
        evidenceType: "computational_data",
        baseWeight: "Moderate",
        baseScore: 2,
        definition:
          "Novel missense change at an amino acid residue where a different missense change determined to be pathogenic has been seen before",
      },

      {
        criterion_name: "PM6",
        criteriaCategories: "Pathogenic",
        evidenceType: "de_novo_data",
        baseWeight: "Moderate",
        baseScore: 2,
        definition: "De Novo without confirmation of paternity and maternity",
      },

      {
        criterion_name: "PM8",
        criteriaCategories: "Pathogenic",
        evidenceType: "segregation_data",
        baseWeight: "Moderate",
        baseScore: 2,
        definition: "Moderate segregation",
      },
      {
        criterion_name: "PP0",
        criteriaCategories: "Pathogenic",
        evidenceType: "other",
        baseWeight: "Supporting",
        baseScore: 1,
        definition:
          "Other supporting data supporting Pathogenic classification",
      },
      {
        criterion_name: "PP1",
        criteriaCategories: "Pathogenic",
        evidenceType: "segregation_data",
        baseWeight: "Supporting",
        baseScore: 1,
        definition:
          "Cosegregation with disease in multiple affected family members",
      },
      {
        criterion_name: "PP2",
        criteriaCategories: "Pathogenic",
        evidenceType: "functional_data",
        baseWeight: "Supporting",
        baseScore: 1,
        definition:
          "Missense in gene with low rate of benign missense variants and path. missenses common",
      },
      {
        criterion_name: "PP3",
        criteriaCategories: "Pathogenic",
        evidenceType: "computational_data",
        baseWeight: "Supporting",
        baseScore: 1,
        definition:
          "Multiple lines of computational_data evidence support a deleterious effect on the gene /gene product",
      },
      {
        criterion_name: "PP4",
        criteriaCategories: "Pathogenic",
        evidenceType: "other_data",
        baseWeight: "Supporting",
        baseScore: 1,
        definition: `Patient's phenotype or family history is highly specific for a disease with a single genetic etiology`,
      },
      {
        criterion_name: "PP5",
        criteriaCategories: "Pathogenic",
        evidenceType: "other_database",
        baseWeight: "Supporting",
        baseScore: 1,
        definition: "Reputable source = pathogenic",
      },
      {
        criterion_name: "BA0",
        criteriaCategories: "Benign",
        evidenceType: "other",
        baseWeight: "Very Strong",
        baseScore: 8,
        definition: "Other Stand alone data supporting benign classification",
      },
      {
        criterion_name: "BA1",
        criteriaCategories: "Benign",

        evidenceType: "population_data",
        baseWeight: "Stand Alone",
        baseScore: 8,
        definition: "Population Frequency too high for disorder",
      },
      {
        criterion_name: "PS0",
        criteriaCategories: "Benign",
        evidenceType: "other",
        baseWeight: "Strong",
        baseScore: 4,
        definition: "Other  strong data supporting pathogenic classification",
      },
      {
        criterion_name: "BS1",
        criteriaCategories: "Benign",
        evidenceType: "population_data",
        baseWeight: "Strong",
        baseScore: 4,
        definition: "Population Frequency too high for disorder",
      },
      {
        criterion_name: "BS2",
        criteriaCategories: "Benign",
        evidenceType: "population_data",
        baseWeight: "Strong",
        baseScore: 4,
        definition:
          "Observation in conrols inconsistent with disease penetrance",
      },
      {
        criterion_name: "BS3",
        criteriaCategories: "Benign",
        evidenceType: "functional_data",
        baseWeight: "Strong",
        baseScore: 4,
        definition:
          "Well-established functional studies show no deleterious effect",
      },
      {
        criterion_name: "BS4",
        criteriaCategories: "Benign",
        evidenceType: "segregation_data",
        baseWeight: "Strong",
        baseScore: 4,
        definition:
          "Not segregating with disease in family study (genes with complete penetrance)",
      },
      {
        criterion_name: "PVS0",
        criteriaCategories: "Benign",
        evidenceType: "other",
        baseWeight: "Supporting",
        baseScore: 1,
        definition:
          "Other supporting data supporting pathogenic classification",
      },
      {
        criterion_name: "BP1",
        criteriaCategories: "Benign",
        evidenceType: "computational_data",
        baseWeight: "Supporting",
        baseScore: 1,
        definition: "Missense in gene where only truncating cause disease",
      },
      {
        criterion_name: "BP2",
        criteriaCategories: "Benign",
        evidenceType: "allelic_data",
        baseWeight: "Supporting",
        baseScore: 1,
        definition:
          "Observed in trans with a pathogenic variant for a fully penetrant dominant gene/disorder",
      },
      {
        criterion_name: "BP2",
        criteriaCategories: "Benign",
        evidenceType: "allelic_data",
        baseWeight: "Supporting",
        baseScore: 1,
        definition:
          "observed in cis with a pathogenic variant in any inheritance pattern",
      },
      {
        criterion_name: "BP3",
        criteriaCategories: "Benign",
        evidenceType: "computational_data",
        baseWeight: "Supporting",
        baseScore: 1,
        definition:
          "In-frame deletions/insertions in a repetitive region without a known function",
      },
      {
        criterion_name: "BP4",
        criteriaCategories: "Benign",
        evidenceType: "computational_data",
        baseWeight: "Supporting",
        baseScore: 1,
        definition:
          "Multiple lines of computational_data evidence suggest no impact on gene or gene product (conservation, evolutionary, splicing impact, etc.)",
      },

      {
        criterion_name: "BP5",
        criteriaCategories: "Benign",
        evidenceType: "allelic_data",
        baseWeight: "Supporting",
        baseScore: 1,
        definition:
          "Being seen in trans with a mutation or in homozygous state in individuals without severe disease for that gene",
      },
      {
        criterion_name: "BP5",
        criteriaCategories: "Benign",
        evidenceType: "other_data",
        baseWeight: "Supporting",
        baseScore: 1,
        definition: "Found in case with an alternate cause",
      },
      {
        criterion_name: "BP6",
        criteriaCategories: "Benign",
        evidenceType: "other_database",
        baseWeight: "Supporting",
        baseScore: 1,
        definition: "Reputable source w/out shared data = benign",
      },
    ],
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
