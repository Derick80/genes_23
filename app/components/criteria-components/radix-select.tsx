import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import { Label } from "@radix-ui/react-select";
import { criteria } from "~/constants/consts";

export type Props = {
  options: {
    id: string;
    evidenceType: string;
    label: string;
  }[];
  data: {
    id: string;
    evidenceType: string;
    label: string;
  };
};

export default function RadixSelect({ options, data }: Props) {
  const dropOptions = Object.entries(options).map((key) => {
    return (
      <Select.Item key={key[0]} value={key[1].label}>
        {key[1].label}
      </Select.Item>
    );
  });

  // console.log(dropOptions, 'dropOptions');
  const revampCriteria = criteria.map((item) => {
    return {
      id: item.id,
      evidenceType: item.strength.map((item) => item.value),
      label: item.strength.map((item) => item.label),
    };
  });
  console.log(revampCriteria, "revampCriteria");

  return (
    <div className="flex flex-col gap-2">
      {Object.entries(data).map((key) => {
        return (
          <Select.Root key={key[0]}>
            <Select.Trigger className="flex w-full items-center justify-between rounded-md border p-2 text-white">
              <Select.Value placeholder="Select" className="text-black" />

              <ChevronDownIcon />
            </Select.Trigger>
            <Select.Content className="rounded-md border bg-white text-black shadow-lg">
              {Object.entries(key[1]).map((key) => {
                return (
                  <Select.Item key={key[0]} value={key[1].label}>
                    {key[1].label}
                  </Select.Item>
                );
              })}
            </Select.Content>
          </Select.Root>
        );
      })}
    </div>
  );
}
