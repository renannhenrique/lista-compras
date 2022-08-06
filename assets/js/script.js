



 let lista = [];

document.querySelector("#adicionar").addEventListener("click", ()=>{
    

    let campoProduto = document.querySelector("#produto");
    let campoQuantidade = document.querySelector("#quantidade");
    let campoValor = document.querySelector("#valor");

    if (campoQuantidade.value <= 0) {

        alert("Digite apenas valores positivos!")

        campoProduto.value = '';
        campoQuantidade.value = '';
        campoValor.value = '';
    }else{

          // adicionando no array
    lista.push(
        {prod:campoProduto.value, quant:campoQuantidade.value, valor:campoValor.value}
    );

    let valor_total = 0;
 


   let area = document.querySelector(".area");
       area.innerHTML = '';

      
  
        
        lista.map((val)=>{

            
            valor_total = (val.quant * val.valor) + valor_total;
            valor_total = parseFloat(valor_total)
           

            area.innerHTML += `
                        <div class="resultados">
                            <div class="item">
                                DESCRIÇÃO<br/>
                                ${val.prod}
                            </div>

                            <div class="item">
                                QUANTIDADE<br/>
                                ${val.quant}
                            </div>

                            <div class="item">
                                VALOR<br/>
                                R$${(val.quant * val.valor).toFixed(2)}
                            </div>
                    
                         </div>

            `;


        });

    
      
        document.querySelector(".valor__total").innerHTML = `Total R$${valor_total.toFixed(2)}`
       

        campoProduto.value = '';
        campoQuantidade.value = '';
        campoValor.value = '';

    }
       

      
        



});





