'use strict'

const store = require('./../store')

const onSignUpSuccessTTT = function (response) {
  $('#message').text(response.user.email + ' signed up successfully. Welcome to TicTacToe!')
  $('#sign-up').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#change-password').show()
  $('#sign-out').show()
  $('#newGame').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onSignUpFailureTTT = function (response) {
  $('#message').text('Error: sign up failed. Please try again.')
  $('#sign-up').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('failure-message')
}

const onSignInSuccessTTT = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' signed in to TicTacToe.')
  $('#sign-in').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#change-password').show()
  $('#sign-out').show()
  $('#newGame').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onSignInFailureTTT = function (response) {
  $('#message').text('Error: sign in failed. Please try again.')
  $('#sign-in').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('failure-message')
}

const onChangePasswordSuccessTTT = function (response) {
  $('#message').text('Password changed successfully!')
  $('#change-password').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}

const onChangePasswordFailureTTT = function (response) {
  $('#message').text('Error: password not changed. Please try again.')
  $('#change-password').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('failure-message')
}

const onSignOutSuccessTTT = function (response) {
  $('#message').text('User signed out of TicTacToe. Come back soon!')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#message2').hide()
  $('#gameBoard').hide()
  $('.x-move').hide()
  $('.o-move').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#newGame').hide()
  $('#resetGame').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  store.user = null
}

const onSignOutFailureTTT = function (response) {
  $('#message').text('Error: user not signed out. Please try again.')
  $('#message').removeClass()
  $('#message').addClass('failure-message')
}

const onNewGameStartTTT = function (response) {
  store.game = response.game
  $('#message').text('User started a new game.')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#message2').text('X, it is your move.')
  $('#message2').removeClass()
  $('#message2').addClass('move-message')
  $('#newGame').hide()
  $('#resetGame').show()
  $('#gameBoard').show()
  $('.x-move').hide()
  $('.o-move').hide()
}

const onNewGameFailTTT = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('Error: could not start a new game. Please try again.')
}

const onResetGameSuccessTTT = function () {
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#message').show()
  $('#message2').show()
  $('#message').text('User reset the game.')
  $('message2').text('X, it is your move.')
  $('.x-move').hide()
  $('.o-move').hide()
}

const onResetGameFailTTT = function () {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('Unable to reset the game.')
}

const onXMoveTTT = function () {
  $('#message').hide()
  $('#message2').removeClass()
  $('#message2').addClass('move-message')
  $('#message2').text('O, it is your move.')
}

const onOMoveTTT = function () {
  $('#message').hide()
  $('#message2').removeClass()
  $('#message2').addClass('move-message')
  $('#message2').text('X, it is your move.')
}

const onInvalidMoveTTT = function () {
  $('message2').removeClass()
  $('message2').addClass('failure-message')
  $('message2').text('You cannot move there. Please choose a different move.')
}

const onFullGameTTT = function () {
  $('#message').text('Game is over.')
  $('#message').show()
  $('#message2').text('Player X/O has won!')
}

module.exports = {
  onSignUpSuccessTTT,
  onSignUpFailureTTT,
  onSignInSuccessTTT,
  onSignInFailureTTT,
  onChangePasswordSuccessTTT,
  onChangePasswordFailureTTT,
  onSignOutSuccessTTT,
  onSignOutFailureTTT,
  onNewGameStartTTT,
  onNewGameFailTTT,
  onResetGameSuccessTTT,
  onResetGameFailTTT,
  onXMoveTTT,
  onOMoveTTT,
  onInvalidMoveTTT,
  onFullGameTTT
}
