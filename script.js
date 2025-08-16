const form = document.querySelector('form');
form.addEventListener('submit' ,function (e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results')
  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=`Please Give A Valid height${height}`
  }
   else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`Please Give A Valid weight${weight}`
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    results.innerHTML=`<span>${bmi}</span>`;
  }

})
const formm= document.querySelector('form');
formm.addEventListener('submit' ,function (f){
  f.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const define=document.querySelector('#bmi-weight')
  const bmi = (weight/((height*height)/10000)).toFixed(2);
  if(bmi<18.6){
    define.innerHTML=`<span>Underweight</span>`
   }
  else if(bmi>24.9){
   define.innerHTML=`<span>overweight</span>`
  }
  else if(bmi>18.6 && bmi<24.9) {
    define.innerHTML=`<span>Normal</span>`
  }
});
