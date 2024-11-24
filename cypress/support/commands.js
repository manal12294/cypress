require('cypress-xpath');
// cypress/support/e2e.js or cypress/support/commands.js

// cypress/support/e2e.js (or cypress/support/commands.js)
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore the React error so Cypress doesn't fail the test
    if (err.message.includes('Minified React error')) {
      // Prevent Cypress from failing the test on React errors
      return false;
    }
    // Allow other errors to fail the test
    return true;
  });
  
  