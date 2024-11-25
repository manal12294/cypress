describe('Navigation Links Test', () => {
  it('should navigate to the correct pages when the links are clicked', () => {
    // Step 1: Visit the website
    cy.visit('https://qbatch.com'); 

    // Step 2: Wait for and interact with the navigation menu (using XPath)
    cy.xpath('/html/body/div[1]/div[1]/div[1]/div', { timeout: 10000 }).should('be.visible'); // Wait for the page container

    // Step 3: Click the 'Services' link inside the container div and check the URL
    cy.xpath('/html/body/div[1]/div[1]/div[1]/div/div/div[2]/ul/li[1]/div[1]/a').contains('Services').click();
    cy.url().should('eq', 'https://qbatch.com/services/');

    // Step 4: Click the 'Hire Developers' link inside the container div and check the URL
    cy.xpath('/html/body/div[1]/div[1]/div[1]/div').contains('Hire Developers').click();
    cy.url().should('eq', 'https://qbatch.com/hire-developers/');

    // Step 5: Click the 'Blog' link inside the container div and check the URL
    cy.xpath('/html/body/div[1]/div[1]/div[1]/div').contains('Blog').click();
    cy.url().should('eq', 'https://qbatch.com/blog/');

    
   
  });
});




