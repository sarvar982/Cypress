describe("Шаблон Six Русская версия", ()=>{    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      var i =1
    it(""+ i++ +". One-zaabeel forms checking: " ,()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/one-zaabeel/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(3) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    
        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()



       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(3) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('#btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
         
    })



    it(""+ i++ +". Madinat jumeirah living",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/madinat-jumeirah-living/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)

        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
        cy.wait(3000)

        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('#btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })


    it(""+ i++ +". bulgari residences",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/bulgari-residences/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)

        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
        cy.wait(3000)

        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(3) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })


     it(""+ i++ +". st regis downtown",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/st-regis-downtown/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)

        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
        cy.wait(3000)

        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })


    it(""+ i++ +". tilal al ghaf",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/tilal-al-ghaf/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)

        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
        cy.wait(3000)

        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()




       
        cy.get('.footer__video-block').scrollIntoView() 
        // cy.scrollTo(0, -500)
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test",{force:true})
        
        cy.get('.footer__form > form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(3) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })

    it(""+ i++ +". davinci tower",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/davinci-tower/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('#btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })

    it(""+ i++ +". one and only",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/one-and-only/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('#btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })
   
    
    it(""+ i++ +". park field",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/park-field/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(3) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('#btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })


    it(""+ i++ +". one jbr",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/one-jbr/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })


    it(""+ i++ +". wasl one",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/wasl-one/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })

    it(""+ i++ +". liv residences",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/liv-residences/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })


    it(""+ i++ +". marina shores",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/marina-shores/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })


    // it(""+ i++ +". stella maris",()=>{      
        
    //     cy.visit("https://sales-inquiries.ae/axcapital/stella-maris/ru");
    //     cy.viewport(1024, 768)


    //     cy.wait(20000)
    //     cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
    //     cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
    //     cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
    //     cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .btn').click()

    //     cy.get('.swal2-success-circular-line-right').should('exist')
    //     cy.get('.swal2-confirm').click()

    //     cy.wait(3000)
    //     cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    
    
        
    //     cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
    //     cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
    //     cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
    //     cy.on('uncaught:exception', (err, runnable) => {
    //         expect(err.message).to.include('gtag is not defined')
        
    //         // using mocha's async done callback to finish
    //         // this test so we prove that an uncaught exception
    //         // was thrown
            
        
    //         // return false to prevent the error from
    //         // failing this test
    //         return false
    //       })
    //       cy.get('.footer__form > form > .btn').click()
    //       cy.get('.swal2-success-circular-line-right').should('exist')
    //       cy.get('.swal2-confirm').click()
    // })




    it(""+ i++ +". waves grande",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/waves-grande/ru ");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })





    it(""+ i++ +". address jbr",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/address-jbr/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })






    it(""+ i++ +". louvre residences",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/louvre-residences/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })







    it(""+ i++ +". samana hills",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/samana-hills/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })



    




    it(""+ i++ +". jumeirah living business bay",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/jumeirah-living-business-bay/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })



    it(""+ i++ +".  la vie jbr",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/la-vie-jbr/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })




    it(""+ i++ +". aaykon heights",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/aykon-heights/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })



    it(""+ i++ +". deyaar regalia",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/deyaar-regalia/ru");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })




    


    it(""+ i++ +". palm tower",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/palm-tower/ru ");
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
        
        
        cy.get('.footer__form-box').scrollIntoView()
        cy.scrollTo(0,-1000)
        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")

        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })



   



    it(""+ i++ +". paragon by igo",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/paragon-by-igo/ru  ");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    

        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })



    it(""+ i++ +". il primo",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/il-primo/ru  ");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    

        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })




    



    it(""+ i++ +". the portman",()=>{      
        
        cy.visit("https://sales-inquiries.ae/axcapital/the-portman/ru ");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    

        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })

    it(""+ i++ +". rukan residences (ru)",()=>{      
        
        cy.visit("https://rukan-residences.ae/ru/  ");
        cy.viewport(1024, 768)


        cy.wait(20000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()

        cy.wait(3000)
        cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    

        cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
        cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
        cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('gtag is not defined')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        cy.get('.footer__form > form > .btn').click()
        cy.get('.swal2-success-circular-line-right').should('exist')
        cy.get('.swal2-confirm').click()
    })

    it(""+ i++ +". damac cavalli (ru)",()=>{      
        
      cy.visit("https://sales-inquiries.ae/axcapital/damac-cavalli/ru/ ");
      cy.viewport(1024, 768)


      cy.wait(20000)
      cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
      cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
      cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
      cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
      
      cy.get('.swal2-success-circular-line-right').should('exist')
      cy.get('.swal2-confirm').click()

      cy.wait(3000)
      cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
  

      cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
      cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
      cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
      cy.on('uncaught:exception', (err, runnable) => {
          expect(err.message).to.include('gtag is not defined')
      
          // using mocha's async done callback to finish
          // this test so we prove that an uncaught exception
          // was thrown
          
      
          // return false to prevent the error from
          // failing this test
          return false
        })
      cy.get('.footer__form > form > .btn').click()
      cy.get('.swal2-success-circular-line-right').should('exist')
      cy.get('.swal2-confirm').click()
  })

  it(""+ i++ +". lime gardens",()=>{      
        
    cy.visit("https://sales-inquiries.ae/axcapital/lime-gardens/ru/  ");
    cy.viewport(1024, 1024)


    cy.wait(20000)
    cy.get('.popup-modal__form > :nth-child(1) > .form-control').type("test")
    cy.get('.popup-modal__form > :nth-child(3) > .iti > .form-control').type("121231212")
    cy.get('.popup-modal__form > :nth-child(2) > .form-control').type("1@example.com")
    cy.get('.popup-modal__btn').click()
    
    cy.get('.swal2-success-circular-line-right').should('exist')
    cy.get('.swal2-confirm').click()

    cy.wait(3000)
    cy.get('.popup-modal__close-btn > svg').click()

    cy.get('.footer-request-a-call__row').scrollIntoView()
    cy.get('.footer-request-a-call__form > :nth-child(2) > .form-control').type("test")
    cy.get(':nth-child(4) > .iti > .form-control').type("121231212")
    cy.get(':nth-child(3) > .form-control').type("1@example.com")
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


it(""+ i++ +". seven palm residences",()=>{      
  cy.visit("https://sales-inquiries.ae/axcapital/seven-palm-residences/ru/ ");
  cy.viewport(1024, 768)


  cy.wait(20000)
  cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .form-control').type("121231212")
  cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
  
  cy.get('#thankYouModal > .modal-dialog > .modal-content > .modal-body').should('exist')
  cy.wait(3000)
  cy.get('#thankYouModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()

  


  cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  cy.get('.footer__form > form > .row > :nth-child(3) > .form-control').type("121231212")
  cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  // cy.on('uncaught:exception', (err, runnable) => {
  //     expect(err.message).to.include('gtag is not defined')
  
  //     // using mocha's async done callback to finish
  //     // this test so we prove that an uncaught exception
  //     // was thrown
      
  
  //     // return false to prevent the error from
  //     // failing this test
  //     return false
  //   })
  cy.get('.footer__form > form > .btn').click()
  cy.get('#thankYouModal > .modal-dialog > .modal-content > .modal-body').should('exist')
  cy.wait(2000)
  cy.get('#thankYouModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
})



it(""+ i++ +". ahad-residences",()=>{      
        
  cy.visit("https://sales-inquiries.ae/axcapital/ahad-residences/ru  ");
  cy.viewport(1024, 768)


  cy.wait(20000)
  cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
  
  cy.get('.swal2-success-circular-line-right').should('exist')
  cy.get('.swal2-confirm').click()

  cy.wait(3000)
  cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()


  cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('gtag is not defined')
  
      // using mocha's async done callback to finish
      // this test so we prove that an uncaught exception
      // was thrown
      
  
      // return false to prevent the error from
      // failing this test
      return false
    })
  cy.get('.footer__form > form > .btn').click()
  cy.get('.swal2-success-circular-line-right').should('exist')
  cy.get('.swal2-confirm').click()
})



    



})