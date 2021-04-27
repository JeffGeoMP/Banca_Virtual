

describe('Consultar saldo',()=>{
    
    it('Encabezado de card principal',()=>{
        cy.visit('http://localhost:4200/Consulta');
        cy.get('h5').invoke('text').should('contain','Saldo Cuenta');
    });
    it('Contenido de nuesto boton',()=>{
        cy.visit('http://localhost:4200/Consulta');
        cy.get('a').invoke('text').should('contain','Transferencia');
    });

    it('Peticion de datos',()=>{
        cy.visit('http://localhost:4200/Consulta');
        cy.get('p').invoke('text').should('contain','');
    });

    it('Saldo Actual',()=>{
        cy.visit('http://localhost:4200/Consulta');
        let user = {
            id_cuenta:1,
              nombres:"Alejandro",
              apellidos:"Marín",
              dpi:12345,
              saldo:10.5,
              correo:"AleG@g.com",
              pass:"1234"
          }
        localStorage.setItem("Usuario", JSON.stringify(user));
        cy.get('h4').invoke('text').should('contain','10.5');
        
    });

    it('Usuario Logueado',()=>{
        cy.visit('http://localhost:4200/Consulta');
        let user = {
            id_cuenta:1,
              nombres:"Alejandro",
              apellidos:"Marín",
              dpi:12345,
              saldo:10.5,
              correo:"AleG@g.com",
              pass:"1234"
          }
        localStorage.setItem("Usuario", JSON.stringify(user));
        cy.get('p').invoke('text').should('contain','Alejandro Marín');


    });

    it('No existe usuario logueado',()=>{
        cy.visit('http://localhost:4200/Consulta');
        localStorage.removeItem("Usuario");
        cy.get('p').invoke('text').should('contain','');


    });



});