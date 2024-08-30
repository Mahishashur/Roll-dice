function rolldice(){
    const numofdice=document.getElementById("numofdice").value;
    const diceR=document.getElementById("diceR");
    const diceI=document.getElementById("diceI");
    const values=[];
    const images=[];
    for(let i = 0; i < numofdice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="img path"/${value}.png" alt="dice ${value}">`);
    }
    diceR.textContent=`dice:${values.join(", ")}`;
    diceI.innerHTML=images.join(''); 
}

