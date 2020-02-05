'use strict'

const store = require('./../store')

const overMessage = 'Game is over.'

const setStatusSuccess = function () {
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#status-message').show()
}
const setStatusFailure = function () {
  $('#status-message').removeClass()
  $('#status-message').addClass('failure-message')
  $('#status-message').show()
}
const setGameplayNormal = function () {
  $('#game-message').removeClass()
  $('#game-message').addClass('move-message')
  $('#game-message').show()
}
const setGameplayFailure = function () {
  $('#game-message').removeClass()
  $('#game-message').addClass('failure-message')
  $('#game-message').show()
}
const resetAllFields = function () {
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-password').trigger('reset')
}
const onceLoggedIn = function () {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#start-game').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#status-message').show()
  $('#game-message').show()
}
const startNewGame = function () {
  $('#status-message').show()
  $('#game-message').show()
  $('#start-game').hide()
  $('#reset-game').show()
  $('#gameBoard').show()
  $('#counter').show()
  $('.x-move').hide()
  $('.o-move').hide()
}

const playerMove = function () {
  $('#status-message').hide()
  $('#game-message').removeClass()
  $('#game-message').addClass('move-message')
}

const playerWin = function () {
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#status-message').text(overMessage)
  $('#status-message').show()
}

const onceLoggedOut = function () {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#start-game').hide()
  $('#reset-game').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#status-message').show()
  $('#game-message').hide()
  $('#gameBoard').hide()
  $('#counter').hide()
  $('.x-move').hide()
  $('.o-move').hide()
}
//
// original function list
// --------------
// UI/callbacks
//
const onSignUpSuccessTTT = function (response) {
  store.user = response.user
  resetAllFields()
  $('#status-message').text(response.user.email + ' signed up successfully. Welcome to TicTacToe!')
  setStatusSuccess()
  $('#game-message').text('Press Start game to play!')
  setGameplayNormal()
  onceLoggedIn()
}

const onSignUpFailureTTT = function (response) {
  resetAllFields()
  $('#status-message').text('Error: sign up failed. Please try again.')
  setStatusFailure()
}

const onSignInSuccessTTT = function (response) {
  store.user = response.user
  resetAllFields()
  $('#status-message').text(response.user.email + ' signed in to TicTacToe.')
  setStatusSuccess()
  $('#game-message').text('Press Start game to play!')
  setGameplayNormal()
  onceLoggedIn()
}

const onSignInFailureTTT = function (response) {
  resetAllFields()
  $('#status-message').text('Error: sign in failed. Please try again.')
  setStatusFailure()
}

const onChangePasswordSuccessTTT = function (response) {
  resetAllFields()
  $('#status-message').text('Password changed successfully!')
  setStatusSuccess()
}

const onChangePasswordFailureTTT = function (response) {
  resetAllFields()
  $('#status-message').text('Error: password not changed. Please try again.')
  setStatusFailure()
}

const onSignOutSuccessTTT = function (response) {
  $('#status-message').text('User signed out of TicTacToe. Come back soon!')
  setStatusSuccess()
  onceLoggedOut()
  store.user = null
}

const onSignOutFailureTTT = function (response) {
  resetAllFields()
  $('#status-message').text('Error: user not signed out. Please try again.')
  setStatusFailure()
}

const onNewGameStartTTT = function (response) {
  store.game = response.game
  startNewGame()
  $('#status-message').text('User started a new game.')
  setStatusSuccess()
  $('#game-message').text('X, it is your move.')
  setGameplayNormal()
}

const onNewGameFailTTT = function (response) {
  $('#status-message').text('Error: could not start a new game. Please try again.')
  setStatusFailure()
}

const onXMoveTTT = function (response) {
  store.game = response.game
  $('#game-message').text('O, it is your move.')
  playerMove()
}

const onOMoveTTT = function (response) {
  store.game = response.game
  $('#game-message').text('X, it is your move.')
  playerMove()
}

const onInvalidMoveTTT = function () {
  $('#status-message').text('You cannot move there.')
  setGameplayFailure()
}

const onXWinTTT = function (response) {
  playerWin()
  $('#game-message').removeClass()
  $('#game-message').addClass('x-win-message')
  $('#game-message').text('X wins!!')
}

const onOWinTTT = function (response) {
  playerWin()
  $('#game-message').removeClass()
  $('#game-message').addClass('o-win-message')
  $('#game-message').text('O wins!!')
}

const onFullGameTTT = function (response) {
  playerWin()
  setGameplayNormal()
  $('#game-message').text('X and O are evenly matched. Tie game!')
}

const totalGamesTTT = function (response) {
  store.games = response.games
  if (response.games.length === 1) {
    $('#counter').text('User has played ' + (response.games).length + ' game.')
  } else {
    $('#counter').text('User has played ' + (response.games).length + ' games.')
  }
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
  onFullGameTTT,
  totalGamesTTT
}
