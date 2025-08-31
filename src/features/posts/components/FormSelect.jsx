import React from "react";

const FormSelect = ({ className, ...props }) => {
  return (
    <>
      <h5 className="font-bold">{props?.title}</h5>
      <select
        name=""
        id=""
        className="outline-0 p-[0.7rem_1rem] transition rounded-lg text-left w-full mt-3.5 bg-BackgroundSecondary-light dark:bg-BackgroundSecondary-dark border border-Disable-dark dark:border-Disable-light focus:border-HoverFocus-light-600 dark:focus:border-HoverFocus-dark-600"
      >
        <option value="1" disabled selected>
          {props?.label}
        </option>
        <option value="2">Option 1</option>
      </select>
    </>
  );
};

export default FormSelect;
