import { Group } from "@radix-ui/react-select";

type GroupData = {
  [group: string]: {
    benign: string[];
    pathogenic: string[];
  };
};

const data: GroupData = {
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
};

const specialCases: string[] = [
  "PM2_Supporting",
  "PVS1_Supporting",
  "PVS1_Strong",
  "PVS1_Moderate",
];

const firstTwoLetters: string[] = [];

for (const group in data) {
  for (const category in data[group as keyof GroupData]) {
    const values =
      data[group as keyof GroupData][
        category as keyof GroupData[keyof GroupData]
      ];
    for (const value of values) {
      let firstTwoChars: string;
      const underscoreIndex = value.indexOf("_");
      if (underscoreIndex > -1 && specialCases.includes(value)) {
        firstTwoChars = value[0];
      } else if (underscoreIndex > -1) {
        firstTwoChars = value[0] + value[underscoreIndex + 1];
      } else {
        firstTwoChars = value.substring(0, 2);
      }
      firstTwoLetters.push(firstTwoChars);
    }
  }
}

console.log(firstTwoLetters);
