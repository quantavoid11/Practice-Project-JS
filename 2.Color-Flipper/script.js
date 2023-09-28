const input=document.querySelector('input');
const body=document.querySelector('body');
const span=document.querySelector('span');
input.addEventListener('input',(e)=>{
    const value=e.target.value;
    body.style.backgroundColor=value;
    span.innerText=value;
});
