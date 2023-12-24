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
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <h1>Multiple input fields implemented in a form.</h1>
      <InputField
        label="Email"
        fieldName="email"
        placeholder="Email here..."
        inputType="text"
        value={formState.email}
        stateHandler={setFormState}
        handleChange={handleInputChange}
      />

      <InputField
        label="Password"
        fieldName="password"
        placeholder="Password here..."
        inputType="password"
        value={formState.password}
        stateHandler={setFormState}
        handleChange={handleInputChange}
      />
    </div>
  );
};

export const FormInputValidation = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [validationState, setValidationState] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <h1>Form with validation enabled.</h1>

      <InputField
        label="Email"
        fieldName="email"
        placeholder="Email here..."
        inputType="text"
        value={formState.email}
        stateHandler={setFormState}
        handleChange={handleInputChange}
        isFormValid={validationState.email}
        validation={(value: string) => /@.*\../.test(value)}
        setValidationState={setValidationState}
        errorMessage="Please input a correct email."
      />

      <InputField
        label="Password"
        fieldName="password"
        placeholder="Password here..."
        inputType="password"
        value={formState.password}
        stateHandler={setFormState}
        handleChange={handleInputChange}
        isFormValid={validationState.password}
        validation={(value: string) => value.length > 8}
        setValidationState={setValidationState}
        errorMessage="Please enter a minimum of 8 characters."
      />
    </div>
  );
};
