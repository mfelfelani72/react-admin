
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Functions

import { cn } from "../../utils/libs/cn";

const LoaderPage = ({ className, ...props }) => {
  // hook

  const { t } = useTranslation();

  const words = props?.words
    ? props?.words
    : [t(" "), t("aimoonhub"), t("coin"), t("sentiment"), t("news")];

  return (
    <div
      className={cn(
        " w-full h-full flex items-center justify-center ",
        className
      )}
    >
      <div className="text-gray-400 font-medium text-xl md:text-2xl h-10 py-2.5 px-2.5 flex items-center  text-center">
        <p className="capitalize">
          {props?.title ? props?.title : t("loading")}
        </p>
        <div className="overflow-hidden relative ltr:ml-1.5 rtl:mr-1.5 h-10">
          {/* <!-- Gradient overlay --> */}
          <div className="absolute inset-0 z-20"></div>
          {/* <!-- Words container with animation --> */}

          {props?.notFound ? (
            <span className="block h-10 pl-1.5 text-purple-400 dark:text-primary-400 capitalize pt-1">
              {props?.notFound}
            </span>
          ) : (
            <div
              className={`h-full mb-[3rem] animate-text-scroll-${
                words[0] !== "point" ? "y" : "x"
              } mt-2`}
            >
              {words?.map((word, index) => (
                <span
                  key={index}
                  className={`block h-10 ${
                    words[0] !== "point" && "pl-1.5"
                  }   text-purple-400 dark:text-primary-400 capitalize`}
                >
                  {word !== "point" ? word : "...  "}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoaderPage;
