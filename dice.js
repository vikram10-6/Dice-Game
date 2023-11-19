function tdo(){
    let randomnumber1 = Math.floor(Math.random()*6 + 1)
let randomnumber2 = Math.floor(Math.random()*6 + 1)

let imagesource1 = "images/dice"+randomnumber1+".png"
let imagesource2 = "images/dice"+randomnumber2+".png"

document.querySelectorAll("img")[0].setAttribute("src",imagesource1)
document.querySelectorAll("img")[1].setAttribute("src",imagesource2)

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!"
}

else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!"
}
else{
    document.querySelector("h1").innerHTML = "Draw!!"
}
}