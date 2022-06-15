import Sounds from './sounds.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,

  resetControls,
  minutes
}) {
  let timerTimeOut

  function updateTimerDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function addTimer() {
    minutes = minutes < 60 ? Number(minutes) + 5 : (minutes = 60)

    updateTimerDisplay(minutes, 0)
  }

  function lessTimer() {
    minutes = minutes < 60 ? Number(minutes) - 5 : (minutes = 60)

    if (minutes < 0) {
      alert(` Erro . Minutos menores que cinco!!!`)
      return
    }

    updateTimerDisplay(minutes, 0)
  }

  function reset() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateTimerDisplay(minutes, 0)

      if (isFinished) {
        resetControls()
        updateTimerDisplay()
        Sounds().timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60

        --minutes
      }

      updateTimerDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    reset,
    updateTimerDisplay,
    addTimer,
    lessTimer,
    hold
  }
}
