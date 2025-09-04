import React from "react";
import FormInput from "../../core/components/Form/FormInput.jsx";
import FormSelect from "../../core/components/Form/FormSelect.jsx";
import FormImageDrag from "../../core/components/Form/FormImageDrag.jsx";
// import ButtonLink from "../../core/components/Button.jsx";

import { useTranslation } from "react-i18next";

import { cn } from "../../../../utils/libs/cn.js";
import useAppStore from "../../../app/stores/AppStore.js";

const CreatePost = () => {
  // hooks
  const { t } = useTranslation();

  // states
  const themeColor = useAppStore((state) => state.themeColor);

  return (
    <div className="bg-Background-light dark:bg-Background-dark h-auto rounded-2xl text-Text-light dark:text-Text-dark">
      <div className="p-[1.5rem] border-b border-b-Line-light dark:border-Line-dark">
        <h5 className="font-bold">{t("post_details")}</h5>
      </div>

      <div className="p-[1.5rem] flex flex-row justify-between">
        <div className="w-[25%]">
          <FormImageDrag title={"thumbnail_image"} required={"required"} />
        </div>
        <div className="w-[75%] ltr:pl-[1.5rem] rtl:pr-[1.5rem]">
          <FormInput title={"name_of_the_post"} type={"text"} placeholder={"name_of_the_post"} required={"required"} />
          <div className="flex flex-row justify-between [&>div]:w-[50%] gap-x-3.5 py-3.5">
            <div>
              <FormSelect title={"category"} label={"select_category"} />
            </div>
            <div>
              <FormSelect title={"yasin"} label={"select_category"} />
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* <ButtonLink /> */}
        {/* چرا دکمه کار نمیکنه */}
      </div>
    </div>
  );
};

export default CreatePost;
