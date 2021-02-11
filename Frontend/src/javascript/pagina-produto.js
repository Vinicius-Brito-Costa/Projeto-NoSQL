let log = console.log;
export function AutoPreencherEndereco()
{
    if(document.getElementById("cep") == null) return;
    let cep = document.getElementById("cep").value;
    if(cep.length > 1){
        document.getElementById('endereco').value = "Rua Anhanhanha";
        document.getElementById('numero').value = "777";
        document.getElementById('estado').value = "SP";
        document.getElementById('cidade').value = "Guarulhos";
        document.getElementById('telefone').value = 9999999999;    
    }
}
export function PreencherValorTotal(valor)
{
    let quantidade = Math.round(document.getElementById('quantidade').value);
    let valorTotal = document.getElementsByClassName('valor-total')[0];
    if(quantidade < 1)
    {
        quantidade = 1
    }
    valorTotal.innerHTML = "R$ " + (valor * quantidade).toFixed(2);
}