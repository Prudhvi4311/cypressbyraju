import data from "../../fixtures/logincred.json"
import login from "../pageobject/login"


describe("Login follow", ()=>{


    it("login with valid details",()=>{
        cy.log("Test Execution started")

        cy.visit("/web/index.php/auth/login")

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get(login.txtusername()).type(data.username)
        cy.get(login.txtpassword()).type(data.password)
        cy.get(login.btnlogin()).click()

        cy.title().should("include","OrangeHRM")
    })

    it("login with invalid username",()=>{
        cy.log("Test Execution started")

        cy.visit("/web/index.php/auth/login")

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get(login.txtusername()).type(data.wrongusername)
        cy.get(login.txtpassword()).type(data.password)
        cy.get(login.btnlogin()).click()

        cy.title().should("include","OrangeHRM")

    })

    it("login with invalid password",()=>{
         cy.log("Test Execution started")

        cy.visit("/web/index.php/auth/login")

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get(login.txtusername()).type(data.username)
        cy.get(login.txtpassword()).type(data.wrongpassword)
        cy.get(login.btnlogin()).click()

        cy.title().should("include","OrangeHRM")
    })

    it("login with invalid username and password",()=>{
         cy.log("Test Execution started")

        cy.visit("/web/index.php/auth/login")

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get(login.txtusername()).type(data.wrongusername)
        cy.get(login.txtpassword()).type(data.wrongpassword)
        cy.get(login.btnlogin()).click()

        cy.title().should("include","OrangeHRM")
    })

    

})