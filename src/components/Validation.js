import { Formik, Form, Field } from "formik";
import React from "react";
import * as yup from "yup";
import Select from "react-select";
import Container from "@mui/material/Container";

const options = [
  {
    label: "Mango",
    value: "Mango",
  },
  {
    label: "Banana",
    value: "Banana",
  },
  {
    label: "Something",
    value: "something",
  },
  {
    label: "New",
    value: "New",
  },
  // {
  //   label: "Fruits",
  //   options: [
  //     {
  //       label: "Mango",
  //       value: "Mango",
  //     },
  //     {
  //       label: "Banana",
  //       value: "Banana",
  //     },
  //     {
  //       label: "Something",
  //       value: "something",
  //     },
  //     {
  //       label: "New",
  //       value: "New",
  //     },
  //   ],
  // },
  // {
  //   label: "Color",
  //   options: [
  //     {
  //       label: "Blue",
  //       value: "Blue",
  //     },
  //     {
  //       label: "Red",
  //       value: "Red",
  //     },
  //     {
  //       label: "Green",
  //       value: "Green",
  //     },
  //     {
  //       label: "Red",
  //       value: "Red",
  //     },
  //   ],
  // },
];

/* const human = yup.object().shape({
  height: yup.string().required(),
  weight: yup.string().required(),
}); */
const numberSchema = yup.object().shape({
  value: yup.string(),
});

const Validation = () => {
  let schema = yup.object().shape({
    userName: yup.string().min(5).max(20).required(),
    age: yup.number().required(),
    userEmail: yup.string().email(),
    userEmailConfirm: yup
      .string()
      .oneOf([yup.ref("userEmail")], "Email not matched"),
    options: yup.array().of(numberSchema),
  });

  return (
    <div className="validation">
      <h2>Validation</h2>
      <Container>
        <Formik
          validationSchema={schema}
          initialValues={{
            userName: "",
            userEmail: "",
            age: "",
            userEmailConfirm: "",
            options: [],
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ touched, errors, setValues, setFieldValue }) => (
            <Form>
              <label htmlFor="userName">User Name: &nbsp;</label>
              <Field name="userName" placeholder="User name" />
              {touched.userName && <p>{errors.userName}</p>}
              <br />
              <label htmlFor="userName">User Email: &nbsp;</label>
              <Field name="userEmail" placeholder="User Email" />
              {touched.userEmail && <p>{errors.userEmail}</p>}
              <br />
              <label htmlFor="userName">Confirm Email: &nbsp;</label>
              <Field name="userEmailConfirm" placeholder="User Email" />
              {touched.userEmailConfirm && <p>{errors.userEmailConfirm}</p>}
              <br />
              <label htmlFor="userName">User Age: &nbsp; </label>
              <Field name="age" placeholder="Age" />
              {touched.age && <p>{errors.age}</p>}
              <br />
              <Select
             
                isMulti
                // onChange={(e) => setFieldValue("options", e.value)}
                onChange={(arr) =>
                  setFieldValue("options", [
                    ...arr.map((item) => ({ value: item.value })),
                  ])
                }
                /*  onChange={(arr) => {
                  setValues((prev) => ({
                    ...prev,
                    options: [
                      ...prev.options,
                      { value: arr[arr.length - 1].value },
                    ],
                  }));
                }} */
                // components={makeAnimated()}
                options={options}
              />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Validation;
