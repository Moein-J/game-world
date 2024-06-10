// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const AccordionContainer = ({ game }) => {
//   return (
//     <div className="p-4">
//       <Accordion type="single" collapsible>
//         <AccordionItem value="item-1">
//           <AccordionTrigger>توضیحات</AccordionTrigger>
//           <AccordionContent>{game.information}</AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// };

// export default AccordionContainer;
import { ChevronDown } from "lucide-react";
import "./style.css";
const AccordionContainer = ({ game }) => {
  return (
    <div className="p-4 tab flex flex-col justify-center items-center text-right">
      <input
        type="checkbox"
        name="accordion"
        id="cb1"
        className="absolute -z-10 opacity-0 "
      />
      <label htmlFor="cb1" className="flex cursor-pointer">
        توضیحات{" "}
        <span>
          <ChevronDown className="rotating_icon transition-all" />
        </span>
      </label>

      <div className="tab_content text-[#9a9a9a]">
        <p className="p-4">{game.information}</p>
      </div>
    </div>
  );
};

export default AccordionContainer;
