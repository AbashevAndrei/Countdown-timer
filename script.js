// Функция выводит текущее время каждую секунду
function clock() {
  // Получаем текущую дату
  let now = new Date()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()
  let year = now.getFullYear()
  // К номеру прибавляем 1, т.к. нумерация месяцев начинается с 0
  let month = now.getMonth() + 1
  let monthName = now.toLocaleString('ru', { month: 'long' })
  let date = now.getDate()

  // Добавляем ведущие нули для однозначных чисел
  hour < 10 ? (hour = '0' + hour) : hour
  minute < 10 ? (minute = '0' + minute) : minute
  second < 10 ? (second = '0' + second) : second

  // Находим класс counter
  let counter = document.querySelector('.counter')
  // Добавляем в качестве текстового содержимого значение переменной
  counter.textContent = hour + ' : ' + minute + ' : ' + second
  // Вызываем ту же функцию через 1 секунду и получаем тикающие часы
  setTimeout(clock, 1000)
}

clock()
