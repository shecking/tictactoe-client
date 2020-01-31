'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#newGame').hide()
  $('#resetGame').hide()
  $('#gameBoard').hide()
  $('.x-move').hide()
  $('.o-move').hide()
  $('#newGame').on('click', authEvents.onNewGameTTT)
  $('#resetGame').on('click', authEvents.onResetGameTTT)
  $('.square').on('click', authEvents.onGameMoveTTT)
  $('#sign-up').on('submit', authEvents.onSignUpTTT)
  $('#sign-in').on('submit', authEvents.onSignInTTT)
  $('#change-password').on('submit', authEvents.onChangePasswordTTT)
  $('#sign-out').on('click', authEvents.onSignOutTTT)
})
