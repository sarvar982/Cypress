describe("Шаблон Six пробная", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it("reading links from the file", () => {
        cy.readFile('cypress/fixtures/six-links.txt').then(async (json) => {
            let sum = 0
            const links = json.split("\n")
            
            cy.log('links', links)

            let last_link = links.slice(-1)
            let sliced_link = links.slice(37);
            

            for (let link of links) {

                cy.log('link', link)
                
                cy.visit(link);
                cy.viewport(1024, 768)

                await cy.writeFile('cypress/fixtures/six-sences.txt', new Date().toString(), { flag: 'a+' })

                await cy.get('[type="text"]').then(els => {
                    [...els].forEach(el => cy.wrap(el).type('test', { force: true }));
                })

                await cy.get('[type="email"]').then(els => {
                    [...els].forEach(el => cy.wrap(el).type('1@example.com', { force: true }));
                })

                await cy.get('[type="tel"]') .then(els => {
                    const numm123 = els.length.toString();
                    [...els].forEach(el => cy.wrap(el).type('121231212', { force: true }));

                    sum = +sum + Number(numm123)
                    cy.writeFile('cypress/fixtures/six-sences.txt', ' - ' + numm123 + ' отправленных форм \n на сайт ' + link + '\n\n', { flag: 'a+' })
                    cy.task("log","Количество отправленных форм "+els.length+". На сайт "+link+"")
                })
                await cy.get('[type="submit"]').then(els => {
                    [...els].forEach(el =>
                        cy.wrap(el).click({ force: true }),
                    );
                   
                })


               
            }

            cy.writeFile('cypress/fixtures/six-sences.txt', 'Сумма всего отправленных форм -' +sum+'', { flag: 'a+' })
            cy.task("log", "Сумма всего отправленных форм -"+sum+"")














        })




    })
})
