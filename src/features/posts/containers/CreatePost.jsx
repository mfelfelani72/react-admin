import React from "react";
import FormInput from "../components/FormInput.jsx";
import FormSelect from "../components/FormSelect.jsx";
import FormImageDrag from "../components/FormImageDrag.jsx";
import Button from "../../core/components/Button.jsx";

// import useTranslation from "react-i18next";

// import useAppStore from "../../../app/stores/AppStore.js";

const CreatePost = () => {
  // hooks
  // const { t } = useTranslation();

  return (
    <div className="bg-Background-light dark:bg-Background-dark h-auto rounded-2xl text-Text-light dark:text-Text-dark">
      <div className="p-[1.5rem] border-b border-b-Line-light dark:border-Line-dark">
        <h5 className="font-bold">Post Details</h5>
      </div>

      <div className="p-[1.5rem] flex flex-row justify-between">
        <div className="w-[30%]">
          <FormImageDrag title={"Thumbnail image "} />
        </div>
        <div className="w-[70%] ltr:pl-[1.5rem] rtl:pr-[1.5rem]">
          <FormInput title={"Name of the Post "} />
          <div className="flex flex-row justify-between [&>div]:w-[50%] gap-x-3.5 py-3.5">
            <div>
              <FormSelect title={"Category"} label={"Select category"} />
            </div>
            <div>
              <FormSelect title={"Title"} label={"Select category"} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button />
      </div>
    </div>
  );
};

export default CreatePost;
