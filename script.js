const rua = document.getElementById("street");
const numero = document.getElementById("number");
const complemento = document.getElementById("complement");
const estado = document.getElementById("state");
const bairro = document.getElementById("district");
const input_cep = document.getElementById("cep");

const btn_send = document.querySelector(".btn-send");
const buscarCEP = (cep) => {
    const API_URL = `https://viacep.com.br/ws/${cep}/json/`

    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        rua.value = data.logradouro  
        numero.value = data.número
        complemento.value = data.regiao
        estado.value = data.uf
        bairro.value = data.bairro
      
    })
}

btn_send.addEventListener("click", function(event){
    buscarCEP(input_cep.value)
    event.preventDefault() // preventDefault() não recarrega a pagina ao executar a função

})

.catch(err => {
    rua.innerText = "CEP NÃO ENCONTRADO"
    numero.innerText = "CEP NÃO ENCONTRADO"
    complemento.innerText = "CEP NÃO ENCONTRADO" 
    estado.innerText =  "CEP NÃO ENCONTRADO"
    bairro.innerText =  "CEP NÃO ENCONTRADO"

})
