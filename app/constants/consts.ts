export const radios = [
  {
    option: "Very Strong",
  },
  {
    option: "Strong",
  },
  {
    option: "Moderate",
  },
  {
    option: "Supporting",
  },
  {
    option: "Stand alone",
  },
];

export const criteria = [
  {
    id: "1",
    name: "Population",
    strength: [
      {
        id: "0",
        value: "",
        label: "Pick a Criterion",

      },

      {
        id: "1",
        value: "PM2_2",
        label: "PM2",
      },
      {
        id: "2",
        value: "PM2_1",
        label: "PM2_Supporting",
      },
      {
        id: "3",
        value: "BA1_8",
        label: "Stand alone",
      },
      {
        id: "4",
        value: "BS1_4",
        label: "BS1",
      },
      {
        id: "5",
        value: "IND_0",
        label: "Indeterminate",
      },
    ],
  },
  {
    id: "2",
    name: "Functional and Computational",
    strength: [
      {
        id: "0",
        value: "",
        label: "Pick a Criterion",

      },
      {
        id: "1",
        value: "PS3_4",
        label: "PS3",
      },
      {
        id: "2",
        value: "BS3_4",
        label: "BS3",
      },
      {
        id: "3",
        value: "PP4_1",
        label: "PP4",
      },
      {
        id: "4",
        value: "BP4_1",
        label: "BP4",
      },
      {
        id: "5",
        value: "IND_0",
        label: "Indeterminate",
      },
    ],
  },
  {
    id: "3",
    name: "Protein",
    strength: [{
      id: "0",
      value: "",
      label: "Pick a Criterion",

    },
      {
        id: "1",
        value: "PVS1_8",
        label: "PVS1",
      },
      {
        id: "2",
        value: "PVS1_4",
        label: "PVS1_Strong",
      },
      {
        id: "3",
        value: "PVS1_2",
        label: "PVS1_Moderate",
      },
      {
        id: "4",
        value: "PVS1_1",
        label: "PVS1_Supporting",
      },
      {
        id: "5",
        value: "PS1_4",
        label: "PS1",
      },
      {
        id: "6",
        value: "PM1_2",
        label: "PM1",
      },
      {
        id: "7",
        value: "PM4_2",
        label: "PM4",
      },
      {
        id: "8",
        value: "PM_5",
        label: "PM5",
      },
      {
        id: "9",
        value: "PP2_1",
        label: "PP2",
      },
      {
        id: "10",
        value: "BP1_1",
        label: "BP1",
      },
      {
        id: "11",
        value: "BP3_1",
        label: "BP3",
      },
      {
        id: "12",
        value: "BP7_1",
        label: "BP7",
      },
      {
        id: "13",
        value: "IND_0",
        label: "Indeterminate",
      },
    ],
  },
  {
    id: "4",
    name: "Reputable Source",
    strength: [{
      id: "0",
      value: "",
      label: "Pick a Criterion",

    },
      {
        id: "1",
        value: "PP5_1",
        label: "PP5",
      },

      {
        id: "2",
        value: "BP6_1",
        label: "BP6",
      },
    ],
  },
  {
    id: "5",
    name: "Case Level",
    strength: [{
      id: "0",
      value: "",
      label: "Pick a Criterion",

    },
      {
        id: "1",
        value: "PS4_4",
        label: "PS4",
      },
      {
        id: "2",
        value: "PS2_4",
        label: "PS2",
      },
      {
        id: "3",
        value: "PM6_2",
        label: "PM6",
      },
      {
        id: "4",
        value: "PM3_2",
        label: "PM3",
      },
      {
        id: "5",
        value: "PP1_1",
        label: "PP1",
      },
      {
        id: "6",
        value: "PP4_1",
        label: "PP4",
      },
      {
        id: "7",
        value: "BP2_1",
        label: "BP2",
      },
      {
        id: "8",
        value: "BP5_1",
        label: "BP5",
      },
      {
        id: "9",
        value: "BS2_4",
        label: "BS2",
      },
      {
        id: "10",
        value: "BS4_4",
        label: "BS4",
      },
    ],
  },
];
export   const scoreMatrix = [
  {
    name: 'Benign',
    score:[-7,-100]
  },
  {
    name: 'Likely Benign',
    score:[-1,-6]
  },
  {
    name: 'Variant of Uncertain Significance',
    score:[0,5]
  },
  {
    name: 'Likely Pathogenic',
    score:[6,9]
  },
  {
    name: 'Pathogenic',
    score:[10,100]
  },

]