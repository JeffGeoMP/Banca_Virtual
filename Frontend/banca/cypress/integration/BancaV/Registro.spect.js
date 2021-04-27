
describe('Registro',()=>{
    
    it('Encabezado de card principal',()=>{
        cy.visit('http://localhost:4200/registro');
        cy.get('legend').invoke('text').should('contain','Registro');
    });

    it('Contenido Button',()=>{
        cy.visit('http://localhost:4200/registro');
        cy.get('button').invoke('text').should('contain','Guardar');
    });

  


});