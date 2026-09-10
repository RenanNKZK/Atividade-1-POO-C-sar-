class Produto{
nome: string;
preco: GLfloat;
estoque: number;

  constructor(nome: string, preco: GLfloat, estoque: number){
 this.nome = nome;
 this.preco = preco;
 this.estoque = estoque;
  
}
}

const produto1= new Produto("Mamao",4.90 ,1);
const produto2= new Produto("Sabao em po", 15, 1);
console.log("Produto 1: ",produto1.nome ,"|", "Preco: ", produto1.preco ,"|", "Quantidade: ",produto1.estoque);
console.log("Produto 2: ",produto2.nome ,"|", "Preco: ",produto2.preco ,"|","Quantidade: ",produto2.estoque);
