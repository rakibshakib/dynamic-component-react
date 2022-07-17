import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import FormikInput from "../../common/FormikInput";

const initialValues = {
  userName: null,
  userEmail: null,
};

const validationSchema = Yup.object({});

const RootComponent = () => {
  // formik component
  const { setFieldValue, values, errors, touched, resetForm, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: (values) => {
        console.log("formik submit");
      },
      validationSchema,
    });
 
  const [stateDta, setStateDta] = useState([
    {
      key: Math.random(),
      userName: null,
      userEmail: null,
      tableData: [],
    },
  ]);

  const addStageTable = (obj, index) => {
    let tempState = [...stateDta];
    let childOfState = [...tempState[index]?.tableData];
    childOfState.push(obj);
    tempState[index].tableData = childOfState;
    console.log(tempState[index])
    setStateDta(tempState);
  };
  const handleDeleteTableRow = (index, tableIndex) => {
    const tempState = [...stateDta];
    tempState?.[index]?.tableData?.splice(tableIndex, 1);
    setStateDta(tempState);
  };
  console.log({stateDta})
  const addField = () => {
    setStateDta([
      ...stateDta,
      {
        key: Math.random(),
        userName: null,
        userEmail: null,
        tableData: [],
      },
    ]);
  };
  // console.log(tableDto)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button className="btn btn-success my-4 mx-3 btn-sm" type="submit">
          Save All Data
        </button>
        <button
          className="btn btn-warning my-4 mx-3 btn-sm"
          type="button"
          onClick={addField}
        >
          Add Field
        </button>
        {stateDta?.map((data, index) => {
          return (
            <div className="border border-success py-3 px-2 mt-2" key={index}>
              <div className="row">
                <div className="col-md-5">
                  <FormikInput
                    name={values?.userName}
                    errors={errors}
                    touched={touched}
                    onChange={(val) => {
                      setFieldValue("userName", val);
                    }}
                    label="User Name"
                    placeholder={"user name"}
                    isRequired
                  />
                </div>
                <div className="col-md-5">
                  <FormikInput
                    name={values?.userEmail}
                    errors={errors}
                    touched={touched}
                    onChange={(val) => {
                      setFieldValue("userEmail", val);
                    }}
                    label="User Email"
                    placeholder={"user Email"}
                    isRequired
                  />
                </div>
                <div className="col-md-2 mt-2">
                  <button
                    className="btn btn-sm btn-info"
                    type="button"
                    onClick={() => {
                      const obj = {
                        id: Math.random(),
                        userName: values?.userName,
                        userEmail: values?.userEmail,
                      };
                      addStageTable(obj, index);
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
              <div>
                <table className="table mt-2 border">
                  <thead>
                    <tr>
                      <th scope="col">User name</th>
                      <th scope="col">Email</th>

                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.tableData?.map((tData, tIndex) => {
                      return (
                        <tr key={tIndex}>
                          <th scope="row">{tData?.userName}</th>
                          <td>{tData?.userEmail}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() =>
                                handleDeleteTableRow(index, tIndex)
                              }
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default RootComponent;
