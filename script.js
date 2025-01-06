const clock = () => {
	let date = new Date()
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()

	if (hours <= 9) hours = "0" + hours
	if (minutes <= 9) minutes = "0" + minutes
	if (seconds <= 9) seconds = "0" + seconds

	let dataTimeOne = hours + ':' + minutes + ':' + seconds

	let elementOne = document.getElementById('time').innerHTML = dataTimeOne

	setTimeout(() => {
		clock()
	}, 1000)
}
clock()

const dateNum = document.getElementById('date_number')
const monthNum = document.getElementById('date_month')
const year = document.getElementById('fullYear')

const today = new Date()

const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

dateNum.innerHTML = today.getDate()
monthNum.innerHTML = month[today.getMonth()]
year.innerHTML = today.getFullYear()