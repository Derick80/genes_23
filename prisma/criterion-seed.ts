export const criterions = [
  {
    evidenceType: "Computational and Predictive Data",
    criterionName: "PVS1",
    criterionBaseWeight: "Very Strong",
    definition:
      "VS: Same amino acid change as a previously established pathogenic variant regardless of nucleotide change.",
    example: "Val->Leu caused by either G>C or G>T in the same codon.",
    caveat:
      "Beware of changes that impact splicing rather than at the amino acid/protein level",
  },

  {
    evidenceType: "Computational and Predictive Data",
    criterionName: "PS1",
    criterionBaseWeight: "Strong",
    definition:
      "VS:Use for protein changes as long as splicing is ruled-out for both alterations. S:Use for protein changes as long as splicing is ruled-out for both alterations. M:Use for RNA changes as code PS1_RNA_Moderate if predictions or observations are similar or worse for the variant under consideration. Close matches must be VCEP approved LP/P variants.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "De Novo Data",
    criterionName: "PS2",
    criterionBaseWeight: "Strong",
    definition:
      "S: De novo (both maternity and paternity confirmed) in a patient with the disease and no family history.",
    example: "",
    caveat:
      "Confirmation of paternity only is insufficient. Egg donation, surrogate motherhood, errors in embryo transfer, etc. can contribute to non-maternity.",
  },

  {
    evidenceType: "Functional Data",
    criterionName: "PS3",
    criterionBaseWeight: "Strong",
    definition:
      "S: Well-established in vitro or in vivo functional studies supportive of a damaging effect on the gene or gene product",
    example: "",
    caveat:
      "Functional studies that have been validated and shown to be reproducible and robust in a clinical diagnostic laboratory setting are considered the most well-established.",
  },

  {
    evidenceType: "Population Data",
    criterionName: "PS4",
    criterionBaseWeight: "Strong",
    definition:
      "S: The prevalence of the variant in affected individuals is significantly increased compared to the prevalence in controls.",
    caveat:
      "Note 1: Relative risk (RR) or odds ratio (OR), as obtained from case-control studies, is >5.0 and the confidence interval around the estimate of RR or OR does not include 1.0. See manuscript for detailed guidance. Note 2: In instances of very rare variants where case-control studies may not reach statistical significance, the prior observation of the variant in multiple unrelated patients with the same phenotype, and its absence in controls, may be used as moderate level of evidence.",
    example: "",
  },

  {
    evidenceType: "Functional Data",
    criterionName: "PM1",
    criterionBaseWeight: "Moderate",
    definition:
      "M:Located in a mutational hot spot and/or critical and well-established functional domain (e.g. active site of an enzyme) without benign variation.",
    example:
      "P:Absent from controls (or at extremely low frequency if recessive) in Exome Sequencing Project, 1000 Genomes or Exome Aggregation Consortium.",
    caveat:
      "Population data for indels may be poorly called by next generation sequencing.",
  },
  {
    evidenceType: "Population Data",
    criterionName: "PM2",
    criterionBaseWeight: "Moderate",
    definition:
      "P:Absent from controls (or at extremely low frequency if recessive) in Exome Sequencing Project, 1000 Genomes or Exome Aggregation Consortium.",
    example: "",
    caveat:
      "Caveat: Population data for indels may be poorly called by next generation sequencing.",
  },
  {
    evidenceType: "Population Data",
    criterionName: "PM2_Supporting",
    criterionBaseWeight: "Supporting",
    definition:
      "P:Absent from controls (or at extremely low frequency if recessive) in Exome Sequencing Project, 1000 Genomes or Exome Aggregation Consortium.",
    example: "",
    caveat:
      "Caveat: Population data for indels may be poorly called by next generation sequencing.",
  },

  {
    evidenceType: "Allelic Data",
    criterionName: "PM3",
    criterionBaseWeight: "Moderate",
    definition:
      "M: For recessive disorders, detected in trans with a pathogenic variant",
    example: "",
    caveat:
      "This requires testing of parents (or offspring) to determine phase.",
  },

  {
    evidenceType: "Computational and Predictive Data",
    criterionName: "PM4",
    criterionBaseWeight: "Moderate",
    definition:
      "M:Protein length changes due to in-frame deletions/insertions in a non-repeat region or stop-loss variants.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "Computational and Predictive Data",
    criterionName: "PM5",
    criterionBaseWeight: "Moderate",
    definition:
      "M:Novel missense change at an amino acid residue where a different missense change determined to be pathogenic has been seen before.",
    example: "Arg156His is pathogenic; now you observe Arg156Cys.",
    caveat:
      "Beware of changes that impact splicing rather than at the amino acid/protein level.",
  },

  {
    evidenceType: "De Novo Data",
    criterionName: "PM6",
    criterionBaseWeight: "Moderate",
    definition:
      "M:Assumed de novo, but without confirmation of paternity and maternity.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "Segregation Data",
    criterionName: "PP1",
    criterionBaseWeight: "Supporting",
    definition:
      '"P:Co-segregation with disease in multiple affected family members in a gene definitively known to cause the disease.',
    example: "",
    caveat:
      "Note: May be used as stronger evidence with increasing segregation data",
  },

  {
    evidenceType: "Functional Data",
    criterionName: "PP2",
    criterionBaseWeight: "Supporting",
    definition:
      "P:Missense variant in a gene that has a low rate of benign missense variation and where missense variants are a common mechanism of disease.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "Computational and Predictive Data",
    criterionName: "PP3",
    criterionBaseWeight: "Supporting",
    definition:
      "P:Multiple lines of Computational evidence support a deleterious effect on the gene or gene product (conservation, evolutionary, splicing impact, etc.).",
    example: "",
    caveat:
      "As many in silico algorithms use the same or very similar input for their predictions, each algorithm should not be counted as an independent criterion. PP3 can be used only once in any evaluation of a variant.",
  },

  {
    evidenceType: "Other Data",
    criterionName: "PP4",
    criterionBaseWeight: "Supporting",
    definition:
      "P:Patient’s phenotype or family history is highly specific for a disease with a single genetic etiology.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "Other Database",
    criterionName: "PP5",
    criterionBaseWeight: "Supporting",
    definition:
      "P:Reputable source recently reports variant as pathogenic, but the evidence is not available to the laboratory to perform an independent evaluation.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "Population Data",
    criterionName: "BA1",
    criterionBaseWeight: "Stand alone",
    definition: "SA:Filtering Allele Frequency >.5%.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "Population Data",
    criterionName: "BS1",
    criterionBaseWeight: "Strong",
    definition: "S:Filtering Allele Frequency >.05%.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "Population Data",
    criterionName: "BS2",
    criterionBaseWeight: "Strong",
    definition:
      "S:Observed in a healthy adult individual for a recessive (homozygous), dominant (heterozygous), or X-linked (hemizygous) disorder, with full penetrance expected at an early age.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "Functional Data",
    criterionName: "BS3",
    criterionBaseWeight: "Strong",
    definition:
      "S:Well-established in vitro or in vivo functional studies show no damaging effect on protein function or splicing.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "Segregation Data",
    criterionName: "BS4",
    criterionBaseWeight: "Strong",
    definition: '"S:Lack of segregation in affected members of a family.',
    example: '"S:Lack of segregation in affected members of a family.',
    caveat:
      "Caveat: The presence of phenocopies for common phenotypes (i.e. cancer, epilepsy) can mimic lack of segregation among affected individuals. Also, families may have more than one pathogenic variant contributing to an autosomal dominant disorder, further confounding an apparent lack of segregation.",
  },

  {
    evidenceType: "Computational and Predictive Data",
    criterionName: "BP1",
    criterionBaseWeight: "Supporting",
    definition:
      "P:Missense variant in a gene for which primarily truncating variants are known to cause disease.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "Allelic Data",
    criterionName: "BP2",
    criterionBaseWeight: "Supporting",
    definition:
      "P:Observed in trans with a pathogenic variant for a fully penetrant dominant gene/disorder or observed in cis with a pathogenic variant in any inheritance pattern.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "Computational and Predictive Data",
    criterionName: "BP3",
    criterionBaseWeight: "Supporting",
    definition:
      "P:In frame-deletions/insertions in a repetitive region without a known function.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "Computational and Predictive Data",
    criterionName: "BP4",
    criterionBaseWeight: "Supporting",
    definition:
      "P:Multiple lines of Computational evidence suggest no impact on gene or gene product (conservation, evolutionary, splicing impact, etc)",
    example: "",
    caveat:
      "Caveat: As many in silico algorithms use the same or very similar input for their predictions, each algorithm cannot be counted as an independent criterion. BP4 can be used only once in any evaluation of a variant",
  },

  {
    evidenceType: "Allelic Data",
    criterionName: "BP5",
    criterionBaseWeight: "Supporting",
    definition:
      "P:Variant found in a case with an alternate molecular basis for disease.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "Other Database",
    criterionName: "BP6",
    criterionBaseWeight: "Supporting",
    definition:
      "P:Reputable source recently reports variant as benign, but the evidence is not available to the laboratory to perform an independent evaluation.",
    example: "",
    caveat: "",
  },

  {
    evidenceType: "Computational and Predictive Data",
    criterionName: "BP7",
    criterionBaseWeight: "Supporting",
    definition:
      "P:A synonymous variant for which splicing prediction algorithms predict no impact to the splice consensus sequence nor the creation of a new splice site AND the nucleotide is not highly conserved.",
    example: "",
    caveat: "",
  },
];

const criterion_wegiths = ["SA", "VS", "S", "M", "P", "OTHER"];
