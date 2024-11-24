const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'e6wdjc',
  e2e: {
    setupNodeEvents(on, config) {
      // You can set up event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.js', // Make sure this matches your test folder and file pattern
  },

  
});
