it("w residence cairo",()=>{
        
        cy.visit("https://sales-inquiries.ae/axcapital/w-residences-cairo/ ");
        cy.viewport(1024, 768)


        cy.wait(30000)
        cy.get('.popup-modal__form > :nth-child(1) > .form-control').type("test",{force:true})
        cy.get('.popup-modal__form > :nth-child(3) > .iti > .form-control').type("121231212",{force:true})
        cy.get('.popup-modal__form > :nth-child(2) > .form-control').type("1@example.com",{force:true} )
        cy.get('.popup-modal__btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('.popup-modal__close-btn > svg').click()
    

        cy.get('.footer-request-a-call__form > :nth-child(1) > .form-control').type("test")
        cy.get('.footer-request-a-call__form > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer-request-a-call__form > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
          cy.get('.footer-request-a-call__btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })


    it("w residences pal jumeirah",()=>{
        
        cy.visit("https://sales-inquiries.ae/axcapital/w-residences-palm-jumeirah/ ");
        cy.viewport(1024, 768)


        cy.wait(30000)
        cy.get('.popup-modal__form > :nth-child(1) > .form-control').type("test",{force:true})
        cy.get('.popup-modal__form > :nth-child(3) > .iti > .form-control').type("121231212",{force:true})
        cy.get('.popup-modal__form > :nth-child(2) > .form-control').type("1@example.com",{force:true} )
        cy.get('.popup-modal__btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('.popup-modal__close-btn > svg').click()
    

        cy.get('.footer-request-a-call__form > :nth-child(1) > .form-control').type("test")
        cy.get('.footer-request-a-call__form > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer-request-a-call__form > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
          cy.get('.footer-request-a-call__btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })