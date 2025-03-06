import { useMe } from "../hooks/useMe";
export const useLoggedIn = () => {
  const { data } = useMe();

  return { isLoggedIn: Boolean(data && data.me) === true };
};
