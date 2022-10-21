describe("dubai-hills", ()=>{
    
    var j=0
    it("i taken",()=>{

        cy.viewport(1024, 768)
        cy.visit("https://sales-inquiries.ae/axcapital/dubai-hills/");

        cy.get('input[placeholder="Your name"]').eq(0).type("test", { force: true })
        cy.get('.download-brochure-form__form > :nth-child(2) > .form-control').type("mail@example.com", { force: true })
        cy.get('.download-brochure-form__form > :nth-child(3) > .iti > .form-control').type("998121231212", { force: true })
        // cy.get('.download-brochure-form__btn').click('topRight')
        cy.xpath('/html/body/div[1]/section[3]/div[3]/div[2]/form/button').click()
        cy.get('.swal2-success-circular-line-right').should("exist")
        cy.get('.swal2-confirm').click()
    
        

    })


 })