export type PubmedItem = {
  uid: string;
  pubdate: string;
  epubdate: string;
  source: string;
  authors: {
    name: string;
    authtype: string;
    clusterid: string;
  }[];
  lastauthor: string;
  title: string;
  sorttitle: string;
  volume: string;
  issue: string;
  pages: string;
  lang: string[];
  nlmuniqueid: string;
  issn: string;
  essn: string;
  pubtype: string[];
  recordstatus: string;
  pubstatus: string;
  articleids: {
    idtype: string;
    idtypen: number;
    value: string;
  }[];
  history: {
    pubstatus: string;
    date: string;
  }[];
  references: any[];
  attributes: string[];
  pmcrefcount: number;
  fulljournalname: string;
  elocationid: string;
  doctype: string;
  srccontriblist: any[];
  booktitle: string;
  medium: string;
  edition: string;
  publisherlocation: string;
  publishername: string;
  srcdate: string;
  reportnumber: string;
  availablefromurl: string;
  locationlabel: string;
  doccontriblist: any[];
  docdate: string;
  bookname: string;
  chapter: string;
  sortpubdate: string;
  sortfirstauthor: string;
  vernaculartitle: string;
};

export const pubmedData = {
  testdata: {
    header: {
      type: "esummary",
      version: "0.3",
    },
    result: {
      "36916756": {
        uid: "36916756",
        pubdate: "2023 Mar 1",
        epubdate: "",
        source: "Bioinformatics",
        authors: [
          {
            name: "Munté E",
            authtype: "Author",
            clusterid: "",
          },
          {
            name: "Feliubadaló L",
            authtype: "Author",
            clusterid: "",
          },
          {
            name: "Pineda M",
            authtype: "Author",
            clusterid: "",
          },
          {
            name: "Tornero E",
            authtype: "Author",
            clusterid: "",
          },
          {
            name: "Gonzalez M",
            authtype: "Author",
            clusterid: "",
          },
          {
            name: "Moreno-Cabrera JM",
            authtype: "Author",
            clusterid: "",
          },
          {
            name: "Roca C",
            authtype: "Author",
            clusterid: "",
          },
          {
            name: "Bales Rubio J",
            authtype: "Author",
            clusterid: "",
          },
          {
            name: "Arnaldo L",
            authtype: "Author",
            clusterid: "",
          },
          {
            name: "Capellá G",
            authtype: "Author",
            clusterid: "",
          },
          {
            name: "Mosquera JL",
            authtype: "Author",
            clusterid: "",
          },
          {
            name: "Lázaro C",
            authtype: "Author",
            clusterid: "",
          },
        ],
        lastauthor: "Lázaro C",
        title:
          "vaRHC: an R package for semi-automation of variant classification in hereditary cancer genes according to ACMG/AMP and gene-specific ClinGen guidelines.",
        sorttitle:
          "varhc an r package for semi automation of variant classification in hereditary cancer genes according to acmg amp and gene specific clingen guidelines",
        volume: "39",
        issue: "3",
        pages: "",
        lang: ["eng"],
        nlmuniqueid: "9808944",
        issn: "1367-4803",
        essn: "1367-4811",
        pubtype: ["Journal Article"],
        recordstatus: "PubMed - indexed for MEDLINE",
        pubstatus: "4",
        articleids: [
          {
            idtype: "pubmed",
            idtypen: 1,
            value: "36916756",
          },
          {
            idtype: "pmc",
            idtypen: 8,
            value: "PMC10032633",
          },
          {
            idtype: "pmcid",
            idtypen: 5,
            value: "pmc-id: PMC10032633;",
          },
          {
            idtype: "doi",
            idtypen: 3,
            value: "10.1093/bioinformatics/btad128",
          },
          {
            idtype: "pii",
            idtypen: 4,
            value: "7077135",
          },
        ],
        history: [
          {
            pubstatus: "received",
            date: "2022/11/07 00:00",
          },
          {
            pubstatus: "revised",
            date: "2023/02/10 00:00",
          },
          {
            pubstatus: "accepted",
            date: "2023/03/02 00:00",
          },
          {
            pubstatus: "pubmed",
            date: "2023/03/15 06:00",
          },
          {
            pubstatus: "medline",
            date: "2023/03/25 06:00",
          },
          {
            pubstatus: "entrez",
            date: "2023/03/14 08:34",
          },
        ],
        references: [],
        attributes: ["Has Abstract"],
        pmcrefcount: 41,
        fulljournalname: "Bioinformatics (Oxford, England)",
        elocationid: "doi: 10.1093/bioinformatics/btad128",
        doctype: "citation",
        srccontriblist: [],
        booktitle: "",
        medium: "",
        edition: "",
        publisherlocation: "",
        publishername: "",
        srcdate: "",
        reportnumber: "",
        availablefromurl: "",
        locationlabel: "",
        doccontriblist: [],
        docdate: "",
        bookname: "",
        chapter: "",
        sortpubdate: "2023/03/01 00:00",
        sortfirstauthor: "Munté E",
        vernaculartitle: "",
      },
      uids: ["36916756"],
    },
  },
};
