
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")



var sorteio



let x = 1

function handleTryClick(event) {
  event.preventDefault()

  sorteio = Math.round(Math.random() * 10)



  const inputNumbler = document.querySelector("#inputNumber")
  if (Number(inputNumbler.value) == sorteio) {
    toggleScreen()
    document.querySelector(".screen2 h2").innerText = `vc acertou ${x}  tentativas`

  }
  inputNumbler.value = " "
  x++
}

//eventos
function handleResetClick() {
  toggleScreen()
  x = 1
}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    handleResetClick()
  }
})

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}