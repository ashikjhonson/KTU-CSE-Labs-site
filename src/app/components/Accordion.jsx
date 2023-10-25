import File from "./File";
import Folder from "./Folder";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default function AccordionCustomIcon({ items }) {
  return (
    <div className="flex flex-col mt-3 gap-5 w-full md:w-[500px] lg:w-[700px]">
      {items
        ? Object.entries(items).map(([item, value]) => {
            let name = item.split(".")[0].replace("_", " ");

            return (
              <Accordion allowToggle key={item}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <p className="capitalize font-mono text-lg">{name}</p>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <File title={item} code={value} />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            );
          })
        : null}
    </div>
  );
}
