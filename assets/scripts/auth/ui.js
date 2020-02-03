'use strict'

const store = require('./../store')

const onSignUpSuccessTTT = function (response) {
  $('#status-message').text(response.user.email + ' signed up successfully. Welcome to TicTacToe!')
  $('#sign-up').trigger('reset')
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#change-password').show()
  $('#sign-out').show()
  $('#newGame').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onSignUpFailureTTT = function (response) {
  $('#status-message').text('Error: sign up failed. Please try again.')
  $('#sign-up').trigger('reset')
  $('#status-message').removeClass()
  $('#status-message').addClass('failure-message')
}

const onSignInSuccessTTT = function (response) {
  store.user = response.user
  $('#status-message').text(response.user.email + ' signed in to TicTacToe.')
  $('#sign-in').trigger('reset')
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#game-message').show()
  $('#game-message').addClass('move-message')
  $('#game-message').text('Press Start game to play!')
  $('#change-password').show()
  $('#sign-out').show()
  $('#newGame').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onSignInFailureTTT = function (response) {
  $('#status-message').text('Error: sign in failed. Please try again.')
  $('#sign-in').trigger('reset')
  $('#status-message').removeClass()
  $('#status-message').addClass('failure-message')
}

const onChangePasswordSuccessTTT = function (response) {
  $('#status-message').text('Password changed successfully!')
  $('#change-password').trigger('reset')
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
}

const onChangePasswordFailureTTT = function (response) {
  $('#status-message').text('Error: password not changed. Please try again.')
  $('#change-password').trigger('reset')
  $('#status-message').removeClass()
  $('#status-message').addClass('failure-message')
}

const onSignOutSuccessTTT = function (response) {
  $('#status-message').text('User signed out of TicTacToe. Come back soon!')
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
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
  $('#status-message').text('Error: user not signed out. Please try again.')
  $('#status-message').removeClass()
  $('#status-message').addClass('failure-message')
}

const onNewGameStartTTT = function (response) {
  store.game = response.game
  $('#status-message').text('User started a new game.')
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#game-message').show()
  $('#game-message').text('X, it is your move.')
  $('#game-message').removeClass()
  $('#game-message').addClass('move-message')
  $('#newGame').hide()
  $('#resetGame').show()
  $('#gameBoard').show()
  $('.x-move').hide()
  $('.o-move').hide()
}

const onNewGameFailTTT = function (response) {
  $('#status-message').removeClass()
  $('#status-message').addClass('failure-message')
  $('#status-message').text('Error: could not start a new game. Please try again.')
}

const onResetGameSuccessTTT = function () {
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#status-message').show()
  $('#game-message').show()
  $('#status-message').text('User reset the game.')
  $('#game-message').text('X, it is your move.')
  $('.x-move').hide()
  $('.o-move').hide()
}

const onResetGameFailTTT = function () {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('Unable to reset the game.')
}

const onXMoveTTT = function () {
  $('#status-message').hide()
  $('#game-message').removeClass()
  $('#game-message').addClass('move-message')
  $('#game-message').text('O, it is your move.')
}

const onOMoveTTT = function () {
  $('#status-message').hide()
  $('#game-message').removeClass()
  $('#game-message').addClass('move-message')
  $('#game-message').text('X, it is your move.')
}

const onInvalidMoveTTT = function () {
  $('#game-message').removeClass()
  $('#game-message').addClass('failure-message')
  $('#game-message').text('You cannot move there. Please try a different move.')
}

const onFullGameTTT = function () {
  $('#status-message').text('Game is over.')
  $('#status-message').show()
  $('#game-message').text('Player X/O has won!')
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
