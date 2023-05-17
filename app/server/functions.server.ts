// Use this to split up the classification criteria into an array of objects
export async function parseACMGAnnotation(array: Record<string, string>) {
  const dataTypes = [];
  for (const key in array) {
    if (array.hasOwnProperty(key)) {
      const element = array[key];
      const data = {
        id: key,
        name: element,
        breakdown: {
          category: element.split("", 1)[0],
          strength: Number(element.split("_", 2)[1]),
        },
      };
      dataTypes.push(data);
    }
  }
  return dataTypes.map((item) => item.breakdown);
}

type CalcTypes = {
  category: string;
  strength: number;
};

// Use this to calculate the strength of the criteria from the Tavtigian paper 2020
export async function reduceAndCalcACMGCategory(array: CalcTypes[]) {
  const pathogenicCriteria = array.filter((item) => item.category === "P");
  const benignCriteria = array.filter((item) => item.category === "B");
  const pathogenicStrength = pathogenicCriteria.reduce((acc, item) => {
    return (acc += item.strength);
  }, 0);

  const benignStrength = benignCriteria.reduce((acc, item) => {
    return -1 * (acc += item.strength);
  }, 0);
  const total = pathogenicStrength + benignStrength;
  const realTotal =
    total <= -7
      ? "B"
      : total <= -2
      ? "LB"
      : total <= 5
      ? "VUS"
      : total <= 9
      ? "LP"
      : "P";

  return {
    pathogenicCriteria,
    benignCriteria,
    pathogenicStrength,
    benignStrength,
    total,
    realTotal,
  };
}
// Combine the two functions above
export async function getACMGClassification(array: Record<string, string>) {
  const t1 = await parseACMGAnnotation(array);

  const t2 = await reduceAndCalcACMGCategory(t1);

  return t2;
}
export function calc2(array: CalcTypes[]) {
  const pathogenicCriteria = ["P"];
  const benignCriteria = ["B"];
  const pathogenicStrength = pathogenicCriteria.map(
    (item) => item.split("_", 2)[1]
  );
  const benignStrength = benignCriteria.map((item) => item.length);

  return {
    pathogenicCriteria,
    benignCriteria,
    pathogenicStrength,
    benignStrength,
  };
}
