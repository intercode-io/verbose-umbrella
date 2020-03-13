import * as EmailValidator from "email-validator";

export default class FormValidators {
  static required = (message = "") => value => {
    let returnMessage = "Field is required";
    if (message !== "") {
      returnMessage = message;
    }
    return value ? undefined : returnMessage;
  };

  static isEmail(value) {
    return EmailValidator.validate(value)
      ? undefined
      : "Please enter valid email";
  }

  static composeValidators = (...validators) => value =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
}
