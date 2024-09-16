// This is a poorly formatted function with linting issues
function badly_formatted_function() {
  var camel_caseVariable = "This should be snake_case";
  if (true) {
    console.log("ok!!! This block is not properly indented");
  }
  // Missing JSDoc comment
  function nestedFunction() {
    return "This function is missing a JSDoc comment";
  }
  return camel_caseVariable;
}
function badlyFormattedFunction() {
  var camel_caseVariable = "This should be snake_case";
  if (true) {
    console.log("ok!!! This block is not properly indented");
  }
  // Missing JSDoc comment
  function nestedFunction() {
    return "This function is missing a JSDoc comment";
  }
  return camel_caseVariable;
}
badly_formatted_function();
