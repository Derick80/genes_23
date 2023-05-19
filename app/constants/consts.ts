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
        value: "P_2",
        label: "PM2",
      },
      {
        id: "2",
        value: "P_1",
        label: "PM2_Supporting",
      },
      {
        id: "3",
        value: "B_8",
        label: "BA1",
      },
      {
        id: "4",
        value: "B_4",
        label: "BS1",
      },
      {
        id: "1",
        value: "P_4",
        label: "PS4",
      },
      {
        id: "9",
        value: "B_4",
        label: "BS2",
      },
      
    ],
  },
  {

    id: "1.1",
    name: 'Computational and Predictive',
    strength: [
      
      {
        id: "4",
        value: "B_1",
        label: "BP4",
      }, {
        id: "10",
        value: "B_1",
        label: "BP1",
      },{
        id: "12",
        value: "B_1",
        label: "BP7",
      }, {
        id:'4.5',
        value:'P_1',
        label:'PP3'
      },
      {
        id: "11",
        value: "B_1",
        label: "BP3",
      },
      {
        id: "7",
        value: "P_2",
        label: "PM4",
      },
      {
        id: "8",
        value: "PM_5",
        label: "PM5",
      },
      {
        id: "1",
        value: "P_8",
        label: "PVS1",
      },
      {
        id: "2",
        value: "P_4",
        label: "PVS1_Strong",
      },
      {
        id: "3",
        value: "P_2",
        label: "PVS1_Moderate",
      },
      {
        id: "4",
        value: "P_1",
        label: "PVS1_Supporting",
      },
      {
        id: "5",
        value: "P_4",
        label: "PS1",
      },
    ],
  },
  {
    id: "2",
    name: "Functional",
    strength: [
      {
        id: "0",
        value: "",
        label: "Pick a Criterion",
      },
      {
        id: "1",
        value: "P_4",
        label: "PS3",
      },
      {
        id: "2",
        value: "B_4",
        label: "BS3",
      },
      {
        id: "6",
        value: "P_2",
        label: "PM1",
      },
      
      {
        id: "9",
        value: "P_1",
        label: "PP2",
      },
      
     
    ],
  },
  
  
  {

    id: "4.1",
    name: 'Segregation',
    strength: [
      {
        id: "5",
        value: "P_1",
        label: "PP1",
      },
      {
        id: "10",
        value: "B_4",
        label: "BS4",
      },
    ],
  },
  {
    id: "4.5",
    name: 'De Novo',
    strength: [
      
        {
          id: '0.5',
          value: "P_4",
          label: "PS2",
        },
        {
          id: "3",
          value: "P_2",
          label: "PM6",
        }
      ],
  } ,
  {
    id: "4.6",
    name: 'Allelic',
    strength: [
      {
        id: "7",
        value: "B_1",
        label: "BP2",
      },{
        id: "4",
        value: "P_2",
        label: "PM3",
      },
    ],
  },
  {
    id: "4",
    name: "Other Database",
    strength: [
      {
        id: "0",
        value: "",
        label: "Pick a Criterion",
      },
      {
        id: "1",
        value: "P_1",
        label: "PP5",
      },

      {
        id: "2",
        value: "B_1",
        label: "BP6",
      },
    ],
  },
  {
    id: "5",
    name: "Other Data",
    strength: [
      {
        id: "0",
        value: "",
        label: "Pick a Criterion",
      },
     
      
     
     
      
     
      {
        id: "6",
        value: "P_1",
        label: "PP4",
      },
      
      {
        id: "8",
        value: "B_1",
        label: "BP5",
      },
      
      
      
    ],
  },
];
export const scoreMatrix = [
  {
    name: "Benign",
    score: [-100, -7],
  },
  {
    name: "Likely Benign",
    score: [-1, -6],
  },
  {
    name: "Variant of Uncertain Significance",
    score: [0, 5],
  },
  {
    name: "Likely Pathogenic",
    score: [6, 9],
  },
  {
    name: "Pathogenic",
    score: [10, 100],
  },
];
