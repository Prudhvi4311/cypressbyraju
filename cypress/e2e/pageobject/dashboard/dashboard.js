class dashboard {

    constructor() {
        this.sidepale = 'aside[class="oxd-sidepanel"]',
            this.searchbx = 'input[placeholder="Search"]',
            this.listofiteams = '.oxd-main-menu > li',
            this.header = '.oxd-topbar'
    }


    sidepanelsearchbar(text) {
        cy.get(this.searchbx).type(text);
        cy.get('.oxd-main-menu > li').then(($items) => {
            const found = [...$items].find(el => el.innerText.trim().toLowerCase() === text.toLowerCase());

            if (found) {
                cy.wrap(found).click();
            } else {
                cy.log(`❌ No menu item found for: "${text}"`);
                // optional fail-fast assert:
                expect(false, `No side panel item found for text: ${text}`).to.be.true;
            }
        })

    }
    sideiteamlist() {
        cy.get(this.listofiteams).each(($el, index) => {
    const text = $el.text().trim();
    cy.log(`👉 Clicking on: ${text}`);

    // Re-fetch the element inside .each() to avoid stale DOM issues
    cy.get(this.listofiteams)
      .eq(index)
      .should('be.visible')
      .click();
  });
    }
}

const dash = new dashboard();

export default dash;