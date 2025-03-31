function calcular () {

    // recupera o valor da ação social, declaração variável sem tipo 
    let acaoSocial = document.getElementById("acaoSocial").value

    // recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value

    // somando os valores atribuidos, devolve o resultado para o HTML
    let soma = Number(acaoSocial) + Number(homenagem) + (2 * leite) + (30 * kit) + (15 * suplemento) + 
    (5 * arroz) + Number(arroz1) + (2 * feijao) + Number(feijao1) + Number(macarrao / 2) + Number(oleo)

    document.getElementById("soma").innerHTML = soma.toFixed(2)

     //vamos somar os valores, recupera a quantidade de litros de leite
     let leite = Number (document.getElementById("leite").value)

     let kit = Number (document.getElementById("kit").value
 )
     let suplemento = Number (document.getElementById("suplemento").value)
 
     let arroz = Number (document.getElementById("arroz").value)
     
     let arroz1 = Number (document.getElementById("arroz 1").value)
 
     let feijao = Number (document.getElementById("feijao").value)
 
     let feijao1 = Number (document.getElementById("feijao1").value)
 
     let macarrao = Number (document.getElementById("macarrao").value)
 
     let oleo = Number (document.getElementById("oleo").value)

     
    // recuperar a cor da equipe 
    let equipe = document.getElementById("equipe").value 
    let pontosKit = 0
    if ( equipe == "Laranja") {
        if ( Number (kit) >= 97) {
            pontosKit = 5000 +((kit - 97) * 30)
        }
    }
    
}
