import { useSelector } from "react-redux";

// user details
export function useUserDetails() {
  return useSelector((state) => state?.auth);
}

// employee details
export function employeeDetails() {
  return useSelector((state) => state?.employee);
}