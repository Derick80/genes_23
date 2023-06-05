import { Label } from "@radix-ui/react-label";
import React from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
type Props = {
  data: {
    [key: string]: {
      id: string;
      evidenceType: string;
      label: string;
      definition: string;
      weight: number;
    }[];
  };

  options: {
    id: string;
    evidenceType: string;
    label: string;
    definition: string;
    weight: number;
  }[];
  handleListCriteriaUsed: (
    value: string,
    evidenceType: string,
    weight: number
  ) => void;
};

export default function CustomCriteriaSelect({
  data,
  options,
  handleListCriteriaUsed,
}: Props) {
  return (
    <div 
      className="flex flex-col w-full"
    >
      {Object.entries(data).map((key, index) => {
        const dataagain = options.filter(
          (item) => item.evidenceType === key[0]
        );

        return (
          <div 
            key={key[0]}
          >
            <Label key={key[0]} className="text-white">
              {key[0]}
            </Label>

            <div
              key={key[0]}
              className="flex w-fsull items-center justify-between rounded-md border p-2 text-white"
            >
              <Select.Root
                name={key[0]}
                onValueChange={(value) => [
                  handleListCriteriaUsed(
                    value,
                    key[0],
                    dataagain
                      .filter(
                        (item: {
                          id: string;
                          evidenceType: string;
                          label: string;
                          definition: string;
                          weight: number;
                        }) =>
                          item.label === value && item.evidenceType === key[0]
                      )
                      .map(
                        (item: {
                          id: string;
                          evidenceType: string;
                          label: string;
                          definition: string;
                          weight: number;
                        }) => item.weight
                      )[0]
                  ),
                ]}
              >
                <Select.Trigger className="flex w-full items-center justify-between rounded-md  p-2 text-white">
                  <Select.Value
                    placeholder="Select"
                    className="text-black"
                  ></Select.Value>
                  <ChevronDownIcon />
                </Select.Trigger>
                <Select.Content className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                  <Select.ScrollUpButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="p-[5px]">
                    {options
                      .filter((item) => item.evidenceType === key[0])
                      .map((item) => {
                        return (
                          <Select.Item key={item.id} value={item.label}>
                            <p className="text-xs text-black">{item.label}</p>
                            <p className="text-xs text-black">
                              {item.definition}
                            </p>
                            <Select.ItemText>{item.label}</Select.ItemText>
                          </Select.Item>
                        );
                      })}
                  </Select.Viewport>
                </Select.Content>
              </Select.Root>
            </div>
          </div>
        );
      })}
    </div>
  );
}
