describe("Six", ()=>{ 
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      var i = 1
  //   it(""+ i++ +". one-zaabeel forms checking",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/one-zaabeel/");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(3) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
    
  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()



       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('#btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })



  //   it(""+ i++ +". madinat jumeirah living",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/madinat-jumeirah-living");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)

  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //       cy.wait(3000)

  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()




       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('#btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })


  //   it(""+ i++ +". bulgari residences",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/bulgari-residences/");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)

  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //       cy.wait(3000)

  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()




       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })


  //    it(""+ i++ +". st regis downtown",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/st-regis-downtown/");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)

  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //       cy.wait(3000)

  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()




       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })


  //   it(""+ i++ +". tilal al ghaf",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/tilal-al-ghaf/");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)

  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //       cy.wait(3000)

  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()




       
  //       cy.get('.footer__video-block').scrollIntoView() 
  //       // cy.scrollTo(0, -500)
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test",{force:true})
        
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })

  //   it(""+ i++ +". davinci tower",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/davinci-tower/");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('#btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })

  //   it(""+ i++ +". one and only",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/one-and-only/");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('#btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })
   
    
  //   it(""+ i++ +". park field",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/park-field/");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('#btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })


  //   it(""+ i++ +". one jbr",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/one-jbr/");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })


  //   it(""+ i++ +". wasl one",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/wasl-one/");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })

  //   it(""+ i++ +". liv residences",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/liv-residences/");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })


  //   it(""+ i++ +". marina shores",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/marina-shores/");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })


  //   it(""+ i++ +". stella maris",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/stella-maris/");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(3) > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > #modal_img > .modal-form__form > .btn').click()
        
  //       cy.get('#thankYouModal > .modal-dialog > .modal-content > .modal-body').should('exist')
  //       cy.get('#thankYouModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()



  //       cy.wait(3000)
  //       // cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('#thankYouModal > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__title').should('exist')
  //       cy.get('#thankYouModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
  //   })




  //   it(""+ i++ +". waves grande",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/waves-grande/ ");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })





    it(""+ i++ +". address jbr",()=>{    
        
        cy.visit("https://sales-inquiries.ae/axcapital/address-jbr/ ");
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
    



        cy.get('.main-banner__btn').click()
        cy.wait(1000)
        cy.get('#Modal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        cy.get('.second-section__btn').click()
        cy.wait(1000)
        cy.get('#Modal > .modal-dialog > .modal-content > .modal-footer > .btn').click()

        cy.get('.floorplans__btn').click()
        cy.wait(1000)
        cy.get('#Modal > .modal-dialog > .modal-content > .modal-footer > .btn').click()



       
        
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






  //   it(""+ i++ +". louvre residences",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/louvre-residences/");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })







  //   it(""+ i++ +". samana hills",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/samana-hills/ ");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })



    




    



  //   it(""+ i++ +".  la vie jbr",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/la-vie-jbr/");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    




       
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })




   



   




    


  //   it(""+ i++ +". aykon heights",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/aykon-heights/ ");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    

  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })


  //   it(""+ i++ +". deyaar regalia",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/deyaar-regalia/ ");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    

  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })


  //   it(""+ i++ +". palm tower",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/palm-tower/ ");
  //       cy.viewport(1024, 1024)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        
        
  //       cy.get('.footer__form-box').scrollIntoView()
  //       cy.scrollTo(0,-1000)
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")

  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })



  //   it(""+ i++ +". mag 318",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/mag-318/  ");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    

  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })



    


  //   it(""+ i++ +". il primo",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/il-primo/  ");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    

  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })




    



  //   it(""+ i++ +". the portman",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/the-portman/ ");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    

  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })




  //   it(""+ i++ +". gems estates",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/gems-estates/ ");
  //       cy.viewport(1024, 768)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    

  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })




  //   it(""+ i++ +". orl dorchester collection",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/orla-dorchester-collection/");
  //       cy.viewport(1024, 1024)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    
  //       cy.get('.footer__form-box').scrollIntoView()
        
  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })



    



  //   it(""+ i++ +". mjl lamaa",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/mjl-lamaa/  ");
  //       cy.viewport(1024, 1024)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    

  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })



  //   it(""+ i++ +". peninsula four",()=>{    
        
  //       cy.visit("https://sales-inquiries.ae/axcapital/peninsula-four/ ");
  //       cy.viewport(1024, 1024)


  //       cy.wait(20000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
        
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()

  //       cy.wait(3000)
  //       cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    

  //       cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //       cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //       cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           expect(err.message).to.include('gtag is not defined')
        
  //           // using mocha's async done callback to finish
  //           // this test so we prove that an uncaught exception
  //           // was thrown
            
        
  //           // return false to prevent the error from
  //           // failing this test
  //           return false
  //         })
  //       cy.get('.footer__form > form > .btn').click()
  //       cy.get('.swal2-success-circular-line-right').should('exist')
  //       cy.get('.swal2-confirm').click()
  //   })


    


  //   it(""+ i++ +". paragon by igo",()=>{    
        
  //           cy.visit("https://sales-inquiries.ae/axcapital/paragon-by-igo/  ");
  //           cy.viewport(1024, 768)
    
    
  //           cy.wait(20000)
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
            
  //           cy.get('.swal2-success-circular-line-right').should('exist')
  //           cy.get('.swal2-confirm').click()
    
  //           cy.wait(3000)
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        
    
  //           cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //           cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //           cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //           cy.on('uncaught:exception', (err, runnable) => {
  //               expect(err.message).to.include('gtag is not defined')
            
  //               // using mocha's async done callback to finish
  //               // this test so we prove that an uncaught exception
  //               // was thrown
                
            
  //               // return false to prevent the error from
  //               // failing this test
  //               return false
  //             })
  //           cy.get('.footer__form > form > .btn').click()
  //           cy.get('.swal2-success-circular-line-right').should('exist')
  //           cy.get('.swal2-confirm').click()
  //       })
    
  // it(""+ i++ +". damac cavalli",()=>{    
        
  //           cy.visit("https://sales-inquiries.ae/axcapital/damac-cavalli/");
  //           cy.viewport(1024, 768)
    
    
  //           cy.wait(20000)
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
            
  //           cy.get('.swal2-success-circular-line-right').should('exist')
  //           cy.get('.swal2-confirm').click()
    
  //           cy.wait(3000)
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        
    
  //           cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //           cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //           cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //           cy.on('uncaught:exception', (err, runnable) => {
  //               expect(err.message).to.include('gtag is not defined')
            
  //               // using mocha's async done callback to finish
  //               // this test so we prove that an uncaught exception
  //               // was thrown
                
            
  //               // return false to prevent the error from
  //               // failing this test
  //               return false
  //             })
  //           cy.get('.footer__form > form > .btn').click()
  //           cy.get('.swal2-success-circular-line-right').should('exist')
  //           cy.get('.swal2-confirm').click()
  //       })



  // it(""+ i++ +". safa one",()=>{    
        
  //           cy.visit("https://sales-inquiries.ae/axcapital/safa-one/");
  //           cy.viewport(1024, 768)
    
    
  //           cy.wait(20000)
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(1) > .form-control').type("test")
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .row > :nth-child(2) > .form-control').type("1@example.com")
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-body > .modal-form > .modal-form__form > .btn').click()
            
  //           cy.get('.swal2-success-circular-line-right').should('exist')
  //           cy.get('.swal2-confirm').click()
    
  //           cy.wait(3000)
  //           cy.get('#popup > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        
    
  //           cy.get('.footer__form > form > .row > :nth-child(1) > .form-control').type("test")
  //           cy.get('.footer__form > form > .row > :nth-child(3) > .iti > .form-control').type("121231212")
  //           cy.get('.footer__form > form > .row > :nth-child(2) > .form-control').type("1@example.com")
            
  //           cy.get('.footer__form > form > .btn').click()
  //           cy.get('.swal2-success-circular-line-right').should('exist')
  //           cy.get('.swal2-confirm').click()
  //       })
    
       


        

})