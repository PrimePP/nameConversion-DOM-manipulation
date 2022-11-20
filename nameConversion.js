const inputVal = document.querySelector('#text');
const convertBtn = document.getElementById('convert-btn');
const camelWord = document.getElementById('camel-case');
const pascalWord = document.getElementById('pascal-case');
const snakeWord = document.getElementById('snake-case');
const screamSnakeWord = document.getElementById('screaming-snake-case');
const kebabCaseWord =document.getElementById('kebab-case')
const screamKebabWord = document.getElementById('screaming-kebab-case')



const convertWord = ()=>{
    const arr = inputVal.value.split(" ");
    console.log(arr);

   const camelCase = arr[0].toLowerCase()+arr[1][0].toUpperCase()+arr[1].slice(1);
   const paskelCase = arr[0][0].toUpperCase()+arr[0].slice(1) + arr[1][0].toUpperCase()+arr[1].slice(1);
   //'snake_case'
   const snakeCase = arr[0].toLowerCase()+'_'+arr[1].toLowerCase();
   //'kebab-case'
   const kebabCase = arr[0].toLowerCase()+'-'+arr[1].toLowerCase()
   //'THIS-IS-A-SCREAM'
   const screamKebab = arr[0].toUpperCase() +'-'+arr[1].toUpperCase() ;
   //'THIS_IS_A_SCREAM'
   const screamSnake = arr[0].toUpperCase() +'_'+arr[1].toUpperCase() ;
    camelWord.textContent = camelCase;
    pascalWord.textContent = paskelCase;
    snakeWord.textContent  = snakeCase;
    screamSnakeWord.textContent = screamSnake;
    kebabCaseWord.textContent = kebabCase;
    screamKebabWord.textContent = screamKebab;
}   

convertBtn.addEventListener('click',convertWord)