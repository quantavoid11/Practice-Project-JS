
const value=document.querySelector(".value");
const btns=document.querySelectorAll(".btn");
btns.forEach(
    function(btn){
        btn.addEventListener("click",function(e){
            const styles=e.currentTarget.classList;
            if(styles.contains("decrease")){
                value.innerHTML--;
            }
            else if(styles.contains("reset")){
                value.innerHTML=0;
            }
            else if(styles.contains("increase")){
                value.innerHTML++;
            }
            if(value.innerHTML>0){
                value.style.color="green";
            }
            else if(value.innerHTML<0){
                value.style.color="red";
            }
            else{
                value.style.color="rgb(163 163 163)";
            }
        })
    }
)
