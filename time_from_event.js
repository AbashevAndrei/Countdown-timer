let divClock = document.querySelector('.clock')
let divCounterFrom = document.createElement('div')
divCounterFrom.classList.add('counterFrom')
divClock.after(divCounterFrom)

let dateFrom = prompt('Укажите важную дату (в формате гггг-м-д час:мин):', '')

// Отображение времени, прошедшего с указанной даты
function timeFromEvent() {
  let appointedDate = new Date(dateFrom)
  // Получаем таймстамп текущего времени (количество миллисекунд, прошедших с 1 января 1970 года)
  let now = Date.now()
  // Первый день текущего года
  let startOfCurrentYear = new Date(new Date().getFullYear(), 0, 1)

  // Используем замыкание для расчета количества дней, прошедших с начала года
  function daysPassed() {
    // Находим разницу в миллисекундах, прошедших с 1970 года между двумя датами и приводим результат к дням. Округляем в меньшую сторону, т.к. остаются еще часы, минуты и секунды текущего дня. 86400000 мс это 24 часа.
    return Math.floor((now - startOfCurrentYear) / 86400000)
  }

  // Находим разницу между датами в миллисекундах
  let timeDifferenceInMilliseconds = now - appointedDate
  // Количество секунд (неполная минута)
  let displaySeconds = Math.floor((timeDifferenceInMilliseconds / 1000) % 60)
  // Количество минут (неполный час)
  let displayMinutes = Math.floor(
    (timeDifferenceInMilliseconds / 1000 / 60) % 60
  )
  // Количество часов (неполные сутки)
  let displayHours = new Date().getHours()
  let displayDays = 0
  // Количество дней (неполный месяц)
  if (
    Math.floor(timeDifferenceInMilliseconds / 1000 / 60 / 60 / 24 / 365) > 0
  ) {
    displayDays = daysPassed()
  } else {
    displayDays = Math.floor(timeDifferenceInMilliseconds / 1000 / 60 / 60 / 24)
  }
  // Количество прошедших лет
  let displayYears = Math.floor(
    timeDifferenceInMilliseconds / 1000 / 60 / 60 / 24 / 365
  )

  displaySeconds < 10 ? (displaySeconds = '0' + displaySeconds) : displaySeconds
  displayMinutes < 10 ? (displayMinutes = '0' + displayMinutes) : displayMinutes
  displayHours < 10 ? (displayHours = '0' + displayHours) : displayHours

  divCounterFrom.textContent = `С указанной даты прошло: ${
    displayYears == 0
      ? ''
      : displayYears == 1
      ? displayYears + ' г.'
      : displayYears == 2
      ? displayYears + ' г.'
      : displayYears == 3
      ? displayYears + ' г.'
      : displayYears == 4
      ? displayYears + ' г.'
      : displayYears + ' л.'
  }
  ${displayDays} дн. ${displayHours} : ${displayMinutes} : ${displaySeconds}`

  setTimeout(timeFromEvent, 1000)
}

timeFromEvent()
