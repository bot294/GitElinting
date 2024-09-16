// This is a poorly formatted function with linting issues
function badlyFormattedFunction() {
  var camelCaseVariable = "This should be snake_case";
  if (true) {
    console.log("ok!!! This block is not properly indented");
  }
  // Missing JSDoc comment
  function nestedFunction() {
    return "This function is missing a JSDoc comment";
  }
  return camelCaseVariable;
}

badlyFormattedFunction();
