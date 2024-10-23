import { isValidElement } from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MIN,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";
import "./Authentication.css";

const Authentication = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <Card className="authentication w-90 max-w-sm my-28 mx-auto text-center">
      <h2>Login Required</h2>
      <hr />
      <form className="mb-4" onSubmit={authSubmitHandler}>
        <Input
          element="input"
          id="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter valid email. e.g example@gmail.com"
        />
        <Input
          element="input"
          id="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          onInput={inputHandler}
          errorText="Password should be atleast 6 charaters."
          validators={[VALIDATOR_MINLENGTH(6)]}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Authentication;
