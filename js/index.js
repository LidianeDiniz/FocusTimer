import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import elements from './elements.js'

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('click', function () {
  $html.classList.toggle('dark-mode')
})

const dark = document.querySelector('.dark')
const light = document.querySelector('.light')

const volForest = document.querySelector('#forest')
const volRain = document.querySelector('#rain')
const volcoffee = document.querySelector('#coffee')
const volfire = document.querySelector('#fire')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonMoreTime = document.querySelector('.moreTime')
const buttonLessTime = document.querySelector('.lessTime')

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

const sound = Sound()

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,

  resetControls: controls.reset,
  minutes
})

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
  sound.pressButton()
})

volForest.addEventListener('input', () => {
  sound.bgAudioNature.volume = volForest.value
})

volRain.addEventListener('input', () => {
  sound.bgAudioRain.volume = volRain.value
})

volcoffee.addEventListener('input', () => {
  sound.bgAudioCoffee.volume = volcoffee.value
})

volfire.addEventListener('input', () => {
  sound.bgAudioFire.volume = volfire.value
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonMoreTime.addEventListener('click', function () {
  timer.addTimer()
  sound.pressButton()
})

buttonLessTime.addEventListener('click', function () {
  timer.lessTimer()
  sound.pressButton()
})

buttonStop.addEventListener('click', function () {
  controls.reset()
  clearTimeout(timerTimeOut)
})

elements.buttonCardOne.addEventListener('click', function () {
  sound.forestPlay()
})

elements.buttonCardTwo.addEventListener('click', function () {
  sound.rainPlay()
})

elements.buttonCardThree.addEventListener('click', function () {
  sound.coffeePlay()
})

elements.buttonCardFour.addEventListener('click', function () {
  sound.firePlay()
})
