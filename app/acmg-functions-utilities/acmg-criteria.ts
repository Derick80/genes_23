/* eslint-disable @typescript-eslint/no-unused-vars */
// consts.ts is my reference for this file
import type { Criterion as PrismaCriterion } from "@prisma/client";
import type { SerializeFrom } from "@remix-run/node";

export type Criterion = SerializeFrom<PrismaCriterion>;

// define an object that will help convert outdated acmg strength to updated acmg strength

export const specialCases: string[] = [
  "PM2_Supporting",
  "PVS1_Supporting",
  "PVS1_Strong",
  "PVS1_Moderate",
];

//  define a mapping from the special cases to their corresponding values
export const specialConversion: { [key: string]: string } = {
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
  V: 5,
  A: 5,
  S: 4,
  M: 2,
  P: 1,
};

//   Define a function to convert the output to numbers that correspond to the strength values
export function convertToNumbers(arr: string[]) {
  const strengthValues: { [key: string]: number } = {
    V: 5,
    A: 5,
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
  const obj = {} as Classification;

  if (totalSum <= -7) {
    obj.classification = "Benign";
  } else if (totalSum >= -6 && totalSum <= -1) {
    obj.classification = "Likely Benign";
  } else if (totalSum >= 0 && totalSum <= 5) {
    obj.classification = "Variant of Uncertain Significance";
  } else if (totalSum >= 6 && totalSum <= 10) {
    obj.classification = "Likely Pathogenic";
  } else if (totalSum > 10) {
    obj.classification = "Pathogenic";
  } else {
    obj.classification = "Error";
  }

  obj.totalSum = totalSum;
  return obj;
}
