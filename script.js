function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;;
  }

const main = document.getElementsByTagName('main')[0];



const button = document.querySelector('button');

button.addEventListener('click', rolarDado);

function rolarDado() { 
  
  const count = [];

  for(let i = 0; i < 12; i++){
    count[i] = 0;
  }

  
  for (let i = 1; i <= 1000; i++){ 
 
      const result = document.createElement('p');
      let teste = 0;
      let teste2 = 0;
      let total = 0;
   

      teste = getRandomIntInclusive(1, 6);  
      teste2 = getRandomIntInclusive(1, 6);
      

      total = teste + teste2;

      count[total - 1] += 1      

      result.innerText = total.toString();     
  }

  for( let i = 1; i < count.length; i++){
    const imprimeTotal = document.createElement('p');
    const barra = document.createElement('div');

    const section = document.getElementById('#container');

    barra.classList.add("barra");
    // barra.style.width = count[i] + 'px';
     barra.style.flexBasis = count[i] + 'px';

    const div = document.querySelector('#num' + (1 + i));
    div.innerText = ' ';
    
    imprimeTotal.classList.add('p-flex');
    imprimeTotal.innerText = '[' + (1 + i) + ']' +': ' + count[i];

    
    div.appendChild(imprimeTotal); 
    div.appendChild(barra);

    

    // main.appendChild(div);

  }

};

