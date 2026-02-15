describe('Register User', () => {
    beforeEach (() => { 
        cy.visit ("https://automationexercise.com")
        cy.fixture ("UserInfo").as("UserData")
    })

    it ("User Register", function() {
        
        cy.contains ("Signup / Login").click()
        cy.RegisterUser(this.UserData)
        cy.contains ('Account Created!').should('Be.visible')

    })

    it ("Login with correct info", () => {
    
        cy.contains ('signup/login').click()
        cy.login(user.email, user.password)

        cy.contains ('logged in as').should('be.visible')
    
    })

    it ('Login with incorrect info', () => {
        
        cy.contains ('signup/login').click()
        cy.login ('eleneelene1@gmail.com', 'abby123')
        
        cy.contains ('Your email or password is incorrect!').should('be.visible')
    })
  
})

