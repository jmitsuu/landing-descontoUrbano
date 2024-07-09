import { useState } from 'react';
import polygon from "../../assets/images/icons/polygon.png"
interface typeQuestions {
  title: string;
  description: string;
}
export function Dropdown({ title, description }: typeQuestions) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full  ">
      <div>
        <div
          onClick={toggleDropdown}
          key={title}
          className={`gap-4 xl:w-[926px] lg:h-[66px] md:w-[606px] h-[53px]  my-2 relative  bg-mediumlight hover:border-heavy border-2 flex items-center justify-between lg:px-10 px-5 rounded-lg cursor-pointer ${
            isOpen ? 'border-heavy ' : ''
          }`}
        >
          <h2 className="xl:text-[1.6em] lg:text-[0.9em] text-[0.7em]  text-[#ffffff] ">
            {title}
          </h2>

          <img
            src={polygon}
            className={`cursor-pointer ${isOpen ? 'rotate-180 ' : ''}`}
          />
        </div>
        {isOpen && (
          <div className="  px-4 py-2 2xl:w-[926px] md:w-full w-full max-w-[926px]  text-light bg-black  rounded-md  z-50">
            <p className="xl:text-[1.2em]  lg:text-[0.9em] text-[0.7em] ">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
