export const errorCheck = (value, type) => {
  switch (type) {
    case "text":
      if (!/[a-z]/gi.test(value)) {
        return `${type.toUpperCase()} : Invalid format, please use characters`;
      } else {
        return "";
      }

    case "email":
      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        return `${type.toUpperCase()} : Incorrect format: Example@gmail.com`;
      } else {
        return "";
      }

    case "password":
      if (value.length < 8) {
        return `${type.toUpperCase()} : Write at least 8 characters`;
      } else {
        //Checking the password format....

        if (!/[\d()+-]/g.test(value)) {
          return `${type.toUpperCase()} : Write at least one number, one lowercase letter, and one uppercase letter.`;
        } else {
          return "";
        }
      }

    case "credentials":
      return "Wrong email or password";

    default:
      console.log("Some errors have not been taken into account");

      break;
  }
};
