import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../store/redux/authSlice";
import { useNavigate } from "react-router-dom";
import RenderForm from "../../../components/form/RenderForm";
import { auth_Validation } from "../../../utils/validation";
const AuthPage = ({ page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      type: "text",
      name: "username",
      value: "",
      label: "Username",
      placeholder: "Enter username",
    },
    {
      id: 2,
      type: "password",
      name: "password",
      value: "",
      label: "password",
      placeholder: "Enter password",
    },
  ];

  async function handleSubmit(values, { setSubmitting }) {
    setSubmitting(true);
    try {
      const result = dispatch(
        register({ username: values.username, password: values.password })
      );

      const isEmptyObjData = Object.values(result?.payload).every(
        (value) => value !== "" || null || undefined || 0
      );

      if (isEmptyObjData) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error in registration:", error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <RenderForm
        data={data || []}
        submitFn={handleSubmit}
        title={page || ""}
        btnName={"Login" || ""}
        validation={auth_Validation()}
      />
    </div>
  );
};

export default AuthPage;
