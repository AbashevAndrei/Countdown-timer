// Добавим в начало блока с классом container Dom-узел
let divContainer = document.querySelector('.container')
let currentTime = document.createElement('div')
currentTime.classList.add('clock')
divContainer.prepend(currentTime)

// Отображение на странице текущего времени, которое меняется каждую секунду
function addClock() {
  let hour = new Date().getHours()
  let minute = new Date().getMinutes()
  let second = new Date().getSeconds()
  let date = new Date().getDate()
  let year = new Date().getFullYear()

  // Просклоняем названия месяцев для верного сочетания с датой
  let monthNamesForDate = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]

  let monthName = monthNamesForDate[new Date().getMonth()]

  // Добавим ведущие нули для однозначных чисел
  hour < 10 ? (hour = '0' + hour) : hour
  minute < 10 ? (minute = '0' + minute) : minute
  second < 10 ? (second = '0' + second) : second

  // Добавляем текстовое содержимое на страницу в блок с классом clock
  currentTime.textContent =
    'Сегодня: ' +
    date +
    ' ' +
    monthName +
    ' ' +
    year +
    ' года.' +
    ' Время: ' +
    hour +
    ' : ' +
    minute +
    ' : ' +
    second +
    '.'

  // Вызываем функцию clock через 1 секунду и получаем тикающие часы
  setTimeout(addClock, 1000)
}

addClock()
