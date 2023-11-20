function calcularSomatorioMultiplos() {
    let valor = document.getElementById("inserirNumero").value
    
    if(testarInteiroPositivo(valor)){
        let numero = parseInt(valor)
        let multiploTres = 0
        let multiploCinco = 0
        let soma = 0;
        let numerosDivisiveis = []
        let laco = true

        while(laco){
            if((multiploTres+3)<numero){
                if((multiploTres+3)%5!=0){
                    multiploTres = multiploTres + 3
                    numerosDivisiveis.push(multiploTres)
                    soma=soma+multiploTres

                    if((multiploCinco+5)<numero && (multiploCinco+5)<=multiploTres+3){
                        multiploCinco = multiploCinco + 5
                        numerosDivisiveis.push(multiploCinco)
                        soma=soma+multiploCinco
                    }

                }else{
                    multiploTres = multiploTres + 3
                    
                }
            }else{
                laco=false
            }
        }
  
        document.getElementById("resultado").innerText = `O somatório de todos os valores inteiros divisíveis por 3 ou 5 inferiores a ${numero} é: ${soma}`
        document.getElementById("multiplos").innerText = `Múltiplos de 3 e 5 menores que ${numero}:`
        document.getElementById("resultadoMultiplos").innerText = numerosDivisiveis
    }else{
        alert("Digite um número inteiro e positivo.")
    }

  }

  function testarInteiroPositivo(valor){
    if (testarInteiro(valor) > 0 ) {
        return true;
    }else{
        return false;
    }
  }

  function testarInteiro(valor){
    if((parseFloat(valor)-parseInt(valor)>0 || !Number.isInteger(parseInt(valor)))){
        return -1;
    }else{
        return parseInt(valor)
    }
  }