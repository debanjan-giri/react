import { useSelector } from "react-redux";

// user details
export function useUserDetails() {
  return useSelector((state) => state?.auth);
}
