 describe("Automation test store", ()=>{
    it("should be able to submit a successful submission via contact us form",()=>{
        cy.visit("http://www.automationteststore.com/");
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("fake@gmail.com");
        cy.get('#ContactUsFrm_enquiry').type("do you provide discounts on new accs?")
        cy.get('.col-md-6 > .btn').click()



    })


 })