describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login')
 cy.get ('#loginFrm_loginname').type('Elene')
 cy.get ('#loginFrm_password').type('Qwerty.17')
 cy.get ('button[title="Login"]').click()
 cy.contains('My Account').should('be.visible')

// აქ მინდოდა ახალი it გამეკეთებინა და არ კითხულობდა cypress-ი
 cy.visit('https://automationteststore.com/index.php?rt=account/edit')
 cy.get ('#AccountFrm_firstname').clear().type('Elen')
 cy.get ('#AccountFrm_lastname').clear().type('MUN')
 cy.get ('button[title="Continue"]').click()
 cy.contains ('Your account has been successfully updated.').should('be.visible')

 //cy.visit ('https://automationteststore.com/index.php?rt=account/address')
 //cy.contains ('Edit').click() ამას ვერ ვაკეთებ :(

 cy.visit ('https://automationteststore.com/index.php?rt=account/password')
 cy.get ('#PasswordFrm_current_password').type('Qwerty.17')
 cy.get ('#PasswordFrm_password').type('Abby.123')
 cy.get ('#PasswordFrm_confirm').type('Abby.123')
 cy.get ('button[title="Continue"]').click()
 cy.contains ('Success: Your password has been successfully updated.').should('be.visible)')


  }) //cypress მიწითლებს მაინც რაღაცას მე-7 ხაზზე ,My Account'-ზე
  
    
    
  })


