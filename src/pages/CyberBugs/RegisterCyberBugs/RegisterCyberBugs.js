import { Button, Input } from "antd";
import React from "react";
import {
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { signupCyberbugAction } from "../../../redux/actions/CyberBugsActions";

function RegisterCyberBugs(props) {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <form
      onSubmit={handleSubmit}
      className="container"
      style={{ height: window.innerHeight }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: window.innerHeight }}
      >
        <h3 className="text-center" style={{ fontWeight: 300, fontSize: 35 }}>
          Register cyberbugs
        </h3>
        <div className="d-flex mt-3">
          <label
            className="mt-2 mr-3"
            style={{ fontSize: "20px", minWidth: "150px" }}
          >
            Email:{" "}
          </label>
          <Input
            onChange={handleChange}
            style={{ width: "100%", minWidth: 300 }}
            name="email"
            size="large"
            placeholder="email"
          />
        </div>
        <div className="text-danger">{errors.email}</div>
        <div className="d-flex mt-3">
          <label
            className="mt-2 mr-3"
            style={{ fontSize: "20px", minWidth: "150px" }}
          >
            Password:{" "}
          </label>

          <Input
            onChange={handleChange}
            style={{ width: "100%", minWidth: 300 }}
            type="password"
            name="password"
            size="large"
            placeholder="password"
          />
        </div>
        <div className="text-danger" style={{marginLeft:'130px'}}>{errors.password}</div>
        <div className="d-flex mt-3">
          <label
            className="mt-2 mr-3"
            style={{ fontSize: "20px", minWidth: "150px" }}
          >
            Name:{" "}
          </label>

          <Input
            onChange={handleChange}
            style={{ width: "100%", minWidth: 300 }}
            type="text"
            name="name"
            size="large"
            placeholder="name"
          />
        </div>
        <div className="text-danger">{errors.name}</div>
        <div className="d-flex mt-3">
          <label
            className="mt-2 mr-3"
            style={{ fontSize: "20px", minWidth: "150px" }}
          >
            Phonenumber:{" "}
          </label>

          <Input
            onChange={handleChange}
            style={{ width: "100%", minWidth: 300 }}
            type="number"
            name="phonenumber"
            size="large"
            placeholder="Phonenumber"
          />
        </div>
        <div className="text-danger">{errors.phonenumber}</div>
        <Button
          htmlType="submit"
          size="large"
          style={{
            minWidth: 300,
            backgroundColor: "rgb(102,117,223)",
            color: "#fff",
          }}
          className="mt-5"
        >
          Register
        </Button>
      </div>
    </form>
  );
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const RegisterCyberBugsWithFormik = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    name: "",
    phonenumber: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("email is invalid!"),
    password: Yup.string()
      .min(6, "password must have min 6 characters")
      .max(32, "password  have max 32 characters"),
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    phonenumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  }),
  handleSubmit: ({ email, password, name, phonenumber}, { props, setSubmitting }) => {
    // let action = {
    //     type:USER_SIGNIN_API,
    //     userLogin: {
    //         email:values.email,
    //         password:values.password
    //     }
    // }
    setSubmitting(true);
    props.dispatch(signupCyberbugAction(email,password,name,phonenumber));
    // console.log(props)
    // console.log(values);
  },
  displayName: "LoginCyberBugs",
})(RegisterCyberBugs);

export default connect()(RegisterCyberBugsWithFormik);
