const btn= document.querySelector(".btn");
const advice = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");

btn.addEventListener("click",()=>{
    fetch("https://api.adviceslip.com/advice")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        adviceId.innerHTML = `ADVICE #${data.slip.id}`;
        advice.innerHTML = `ADVICE #${data.slip.advice}`;
    })

})

