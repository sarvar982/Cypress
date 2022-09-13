// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
// })
var i = 1;


context('axcapital - Blog test', () => {
    // beforeEach(() => {
    //   cy.visit('https://www.axcapital.ae/blog/news?page=1');
    
    // })
    it('testing',()=>{
        cy.visit('https://www.axcapital.ae/offplan/detail/dubai-arabian-ranches-3-sun-townhouses');
        cy.get('h1').should('exist');
    })
    const pages = ['2','3','4','5','6','7','8','9','10'];
    const selectors=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
    selectors.forEach((selector) => {
        
        it('Post number '+selector+'!',() => {
        cy.visit('https://www.axcapital.ae/blog/news?page=1');
        cy.xpath('/html/body/app-root/app-news-page/section[1]/div[2]/div['+selector+']/a').click({force: true});
        cy.log(selector)
        // cy.wait(1000)
        cy.get('h1').should('exist');
        // cy.go(-1);    
    })
    })
    it('Second blog page',()=>{
        cy.visit('https://www.axcapital.ae/blog/news?page=2');
    })
        
    selectors.forEach((selector) => {
        it('Post number '+selector+'!',() => {
        cy.xpath('/html/body/app-root/app-news-page/section[1]/div[2]/div['+selector+']/a').click({force: true});
        cy.log(selector)
        // cy.wait(1000)
        cy.get('h1').should('exist');
        cy.go(-1);    
    })
    })
    it('Third blog page',()=>{
        cy.visit('https://www.axcapital.ae/blog/news?page=3');
    })
        
    selectors.forEach((selector) => {
        it('Post number '+selector+'!',() => {
        cy.xpath('/html/body/app-root/app-news-page/section[1]/div[2]/div['+selector+']/a').click({force: true});
        cy.log(selector)
        // cy.wait(1000)
        cy.get('h1').should('exist');
        cy.go(-1);    
    })
    })
    it('Forth blog page',()=>{
        cy.visit('https://www.axcapital.ae/blog/news?page=4');
    })
        
    selectors.forEach((selector) => {
        it('Post number '+selector+'!',() => {
        cy.xpath('/html/body/app-root/app-news-page/section[1]/div[2]/div['+selector+']/a').click({force: true});
        cy.log(selector)
        // cy.wait(1000)
        cy.get('h1').should('exist');
        cy.go(-1);    
    })
    })
    it('Fifth blog page',()=>{
        cy.visit('https://www.axcapital.ae/blog/news?page=5');
    })
        
    selectors.forEach((selector) => {
        it('Post number '+selector+'!',() => {
        cy.xpath('/html/body/app-root/app-news-page/section[1]/div[2]/div['+selector+']/a').click({force: true});
        cy.log(selector)
        // cy.wait(1000)
        cy.get('h1').should('exist');
        cy.go(-1);    
    })
    })
    it('Sixth blog page',()=>{
        cy.visit('https://www.axcapital.ae/blog/news?page=6');
    })
        
    selectors.forEach((selector) => {
        it('Post number '+selector+'!',() => {
        cy.xpath('/html/body/app-root/app-news-page/section[1]/div[2]/div['+selector+']/a').click({force: true});
        cy.log(selector)
        // cy.wait(1000)
        cy.get('h1').should('exist');
        cy.go(-1);    
    })
    })
    it('Seventh blog page',()=>{
        cy.visit('https://www.axcapital.ae/blog/news?page=7');
    })
        
    selectors.forEach((selector) => {
        it('Post number '+selector+'!',() => {
        cy.xpath('/html/body/app-root/app-news-page/section[1]/div[2]/div['+selector+']/a').click({force: true});
        cy.log(selector)
        // cy.wait(1000)
        cy.get('h1').should('exist');
        cy.go(-1);    
    })
    })
    it('Eight blog page',()=>{
        cy.visit('https://www.axcapital.ae/blog/news?page=8');
    })
        
    selectors.forEach((selector) => {
        it('Post number '+selector+'!',() => {
        cy.xpath('/html/body/app-root/app-news-page/section[1]/div[2]/div['+selector+']/a').click({force: true});
        cy.log(selector)
        // cy.wait(1000)
        cy.get('h1').should('exist');

        cy.go(-1);    
    })
    })
    it('Nineth blog page',()=>{
        cy.visit('https://www.axcapital.ae/blog/news?page=9');
    })
        
    selectors.forEach((selector) => {
        it('Post number '+selector+'!',() => {
        cy.xpath('/html/body/app-root/app-news-page/section[1]/div[2]/div['+selector+']/a').click({force: true});
        cy.log(selector)
        // cy.wait(1000)
        cy.get('h1').should('exist');
        cy.go(-1);    
    })
    })
    it('Tenth blog page',()=>{
        cy.visit('https://www.axcapital.ae/blog/news?page=10');
    })
        it('Post number 10!',() => {
        cy.xpath('/html/body/app-root/app-news-page/section[1]/div[2]/div[1]/a').click({force: true});
        
        cy.get('h1').should('exist');
        cy.go(-1);    
    })



   
    })
