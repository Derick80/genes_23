import { ChevronUpIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import React from 'react'
import type { Criterion } from '~/acmg-functions-utilities/acmg-criteria'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { Label } from '@radix-ui/react-label'
export default function CustomCriteriaCheckBox({
    data,
    handleCheckBoxListCriteriaUsed,
}: {
    data: Criterion[]
    handleCheckBoxListCriteriaUsed: (
        value: string,
        evidenceType: string,
        weight: number
    ) => void
}) {
    const [open, setOpen] = React.useState(false)

    return (
        <div className="flex w-full flex-col gap-2 rounded-md border-2 p-1">
            <div className="flex justify-between gap-2">
                <div>{data[0].evidenceType}</div>
                <button
                    type="button"
                    onClick={() => {
                        setOpen(!open)
                    }}
                >
                    {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>
            </div>
            {open &&
                data.map((item) => {
                    return (
                        <Checkbox.Root
                            className="outlisne-none flex items-center  justify-center rounded-[4px] bg-slate-300 text-black shadow-[0_2px_10px] shadow-black hover:bg-blue-50 focus:shadow-[0_0_0_2px_black]"
                            id={item.label}
                            key={item.label}
                            name={item.evidenceType}
                            onCheckedChange={(e) => {
                                handleCheckBoxListCriteriaUsed(
                                    item.label,
                                    item.evidenceType,
                                    item.weight
                                )
                            }}
                            value={item.label}
                        >
                            <Checkbox.Indicator
                                className="text-teal-400"
                                id={item.label}
                            >
                                <CheckIcon />
                            </Checkbox.Indicator>
                            <Label className="pl-[15px] text-[15px] leading-none text-black">
                                <p className="p-1">{item.label}</p>
                                <p className="text-xs">{item.definition}</p>
                            </Label>
                        </Checkbox.Root>
                    )
                })}
        </div>
    )
}
