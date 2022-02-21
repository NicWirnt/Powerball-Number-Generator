
let powerBall = [];

const entryElm = document.getElementById("entryNo");
const pwElm = document.getElementById("powerNo");

const handleOnClick = () =>{
    let lottoEntry = [];
    for(let i = 0;lottoEntry.length < 7; i++){

        const numb = randNo(35);
        if(!lottoEntry.includes(numb)) lottoEntry.push(numb);
    }
    entryElm.innerText = lottoEntry;

    pwElm.innerText = randNo(20);
}

const randNo = max =>{
    return Math.floor((Math.random()) * max + 1)
}

