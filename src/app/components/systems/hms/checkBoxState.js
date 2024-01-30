import { useState } from "react";

const useCheckboxState = (form, checkboxIds) => {
  const checkboxState = {};

  checkboxIds.forEach((id) => {
    checkboxState[`isChecked${id}`] = useState(false);
    checkboxState[`${id}Checkbox`] = (e) => {
      checkboxState[`isChecked${id}`][1](e.target.checked);
      if (!e.target.checked) {
        form.setFieldsValue({ [id]: "" });
      }
    };
  });

  return checkboxState;
};

export default useCheckboxState;
