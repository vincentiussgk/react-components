import InputField from "../../components/form/InputField";
import { handleInputChange } from "../../utils/form/formHandlers";
import { useState } from "react";

const InputFieldStory = {
  title: "Input Field",
  component: InputField,
};

export default InputFieldStory;

export const SingleInput = () => {
  const [fieldState, setFieldState] = useState("");
  return (
    <div>
      <InputField
        label="This is a single input."
        placeholder="Placeholder here..."
        inputType="text"
        value={fieldState}
        stateHandler={setFieldState}
        handleChange={handleInputChange}
      />
    </div>
  );
};

export const FormInputField = () => {
  const [fieldState, setFieldState] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <InputField
        label="Email"
        placeholder="Email here..."
        inputType="text"
        value={fieldState.email}
        stateHandler={setFieldState}
        handleChange={handleInputChange}
      />

      <InputField
        label="Password"
        placeholder="Password here..."
        inputType="password"
        value={fieldState.email}
        stateHandler={setFieldState}
        handleChange={handleInputChange}
      />
    </div>
  );
};
