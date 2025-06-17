import login from "../../pageobject/login"
import dash from "../../pageobject/dashboard/dashboard"
import data from "../../../fixtures/logincred.json"
import dashtext from "../../../fixtures/sidepanelsearch.json"


describe("verify the dashboard page", ()=>{

    beforeEach("launch the url",()=>{
        cy.visit("/web/index.php/auth/login")
        login.loginwithvalidcred(data.username,data.password)
        console.log("in dashboard page")
        cy.screenshot();
        
    })

    it("verify the side panel", ()=>{
        cy.get(dash.sidepale).should("be.visible")
        //by using dash method we perform the action on the searchbar and click the element
        dash.sidepanelsearchbar(dashtext.validtext)
        cy.get(dash.header).should('contain',"Admin")
        console.log("finally search is complete");

    })

    it("verify the side panel with invalid text", ()=>{
        cy.get(dash.sidepale).should("be.visible")
        //by using dash method we perform the action on the searchbar and click the element
        dash.sidepanelsearchbar(dashtext.invalidtext)
        //cy.get(dash.header).should('not.contain',"Admin")
        console.log("finally search is complete");


    })

    it.only("verify the side panel iteams",()=>{
        dash.sideiteamlist()
    })
})