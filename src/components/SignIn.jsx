import { useSignIn } from "../hooks/useSignIn";
import SignInContainer from "./SignInContainer";

const SignIn = () => {
  const { handleSignIn, error } = useSignIn();
  return <SignInContainer handleSignIn={handleSignIn} error={error} />;
};

export default SignIn;
