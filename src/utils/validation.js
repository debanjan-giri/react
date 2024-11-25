import * as Yup from "yup";

export function auth_Validation() {
  return Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(3, "password must be at least 3 characters"),
  });
}

export function employee_Validation() {
  return Yup.object().shape({
    Name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    Mobile: Yup.number()
      .required("Mobile is required")
      .min(3, "Mobile must be at least 3 characters"),
      Percentage: Yup.number().required("Address is required").min(1),
  });
}
