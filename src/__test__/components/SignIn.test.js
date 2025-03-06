import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import SignInContainer from "../../components/SignInContainer";

describe("SignIn", () => {
  it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
    const username = "elina";
    const password = "password";

    const handleSignIn = jest.fn();
    render(<SignInContainer handleSignIn={handleSignIn} />);

    fireEvent.changeText(screen.getByPlaceholderText("Username"), username);
    fireEvent.changeText(screen.getByPlaceholderText("Password"), password);
    fireEvent.press(screen.getByText("Sign in"));

    await waitFor(() => {
      expect(handleSignIn).toHaveBeenCalledTimes(1);

      expect(handleSignIn.mock.calls[0][0]).toEqual(username);
      expect(handleSignIn.mock.calls[0][1]).toEqual(password);
    });
  });
});
