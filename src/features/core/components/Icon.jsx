// Functions

import { cn } from "../../../../utils/libs/cn";

export const AngleIcon = ({ className, ...props }) => {
  return (
    <>
      <svg
        className={cn("w-4 h-4 text-gray-800")}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m9 5 7 7-7 7"
        />
      </svg>
    </>
  );
};
