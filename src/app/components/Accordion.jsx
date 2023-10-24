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
            console.log(name);
            return (
              <div>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <p className="capitalize">{name}</p>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <File title={item} code={value} />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                {/* <Accordion
                  open={open === name}
                  icon={<Icon id={name} open={name} />}
                  key={name}
                >
                  <AccordionHeader onClick={() => handleOpen(name)}>
                    <p className="capitalize">{name}</p>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="overflow-hidden">
                      <File title={name} code={value} />
                    </div>
                  </AccordionBody>
                </Accordion> */}
              </div>
            );
          })
        : null}
    </div>
  );
}
