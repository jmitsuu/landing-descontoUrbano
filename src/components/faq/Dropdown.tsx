import { useState } from 'react';
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
          className={`gap-4 xl:w-[926px] lg:h-[66px] md:w-[606px] h-[53px]  my-2 relative  bg-heavy hover:border-medium border-2 flex items-center justify-between lg:px-10 px-5 rounded-lg cursor-pointer ${
            isOpen ? 'border-medium ' : ''
          }`}
        >
          <h2 className="xl:text-[25px] lg:text-[15px] text-[10px] text-medium ">
            {title}
          </h2>

          <img
            src="../src/assets/images/icons/polygon.png"
            className={`cursor-pointer ${isOpen ? 'rotate-180 ' : ''}`}
          />
        </div>
        {isOpen && (
          <div className="mt-2 px-4 py-2 lg:w-[926px] md:w-[606px] w-[200px]  text-heavy  rounded-md  z-50">
            <p className="xl:text-[20px] lg:text-[15px] text-[10px] ">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}