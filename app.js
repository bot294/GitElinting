/**
 * This function is properly formatted according to ESLint rules.
 * @returns {string} A formatted string.
 */
function properly_formatted_function() {
  // Renamed to snake_case
  const camel_case_variable = "This should be in snake_case"; // Renamed to snake_case

  if (Math.random() > 0.5) {
    console.log("This block is properly indented");
  }

  /**
   * This is a nested function with proper JSDoc.
   * @returns {string} A message from the nested function.
   */
  function nested_function() {
    return "This function now has a JSDoc comment";
  }

  nested_function(); // Call the nested function to avoid unused function error

  return camel_case_variable; // Use the variable to avoid unused variable error
}

properly_formatted_function(); // Call the main function
