function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;;
  }

// CAPTURA O BOTÃO
const button = document.querySelector('button');

button.addEventListener('click', rolarDado);

function rolarDado() { 
  
  // COMPLETA O ARRAY CONTADOR COM ZEROS
  const count = [];

  for(let i = 0; i < 12; i++){
    count[i] = 0;
  }

  
  for (let i = 1; i <= 1000; i++){ 
       
      let dado1 = 0;
      let dado2 = 0;
      let total = 0;
   
      // SIMULA A ROALGEM DO PRIMEIRO DADO
      dado1 = getRandomIntInclusive(1, 6);
      
      // SIMULA A ROALGEM DO SEGUNDO DADO
      dado2 = getRandomIntInclusive(1, 6);
      
      // SOMA O NÚMERO DA FACE DE CADA DADO
      total = dado1 + dado2;

      // CONTA QUANTAS VEZES A SOMA DAS FACES DOS DADOS FORAM IGUAIS
      count[total - 1] += 1      
         
  }

  for( let i = 1; i < count.length; i++){
    const imprimeTotal = document.createElement('p');
    const barra = document.createElement('div');    

    // ADICIONA A CLASSE AO ELEMENTO
    barra.classList.add("barra");

    // GERA O COMPRIMENTO DA BARRA BASEADO NA QUANTIDADE DE APARIÇÕES
    barra.style.flexBasis = count[i] + 'px';

    // SELECIONA UMA DIV DIFERENTE BASEADA NO ID DA POSIÇÃO ATUAL + 1, POIS A ID INICIA EM 2
    const div = document.querySelector('#num' + (1 + i));

    // APAGA OS ELEMENTOS ANTERIORES, ANTES DE APRESENTAR OS PRÓXIMOS VALORES
    div.innerText = ' ';
    
    // ADICIONA A CLASSE AO ELEMENTO
    imprimeTotal.classList.add('p-flex');

    // APENAS ESTILIZA A SAÍDA PARA O USUÁRIO E MOSTRA O RESULTADO TOTAL DAS JOGADAS
    imprimeTotal.innerText = '[' + (1 + i) + ']' +': ' + count[i];

    
    // CRIA OS ELEMENTOS NA PÁGINA
    div.appendChild(imprimeTotal); 
    div.appendChild(barra);
  }

};

