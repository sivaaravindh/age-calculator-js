let submit=document.getElementById('btn');
let age=document.getElementById('con');
submit.addEventListener("click",()=>{
    let birthDay=document.getElementById('birthday');
    let birthday=new Date(birthDay.value);
    let currentday=new Date();
    age.innerText=
    `${currentday.getFullYear()-birthday.getFullYear()
        } years ${Math.abs(currentday.getMonth()-birthday.getMonth())
        } Months ${Math.abs(currentday.getDate()-birthday.getDate())}  Days`;
})