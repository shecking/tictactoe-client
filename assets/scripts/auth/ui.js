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
  $('#gameBoard').hide()
  $('.x-move').hide()
  $('.o-move').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
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
  $('#message').addClass('move-message')
  $('#message').text('User reset the game.')
}

const onResetGameFailTTT = function () {
  $('#message').removeClass()
  $('#message').addClass('move-message')
  $('#message').text('Unable to reset the game.')
}

const onXMoveTTT = function () {
  event.preventDefault()
  $('#message').removeClass()
  $('#message').addClass('move-message')
  $('#message').text('O, it is your move.')
}

const onOMoveTTT = function () {
  event.preventDefault()
  $('#message').removeClass()
  $('#message').addClass('move-message')
  $('#message').text('X, it is your move.')
}

const onEndGameTTT = function () {
  event.preventDefault()
  $('#message').removeClass()
  $('#message').addClass('end-game-message')
  $('#message').text('Game is over')
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
  onEndGameTTT
}
