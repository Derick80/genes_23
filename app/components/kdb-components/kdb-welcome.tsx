import PdfSearch from '../shared/search'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '~/components/shadcnui/accordion'
export default function KdbWelcome() {
    return (
        <div className="flex w-full flex-col items-center gap-2 border-2 border-purple-500 p-2">
            <p className="text-2xl">Welcome to the KDB</p>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="documentation">
                    <AccordionTrigger className="text-xl">
                        {' '}
                        Documentation
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-lg">
                            The KDB is a database of knowledge about the effects
                            of variants on human health.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
