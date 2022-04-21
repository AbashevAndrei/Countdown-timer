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