let nowDate = new Date()

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentMonth = months[nowDate.getMonth()]
let currentDay = nowDate.getDate()
let currentfullYear = nowDate.getFullYear()



let currentDate = document.querySelector("#currentDate")







let dateString = `&copy; ${currentMonth} ${currentDay}, ${currentfullYear} Steve Franz`
currentDate.innerHTML = dateString