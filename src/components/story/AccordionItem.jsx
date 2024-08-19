"use client";

import { alice, nightStillComes } from "@/utils/fonts";
import { createContext, useContext, useRef, useEffect, useState } from "react";
import { MdArrowRight } from "react-icons/md";

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [onChange, selected]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;

  const ref = useRef(null);

  return (
    <li className="border-b" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className={`${nightStillComes.className} text-base text-primary flex items-center px-4 py-2 font-bold leading-4`}
      >
        <MdArrowRight
          size={32}
          className={`transition-transform ${open ? "rotate-90" : ""}`}
        />
        {trigger}
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div
          className={`${alice.className} text-base font-medium pl-6`}
          ref={ref}
        >
          {children}
        </div>
      </div>
    </li>
  );
}
