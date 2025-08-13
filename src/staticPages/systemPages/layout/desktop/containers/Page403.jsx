import { useTranslation } from "react-i18next";

// Components

import { ButtonNoLink } from "../../../../../features/core/components/Button";

const Page403 = () => {
  // hooks
  const { t } = useTranslation();

  return (
    <>
      <div className="w-screen h-screen inline-flex flex-col bg-Background-light dark:bg-Background-dark justify-center items-center">
        <div className="text-9xl text-Text-light dark:text-Text-dark">404</div>
        <div className="text-4xl text-TextSecondary-light dark:text-TextSecondary-dark">
          {t("access_denied")}
        </div>
        <ButtonNoLink onClick={()=>{window.location.href="/"}} className={"mt-8 w-46"} >
          {t("go_home")}
        </ButtonNoLink>
      </div>
    </>
  );
};

export default Page403;
