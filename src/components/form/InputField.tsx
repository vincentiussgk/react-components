import { Ref, Dispatch, SetStateAction } from "react";

export type TValidation<GInputType> = (value: GInputType | string) => boolean;
export type THandleChange<GInputType, GInputState, GValidationState> = (
  inputValue: GInputType,
  setState: Dispatch<SetStateAction<GInputState>>,
  validation?: TValidation<GInputType>,
  setValidationState?: Dispatch<SetStateAction<GValidationState>>,
  fieldName?: string
) => void;

// GInputType: The type of data being passed (input value type).
// GInputState: The type of input state being handled.
// GValidationState: The type of validation state being handled.
export interface IInputProps<GInputType, GInputState, GValidationState> {
  label: string;

  placeholder: string;
  inputType?: string;
  fieldName?: string;
  value: GInputType;

  stateHandler: Dispatch<SetStateAction<GInputState>>;
  handleChange: THandleChange<GInputType, GInputState, GValidationState>;
  validation?: TValidation<GInputType>;
  setValidationState?: Dispatch<SetStateAction<GValidationState>>;

  isFormValid?: boolean | string;
  errorMessage?: string;

  ref?: Ref<HTMLInputElement>;
  disabled?: boolean;
}

const InputField = <
  GInputType extends string | number | readonly string[] | undefined,
  GInputState,
  GValidationState
>({
  label,

  placeholder,
  fieldName,
  inputType = "string",
  value,

  stateHandler,
  handleChange,
  validation,
  setValidationState,

  isFormValid,
  errorMessage,

  ref = null,
  disabled = false,
}: IInputProps<GInputType, GInputState, GValidationState>): JSX.Element => {
  const isFormInvalid = isFormValid === false;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(
      e.target.value as GInputType,
      stateHandler,
      validation,
      setValidationState,
      fieldName
    );
  };
  const onBlurHandler = onChangeHandler;

  return (
    <div className={`flex flex-col w-full`}>
      <label
        className={`text-left mb-2 ${isFormInvalid && "text-danger-text"}`}
      >
        {label}
      </label>
      <input
        className={`p-[15px] text-[16px] text-primary-text
        placeholder:text-secondary-text rounded-[8px]  ${
          disabled ? "cursor-not-allowed bg-[#e4e4e4]" : "bg-white"
        }
        border-[1px] border-[#0000001a] `}
        ref={ref}
        name={fieldName}
        value={value}
        type={inputType}
        disabled={disabled}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        placeholder={placeholder}
      />
      <div
        className={`bg-[#FFE3E3] py-[8px] px-[12px] w-full text-[#FF4949]
      ${isFormInvalid ? "block" : "hidden"}`}
      >
        {errorMessage}
      </div>
    </div>
  );
};

export default InputField;
