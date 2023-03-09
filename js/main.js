const colors =  ["green", "red", "rgba(133, 122, 200 )", "#f15025"]

const color = document.querySelector('.color');
const btn = document.querySelector('.btn');
btn.addEventListener("click", () => {
const randomnumber = getRandomNumber()
document.body.style.backgroundColor = colors[randomnumber]
})
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}