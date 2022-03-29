let number=10
let numberEl=document.getElementById("number")
let lengthEl=document.getElementById("length")
let massEl=document.getElementById("mass")
let volumeEl=document.getElementById("volume")
function convert(){
    text=document.querySelector("#number").value
    number=Number(text)
    lengthEl.innerText=`${number} meters=${(number*(3.28084)).toFixed(3)} feet| ${number} feet=${(number*(0.3048000097536)).toFixed(3)} meters`
    massEl.innerText=`${number} kilos=${(number*(2.20462)).toFixed(3)} pounds| ${number} pounds=${(number*(0.453592)).toFixed(3)} kilos`
    numberEl.innerText=number
    volumeEl.innerText=`${number} liters=${(number*(0.264172)).toFixed(3)} gallons| ${number} gallons=${(number*(3.785)).toFixed(3)} liters`
}
