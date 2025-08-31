import React from "react";

const FormInput = ({ className, ...props }) => {
  return (
    <>
      <div>
        <div>
          <h5 className="font-bold inline">{props?.title}</h5>
          <span>(required)</span>
        </div>
        <input
          type="text"
          placeholder="Name of the Post"
          className="bg-BackgroundSecondary-light dark:bg-BackgroundSecondary-dark border border-Disable-dark dark:border-Disable-light focus:border-HoverFocus-light-600 dark:focus:border-HoverFocus-dark-600 mt-3.5 w-full transition outline-0 rounded-lg p-[0.7rem_1rem]"
        />
      </div>
    </>
  );
};

export default FormInput;
