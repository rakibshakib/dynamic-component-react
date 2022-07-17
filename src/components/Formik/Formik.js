import { useFormik } from "formik";
import React from "react";

const Formik = () => {
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
    <div>
      <h2>This is formik form</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="User Name"></label>
        <input
          type="text"
          placeholder="Your Name"
          id="name"
          name="userName"
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
        <input
          placeholder="Your Email"
          type="email"
          id="email"
          name="userEmail"
          onChange={formik.handleChange}
          value={formik.values.userEmail}
        />
        <input
          placeholder="Your Phone Number"
          type="number"
          id="phone"
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        <button type="submit">Submit Name</button>
      </form>
    </div>
  );
};

export default Formik;
