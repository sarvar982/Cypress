
describe("Шаблон Six пробная", ()=>{    
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  var i = 1
  it(""+ i++ +". deyaar regalia",()=>{    
      
      cy.visit("https://sales-inquiries.ae/axcapital/deyaar-regalia/ ");
      cy.viewport(1024, 1024)


      cy.wait(20000)
      cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
      cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
      cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
      cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
      
      cy.get('.swal2-success-circular-line-right').should('exist')
      cy.get('.swal2-confirm').click()

      cy.wait(3000)
      cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()










      cy.get(':nth-child(5) > .second-section__info-text').scrollIntoView()
      cy.get('[data-bs-toggle="modal"]').eq('1').click({force: true})

      
      cy.get('.modal-content').within(($modal) => {
        // you have access to the found form via
        // the jQuery object $form if you need it
      
        // cy.get() will only search for elements within form,
        // not within the entire document
        cy.get('.form-control').eq(0).type("test")
        cy.get('.form-control').eq(1).type("1@example.com")
        cy.get('.form-control').eq(2).type("121231212")
        
        
        
      })
      cy.get('#downloadModal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .btn').click()
      

      cy.get('.swal2-success-circular-line-right').should('exist')
      cy.get('.swal2-confirm').click()

      cy.wait(3000)

      // cy.xpath('//*[@id="downloadModal"]/div/div/div[2]/button').click()
      
      cy.get('#downloadModal > div > div > div.modal-footer.justify-content-center.border-0.pt-0 > button').click()


      cy.get('.main-banner__bg').scrollIntoView()
      cy.get('[data-bs-toggle="modal"]').eq('0').click({force: true})

      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .btn').click()


      cy.get('.swal2-success-circular-line-right').should('exist')
      cy.get('.swal2-confirm').click()

      cy.wait(3000)
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-footer > .btn').click()



      cy.get('.fourth-section__img > picture > img').scrollIntoView()
      cy.get('[data-bs-toggle="modal"]').eq('2').click({force: true})
      cy.wait(2000)

      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .btn').click()


      cy.get('.swal2-success-circular-line-right').should('exist')
      cy.get('.swal2-confirm').click()

      cy.wait(3000)
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-footer > .btn').click()



      cy.get('[data-bs-toggle="modal"]').eq('3').click({force: true})

      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .btn').click()


      cy.get('.swal2-success-circular-line-right').should('exist')
      cy.get('.swal2-confirm').click()

      cy.wait(3000)
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-footer > .btn').click()



      cy.get('[data-bs-toggle="modal"]').eq('4').click({force: true})

      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .btn').click()


      cy.get('.swal2-success-circular-line-right').should('exist')
      cy.get('.swal2-confirm').click()

      cy.wait(3000)
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-footer > .btn').click()


      
      cy.get('[data-bs-toggle="modal"]').eq('5').click({force: true})

      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .btn').click()


      cy.get('.swal2-success-circular-line-right').should('exist')
      cy.get('.swal2-confirm').click()

      cy.wait(3000)
      cy.get('#Modal > .modal-dialog > .modal-content > .modal-footer > .btn').click()





  

      cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
      cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
      cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
      
      cy.get('.footer__form > form > .btn').click()
      cy.get('.swal2-success-circular-line-right').should('exist')
      cy.get('.swal2-confirm').click()
  })
 
    
    

  
})