// Указываем дату события, для которого нужно рассчитать прошедшее время
let appointedDate = new Date(1977, 0, 15)
// Текущая дата
let today = new Date()
// Первый день текущего года
let startOfCurrentYear = new Date(new Date().getFullYear(), 0, 1)
// Получаем таймстамп текущего времени (количество миллисекунд, прошедших с 1 января 1970 года)
let now = Date.now()

/* let year = new Date().getFullYear()
// К номеру прибавляем 1, т.к. нумерация месяцев начинается с 0
let month = new Date().getMonth() + 1
// Название месяца из его номера
let monthName = new Date().toLocaleString('ru', { month: 'long' })
let date = new Date().getDate() */

// Отображение текущего времени каждую секунду
function clock() {
  let hour = new Date().getHours()
  let minute = new Date().getMinutes()
  let second = new Date().getSeconds()

  // Добавляем ведущие нули для однозначных чисел
  hour < 10 ? (hour = '0' + hour) : hour
  minute < 10 ? (minute = '0' + minute) : minute
  second < 10 ? (second = '0' + second) : second

  // Находим класс clock
  let currentTime = document.querySelector('.clock')

  // Добавляем текстовое содержимое
  currentTime.textContent = 'Время: ' + hour + ' : ' + minute + ' : ' + second

  // Вызываем функцию () через 1 секунду и получаем тикающие часы
  setTimeout(clock, 1000)
}

clock()

// Расчет количества дней, прошедших с начала года
function daysPassed(now, startOfCurrentYear) {
  // Находим разницу в миллисекундах, прошедших с 1970 года между двумя датами и приводим результат к дням. Округляем в меньшую сторону, т.к. остаются еще часы, минуты и секунды текущего дня. 86400000 мс это 24 часа.
  return Math.floor((now - startOfCurrentYear) / 86400000)
}

// Отображение времени, прошедшего от указанной даты
function timeFromEvent() {
  let appointedDate = new Date(1977, 0, 15)
  let now = Date.now()

  // Находим разницу между датами в миллисекундах
  let timeDifferenceInMilliseconds = now - appointedDate
  // Количество секунд (неполная минута)
  let displaySeconds = Math.floor((timeDifferenceInMilliseconds / 1000) % 60)
  // Количество минут (неполный час)
  let displayMinutes = Math.floor(
    (timeDifferenceInMilliseconds / 1000 / 60) % 60
  )
  // Количество часов (неполные сутки)
  let displayHours = Math.floor(
    (timeDifferenceInMilliseconds / 1000 / 60 / 60) % 24
  )
  // Количество дней с начала текущего года
  let displayDays = daysPassed(now, startOfCurrentYear)
  // Количество прошедших лет
  let displayYears = Math.floor(
    timeDifferenceInMilliseconds / 1000 / 60 / 60 / 24 / 365
  )

  displaySeconds < 10 ? (displaySeconds = '0' + displaySeconds) : displaySeconds
  displayMinutes < 10 ? (displayMinutes = '0' + displayMinutes) : displayMinutes
  displayHours < 10 ? (displayHours = '0' + displayHours) : displayHours

  let divCounterFrom = document.querySelector('.counterFrom')
  divCounterFrom.textContent = `Со дня рождения прошло: ${displayYears} л. ${displayDays} дн. ${displayHours} : ${displayMinutes} : ${displaySeconds}`

  setTimeout(timeFromEvent, 1000)
}

timeFromEvent()

function counterTo() {
  let appointedDate = new Date(2023, 0, 15)
  let now = Date.now()

  let timeDifferenceInMilliseconds = appointedDate - now
  let displaySeconds = Math.floor((timeDifferenceInMilliseconds / 1000) % 60)
  // Количество минут (неполный час)
  let displayMinutes = Math.floor(
    (timeDifferenceInMilliseconds / 1000 / 60) % 60
  )
  // Количество часов (неполные сутки)
  let displayHours = Math.floor(
    (timeDifferenceInMilliseconds / 1000 / 60 / 60) % 24
  )
  // Количество дней с начала текущего года
  let displayDays = Math.floor(timeDifferenceInMilliseconds / 86400000)

  displaySeconds < 10 ? (displaySeconds = '0' + displaySeconds) : displaySeconds
  displayMinutes < 10 ? (displayMinutes = '0' + displayMinutes) : displayMinutes
  displayHours < 10 ? (displayHours = '0' + displayHours) : displayHours

  let divCounterTo = document.querySelector('.counterTo')
  divCounterTo.textContent = `До события осталось: ${displayDays} дн. ${displayHours} : ${displayMinutes} : ${displaySeconds}`

  setTimeout(counterTo, 1000)
}

counterTo()
