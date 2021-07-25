let panel1 = null;
let panel2 = null;
let container2 = document.querySelector('.container2')
let btnmais = document.querySelector('.btnmais')
console.log(container2)
console.log(btnmais)
window.addEventListener('load', async () => {
    
    mapElements();
    await fetchUsers();
    
    
    
    
    
});

function mapElements() {
    panel1 = document.querySelector('.container')
    panel2 = document.querySelector('.container2')
    


       
    
        //codigo para alterar img e texto
    //panel1.setAttribute('src', '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6506376')
    
}

async function fetchUsers() {
    const res = await fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1');
    const res2 = await fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2')
    const json = await res.json();
    const json2 = await res2.json();
    produtos = json.products.map(({id, name, image, description, oldPrice, price  }) => {
        return {
            id: id,
            name: name,
            imagem: image,
            descricao: description,
            oldprice: oldPrice,
            price: price,
        }
    
    })
    produtos2 = json2.products.map(({id, name, image, description, oldPrice, price  }) => {
        return {
            id2: id,
            name2: name,
            imagem2: image,
            descricao2: description,
            oldprice2: oldPrice,
            price2: price,
        }
    
    })

    
    
    renderUsers();
    renderUsers2();
    
    

}
function mascara_cpf(){
    var cpf = document.querySelector('.cpf')
    if(cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += "."
    } else if(cpf.value.length == 11) {
        cpf.value += "-"
    }
    
}
function validarEmail(){
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');
    var sucess = document.querySelector('#sucess-email');
    
    
    //if(!email.checkValidity()){
    //    alert("Email invalido")
    //} 
    
}
    
    
function redefinirMsg(){
    var error = document.querySelector('#error-email');
    var sucess = document.querySelector('#sucess-email');
    if (error.innerHTML == "Email invalido"){
        error.innerHTML = "";
    } 
    
}
        
      
  

function renderUsers (products) {

    produtos.forEach(products => {
        const li = document.createElement('div');
        const parcelado = `${products.price}`/2
        const img = `<div class="photo"><img id="novo" src="${products.imagem}"/> <div class = "titu">${products.name}</div> <div class = "descr">${products.descricao}</div> <div class = "old">De: R$${products.oldprice}</div> <div class = "price">Por: R$ ${products.price}</div> <div class = "parcelado">ou 2x de R$${parcelado}</div><div class = "btncomprar"><input type="button" id="btnComprar" name="Comprar" value="Comprar"></div></div>`

        li.innerHTML = `${img}`
        
        panel1.appendChild(li);
        
    })
  
}
function renderUsers2 (products) {

    produtos2.forEach(products => {
        const li2 = document.createElement('div');
        const parcelado2 = `${products.price2}`/2
        const img2 = `<div class="photo2"><img id="novo2" src="${products.imagem2}"/> <div class = "titu2">${products.name2}</div> <div class = "descr2">${products.descricao2}</div> <div class = "old2">De: R$${products.oldprice2}</div> <div class = "price2">Por: R$ ${products.price2}</div> <div class = "parcelado2">ou 2x de R$${parcelado2}</div><div class = "btncomprar2"><input type="button" id="btnComprar2" name="Comprar" value="Comprar"></div></div>`

        li2.innerHTML = `${img2}`
        
        panel2.appendChild(li2);
        
    })
  
}
function action(fetchUsers) {
    renderUsers2();
}

btnmais.addEventListener('click',function(fetchUsers) {
    var container2 = document.querySelector('.div2');

    if(container2.style.display === 'none') {
        container2.style.display = 'block';
    } else {
        container2.style.display = 'block';
    }

});



    



