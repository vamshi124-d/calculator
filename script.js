let string="";
let buttons=document.querySelectorAll('.button');
// console.log(Array.from(buttons));
Array.from(buttons).forEach((items)=>{
    items.addEventListener('click',(e)=>{
       if(e.target.innerHTML==='C'){
        string="";
        document.querySelector('.input').value=string;
       }
       else if(e.target.innerHTML==='='){
           string=eval(string);
           document.querySelector('.input').value=string;
       }
        else{
       string=string+e.target.innerHTML;
       document.querySelector('.input').value=string;
       }
    })
})