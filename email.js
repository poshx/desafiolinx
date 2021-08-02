


    let panel5 = null;

    window.addEventListener('load', async () => {
        mapElements();
        
        
        
        await fetchUsers();
    });

    function mapElements() {
        panel5 = document.querySelector('.paginaemail')
        
    }
   
    
    
    async function fetchUsers() {
        const res = await fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1');
        const json = await res.json();
        paginaemail = json.products.filter(function(item) {
            return item.id <=1})
        renderUsers(); 
    }

    function renderUsers (products) {
        paginaemail.forEach(products => {
            const li = document.createElement('div');
            const parcelado = `${products.price}`/2
            const img = `<div class="photo"><img id="novo" src="${products.image}"/> <div class = "titu">${products.name}</div> <div class = "descr">${products.description}</div> <div class = "old">De: R$${products.oldPrice}</div> <div class = "price">Por: R$ ${products.price}</div> <div class = "parcelado">ou 2x de R$${parcelado}</div><div class = "btncomprar"><input type="button" id="btnComprar" name="Comprar" value="Comprar"></div></div>`
            li.innerHTML = `${img}`
            panel5.appendChild(li);   
        })
    }

    
   
    
    


    
    
        
    
    
    
    