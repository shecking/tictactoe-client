'use strict'

// const events = require('./events.js')
// grab gameCount from this
const store = require('./../store')

const onSignUpSuccessTTT = function (response) {
  $('#status-message').text(response.user.email + ' signed up successfully. Welcome to TicTacToe!')
  $('#sign-up').trigger('reset')
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#change-password').show()
  $('#sign-out').show()
  $('#new-game').show()
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
  $('#start-game').show()
  $('#change-password').show()
  $('#sign-out').show()
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
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#status-message').show()
  $('#status-message').text('User signed out of TicTacToe. Come back soon!')
  $('#game-message').hide()
  $('#gameBoard').hide()
  $('.x-move').hide()
  $('.o-move').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#start-game').hide()
  $('#reset-game').hide()
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
  $('#start-game').hide()
  $('#reset-game').show()
  $('#gameBoard').show()
  $('#gameBoard').prop('enabled', true)
  $('.x-move').hide()
  $('.o-move').hide()
}

const onNewGameFailTTT = function (response) {
  $('#status-message').removeClass()
  $('#status-message').addClass('failure-message')
  $('#status-message').text('Error: could not start a new game. Please try again.')
}

const onXMoveTTT = function (response) {
  store.game = response.game
  $('#status-message').hide()
  $('#game-message').removeClass()
  $('#game-message').addClass('move-message')
  $('#game-message').text('O, it is your move.')
}

const onXWinTTT = function (response) {
  store.game = response.game
  $('#game-message').removeClass()
  $('#game-message').addClass('x-win-message')
  $('#game-message').text('X wins!!')
  $('#gameBoard').prop('disabled', true)
}

const onOMoveTTT = function (response) {
  store.game = response.game
  $('#status-message').hide()
  $('#game-message').removeClass()
  $('#game-message').addClass('move-message')
  $('#game-message').text('X, it is your move.')
}

const onOWinTTT = function (response) {
  store.game = response.game
  $('#game-message').removeClass()
  $('#game-message').addClass('o-win-message')
  $('#game-message').text('O wins!!')
  $('#gameBoard').prop('disabled', true)
}

const onInvalidMoveTTT = function () {
  $('#game-message').removeClass()
  $('#game-message').addClass('failure-message')
  $('#game-message').text('You cannot move there. Please try a different move.')
}

const onFullGameTTT = function (response) {
  $('#status-message').text('Game is over.')
  $('#status-message').show()
  $('#game-message').text('X and O are evenly matched. Tie game!')
  $('#gameBoard').prop('disabled', true)
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
  onXMoveTTT,
  onXWinTTT,
  onOMoveTTT,
  onOWinTTT,
  onInvalidMoveTTT,
  onFullGameTTT
}
