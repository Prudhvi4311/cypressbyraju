class loginPage{
    
    imgorangeHRMlogo(){

        return '[alt="company-branding"]';

    }

    txtusername(){
        return 'input[name="username"]';
    }

    txtpassword(){
        return 'input[name="password"]';
    }

    btnlogin(){
        return 'button[type="submit"]';
    }

    loginerrormessage(){
        return 'p'
    }

    loginwithvalidcred(username,password){
        cy.get(this.txtusername()).type(username)
        cy.get(this.txtpassword()).type(password)
        cy.get(this.btnlogin()).click()
    }
}


const login = new loginPage()

export default login