import { Dispatch, SetStateAction } from "react";

export type TValidation<GInputType> = (value: GInputType | string) => boolean;

export const handleInputChange = <GInputType, GInputState, GValidationState>(
  inputValue: GInputType,
  setState: Dispatch<SetStateAction<GInputState>>,
  validation?: TValidation<GInputType>,
  setValidationState?: Dispatch<SetStateAction<GValidationState>>,
  fieldName?: string
) => {
  if (fieldName) {
    handleFormInputChange(
      inputValue,
      fieldName,
      setState,
      validation,
      setValidationState
    );
    return;
  }

  handleStandaloneInputChange(
    inputValue,
    setState as Dispatch<SetStateAction<GInputType>>,
    validation,
    setValidationState
  );
};

export const handleFormInputChange = <
  GInputType,
  GInputState,
  GValidationState
>(
  inputValue: GInputType,
  fieldName: string,
  setFormState: Dispatch<SetStateAction<GInputState>>,
  validation?: TValidation<GInputType>,
  setValidationState?: Dispatch<SetStateAction<GValidationState>>
) => {
  setFormState((prevFormState) => {
    return { ...prevFormState, [fieldName]: inputValue };
  });

  if (validation && setValidationState) {
    const isFieldValid = validation(inputValue);

    setValidationState((prevValidationState) => {
      return { ...prevValidationState, [fieldName]: isFieldValid };
    });
  }
};

export const handleStandaloneInputChange = <
  GInputType,
  GInputState,
  GValidationState
>(
  inputValue: GInputType,
  setFieldState: Dispatch<SetStateAction<GInputType>>,
  validation?: TValidation<GInputType>,
  setValidationState?: Dispatch<SetStateAction<GValidationState>>
) => {
  setFieldState(inputValue);

  if (validation && setValidationState) {
    const isFieldValid = validation(inputValue) as GValidationState;

    setValidationState(isFieldValid);
  }
};
