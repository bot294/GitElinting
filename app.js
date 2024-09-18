/**
 * This function is properly formatted according to ESLint rules.
 * @returns {string} A formatted string.
 */
function properlyFormattedFunction() {
  const camelCaseVariable = 'This should be in camelCase'; // Correct variable naming

  if (Math.random() > 0.5) {
    // Replace constant condition with dynamic condition
    console.log('This block is properly indented');
  }

  /**
   * This is a nested function with proper JSDoc.
   * @returns {string} A message from the nested function.
   */
  function nestedFunction() {
    return 'This function now has a JSDoc comment';
  }

  nestedFunction(); // Call the function to avoid the unused variable error

  return camelCaseVariable;
}

properlyFormattedFunction();
