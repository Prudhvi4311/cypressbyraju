


describe("understand the api testing", ()=>{

    it("getting the list of user",()=>{
        cy.request("GET","https://reqres.in/api/users?page=2").then((response)=>{
            expect(response.status).to.equal(400)

            cy.writeFile("cypress/fixtures/apiresults/respone.txt", response);
            expect(response.body).to.have.property("per_page")
        });
    })

     it("update the list of user",()=>{
        cy.request("GET","https://reqres.in/api/users/2",).then((response)=>{
            expect(response.status).to.equal(200)
        });
    })
})