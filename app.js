// This is a poorly formatted function with linting issues
function badly_formatted_function() {
  var camel_case_variable = "This should be snake_case";
  if (true) {
    console.log("ok!!! This block is not properly indented");
  }
  // Missing JSDoc comment
  function nestedFunction() {
    return "This function is missing a JSDoc comment";
  }
  return camel_case_variable;
}

badly_formatted_function();
