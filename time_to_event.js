let divCounterTo = document.createElement('div')
divCounterTo.classList.add('counterTo')
divContainer.append(divCounterTo)

let dateTo = prompt('Укажите дату события (в формате гггг.м.д.):', '')

function counterTo() {
  let appointedDate = new Date(dateTo)
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

  divCounterTo.textContent = `До события осталось: ${displayDays} дн. ${displayHours} : ${displayMinutes} : ${displaySeconds}`

  setTimeout(counterTo, 1000)
}

counterTo()