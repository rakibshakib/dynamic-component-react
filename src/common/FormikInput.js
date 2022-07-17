import React from "react";
import FormikError from "./FormikError";

const FormikInput = ({
  errors,
  touched,
  name,
  label,
  type,
  onChange,
  min,
  max,
  step,
  disabled,
  value,
  placeholder,
  isHiddenLabel,
  showTime,
  onOk,
  isRequired,
  isMoment,
}) => {
  return (
    <div className="mt-2">
      {!isHiddenLabel && (
        <label className="mt-1">
          {label}
          {isRequired && <span className="text-danger ml-2 required">*</span>}
        </label>
      )}
      <input
        value={value}
        disabled={disabled}
        size="small"
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        status={errors?.[name] && touched?.[name] && "error"}
        style={{width: "80%"}}
      />

      {errors && touched && (
        <FormikError errors={errors} touched={touched} name={name} />
      )}
    </div>
  );
};

export default FormikInput;
