import elements from './elements.js'

export default function () {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const bgAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true'
  )
  const bgAudioNature = new Audio('./sounds/Floresta.wav')

  const bgAudioRain = new Audio('./sounds/Chuva.wav')
  const bgAudioCoffee = new Audio('./sounds/Cafeteria.wav')
  const bgAudioFire = new Audio('./sounds/Lareira.wav')

  bgAudioNature.loop = true
  bgAudioRain.loop = true
  bgAudioCoffee.loop = true
  bgAudioFire.loop = true
  bgAudioNature.volume = 0.5
  bgAudioRain.volume = 0.5
  bgAudioCoffee.volume = 0.5
  bgAudioFire.volume = 1

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  let isPlay = true

  function forestPlay() {
    if (isPlay) {
      isPlay = false
      bgAudioNature.play()
      bgAudioNature.classList.remove('hide')
    } else {
      isPlay = true
      bgAudioNature.pause()

      bgAudioNature.classList.add('hide')
    }
  }

  function rainPlay() {
    if (isPlay) {
      isPlay = false
      bgAudioRain.play().add('press')

      bgAudioRain.classList.remove('hide')
    } else {
      isPlay = true
      bgAudioRain.pause()

      bgAudioRain.classList.add('hide')
    }
  }

  function firePlay() {
    if (isPlay) {
      isPlay = false
      bgAudioFire.play()
      bgAudioFire.classList.remove('hide')
    } else {
      isPlay = true
      bgAudioFire.pause()
      bgAudioFire.classList.add('hide')
    }
  }

  function coffeePlay() {
    if (isPlay) {
      isPlay = false
      bgAudioCoffee.play()
      bgAudioCoffee.classList.remove('hide')
    } else {
      isPlay = true
      bgAudioCoffee.pause()
      bgAudioCoffee.classList.add('hide')
    }
  }

  return {
    bgAudio,
    timeEnd,
    pressButton,

    firePlay,
    coffeePlay,
    forestPlay,
    rainPlay,

    timeEnd,
    bgAudioNature,
    bgAudioRain,
    bgAudioCoffee,
    bgAudioFire
  }
}
