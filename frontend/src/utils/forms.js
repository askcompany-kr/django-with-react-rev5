export function parseErrorMessages(fieldsErrorMessages) {
  return Object.entries(fieldsErrorMessages).reduce(
    (acc, [fieldName, errors]) => {
      // errors : ["m1", "m2"].join(" ") => "m1 "m2"
      acc[fieldName] = {
        validateStatus: "error",
        help: errors.join(" ")
      };
      return acc;
    },
    {}
  );
}
