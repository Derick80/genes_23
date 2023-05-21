// consts.ts is my reference for this file
// define an interfacefor the criterion then define an interface for the acmg criteria
interface Criterion {
  benign: string[];
  pathogenic: string[];
}

export interface AcmgCriteria {
  population: Criterion;
  computational: Criterion;
  functional: Criterion;
  segregation: Criterion;
  deNovo: Criterion;
  allelic: Criterion;
  other_database: Criterion;
  other_data: Criterion;
}

//   export the base acmg criteria
export const acmgCriteria: AcmgCriteria = {
  population: {
    benign: ["BA1", "BS1", "BS2"],
    pathogenic: ["PM2", "PM2_Supporting", "PS4"],
  },
  computational: {
    benign: ["BP4", "BP7", "BP1", "BP3"],
    pathogenic: [
      "PP3",
      "PM4",
      "PM5",
      "PVS1",
      "PVS1_Strong",
      "PVS1_Moderate",
      "PVS1_Supporting",
      "PS1",
    ],
  },

  functional: {
    benign: ["BS3"],
    pathogenic: ["PS3", "PM1", "PP2"],
  },
  segregation: {
    benign: ["BS4"],
    pathogenic: ["PP1"],
  },
  deNovo: {
    benign: [],
    pathogenic: ["PS2", "PM6"],
  },
  allelic: {
    benign: ["BP2"],
    pathogenic: ["PM3"],
  },
  other_database: {
    benign: ["BP6"],
    pathogenic: ["PP5"],
  },
  other_data: {
    benign: ["BP5"],
    pathogenic: ["PP4"],
  },
};

export type GroupData = {
  [group: string]: {
    benign?: string[];
    pathogenic?: string[];
  };
};
// define an object that will help convert outdated acmg strength to updated acmg strength

const specialCases: string[] = [
  "PM2_Supporting",
  "PVS1_Supporting",
  "PVS1_Strong",
  "PVS1_Moderate",
];

//  define a mapping from the special cases to their corresponding values
const specialConversion: { [key: string]: string } = {
  PM2_Supporting: "P",
  PVS1_Supporting: "P",
  PVS1_Strong: "S",
  PVS1_Moderate: "M",
};

//   define a function that will extract the first two letters of the acmg strength
export const extractFirstTwoLetters = (arr: string[]) => {
  const firstTwoLetters: string[] = [];
  return arr.map((item) => {
    const firstLetter = item[0];
    console.log(firstLetter, "firstLetter");

    let firstTwoChars: string;

    const underScoreIndex = item.indexOf("_");
    if (underScoreIndex > -1 && specialCases.includes(item)) {
      firstTwoChars = item[0] + specialConversion[item];
    } else {
      firstTwoChars = item.substring(0, 2);
    }
    firstTwoLetters.push(firstTwoChars);
    return firstTwoChars;
  });
};
// Define a mapping from strength letters to their corresponding values
export const strengthValues: { [key: string]: number } = {
  V: 8,
  A: 8,
  S: 4,
  M: 2,
  P: 1,
};

//   Define a function to convert the output to numbers that correspond to the strength values
export function convertToNumbers(arr: string[]) {
  const strengthValues: { [key: string]: number } = {
    V: 8,
    A: 8,
    S: 4,
    M: 2,
    P: 1,
  };

  const transformedValues = arr.map((item) => {
    const firstLetter = item[0];

    const secondLetter = item[1];

    const secondNumber = strengthValues[secondLetter];
    const transformedNumber =
      firstLetter === "B" ? -secondNumber : secondNumber;
    return transformedNumber;
  });
  const totalSum = transformedValues.reduce((sum, value) => sum + value, 0);

  interface Classification {
    totalSum: number;
    classification: string;
  }
  function getClass(totalSum: number): string {
    for (const item of scoreMatrix) {
      const [minScore, maxScore] = item.score;
      if (totalSum >= minScore && totalSum <= maxScore) {
        return item.name;
      }
    }
    return "Indeterminate";
  }
  const classification = getClass(totalSum);

  const obj = {} as Classification;

  obj.totalSum = totalSum;
  obj.classification = classification;
  return obj;
}

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

function getClassification(score: number): string {
  for (const item of scoreMatrix) {
    const [minScore, maxScore] = item.score;
    if (score >= minScore && score <= maxScore) {
      return item.name;
    }
  }

  return "Indeterminate";
}
