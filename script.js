// Первый день текущего года
let startOfCurrentYear = new Date(new Date().getFullYear(), 0, 1)
// Получаем таймстамп текущего времени (количество миллисекунд, прошедших с 1 января 1970 года)
let now = Date.now()



// Расчет количества дней, прошедших с начала года
function daysPassed(now, startOfCurrentYear) {
  // Находим разницу в миллисекундах, прошедших с 1970 года между двумя датами и приводим результат к дням. Округляем в меньшую сторону, т.к. остаются еще часы, минуты и секунды текущего дня. 86400000 мс это 24 часа.
  return Math.floor((now - startOfCurrentYear) / 86400000)
}

let dateFrom = prompt('Укажите важную дату:', '')

// Отображение времени, прошедшего с указанной даты
function timeFromEvent() {
  
  let appointedDate = new Date(dateFrom)
  // let appointedDate = new Date(1977, 0, 15)
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

/* function counterTo() {
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
 */