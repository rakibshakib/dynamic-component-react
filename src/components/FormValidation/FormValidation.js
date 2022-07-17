import { useFormik } from "formik";
import React from "react";

const FormValidation = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      userEmail: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="validation">
      <h2>This is form validation</h2>
      <form onSubmit={formik.handleSubmit}>
          
      </form>
    </div>
  );
};

export default FormValidation;
