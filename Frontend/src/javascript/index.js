export default function Navbar(){
    if(document.body.scrollTop === 0){
        document.getElementsByClassName("cabecalho")[0].classList.replace('cabecalho', 'cabecalho2');
    }
    else{
        document.getElementsByClassName("cabecalho2")[0].classList.replace('cabecalho2', 'cabecalho2');
    }
}