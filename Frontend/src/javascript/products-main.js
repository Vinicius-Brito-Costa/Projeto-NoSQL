let log = console.log;
export function GoTo(url)
{
    window.location.href = url;
}
export function MostrarSubCategorias(elemento) {
    /*let categorias = document.getElementsById(elemento).children;
    if(categorias == null) return;
    for (let i = 0; i < categorias.length; i++) {
        if (categorias[i].id == "sub-link") {
            if (categorias[i].style.display == "") {
                categorias[i].style = "display: block";
            } 
            else {
                categorias[i].style = "display:";
            }
        }
    }*/
}
export function MostrarCategoriasMobile()
{
    let barraCategorias = document.getElementById('link-barra-produtos');
    if(barraCategorias.style.display !== "block")
    {
        barraCategorias.style = "display: block";
    }
    else{
        barraCategorias.style = "display:"
    }
}
export function MostrarApenas(id) 
{
    let produtos = document.getElementsByClassName('card');
    let boxProduto = document.getElementsByClassName('card-box')
    for (let i = 0; i < produtos.length; i++) 
    {
        if (id !== 'todos') 
        {
            if (produtos[i].id !== id) 
            {
                boxProduto[i].style = "display: none"
            } 
            else if (produtos[i].id === id) 
            {
                boxProduto[i].style = "display: inline-block"
            }
        }
        else
        {
            boxProduto[i].style = "display: inline-block"
        }
    }
}
export function MostrarApenasSub(categoria, sub)
{
    let produtos = document.getElementsByClassName('card');
    let boxProduto = document.getElementsByClassName('card-box')
    log(produtos.length);
    for(let i = 0; i < produtos.length; i++)
    {
        if(!produtos[i].classList.contains(sub) || produtos[i].id !== categoria)
        {
            boxProduto[i].style = "display: none";
        }
        else if(produtos[i].classList.contains(sub) && produtos[i].id === categoria){
            boxProduto[i].style = "display: inline-block";
        }
    }
}

export function ChecarVazio()
{
    let promo = window.document.getElementsByClassName("promo");
    let atual = window.document.getElementsByClassName("preco-atual");
    for(let i = 0; i< promo.length; i++)
    {
        if(promo[i].innerHTML === "<p></p>")
        {
            promo[i].style = "display: none";
            atual[i].style = "padding: .5vh 4.6vw;"
        }
    }
    let antigo = window.document.getElementsByClassName("preco-antigo");
    for(let i = 0; i< antigo.length; i++)
    {
        if(antigo[i].innerText === "espaco" || antigo[i].innerHTML === "&nbsp;")
        {
            antigo[i].innerHTML = '\u00A0';
            antigo[i].style = "text-decoration: none;";
        }
    }
}


