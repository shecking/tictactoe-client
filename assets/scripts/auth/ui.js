'use strict'

const store = require('./../store')

const overMessage = 'Game is over.'

const onSignUpSuccessTTT = function (response) {
  store.user = response.user
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#status-message').text(response.user.email + ' signed up successfully. Welcome to TicTacToe!')
  $('#sign-up').trigger('reset')
  $('#game-message').show()
  $('#game-message').removeClass()
  $('#game-message').addClass('move-message')
  $('#game-message').text('Press Start game to play!')
  $('#start-game').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onSignUpFailureTTT = function (response) {
  $('#status-message').removeClass()
  $('#status-message').addClass('failure-message')
  $('#status-message').text('Error: sign up failed. Please try again.')
  $('#sign-up').trigger('reset')
}

const onSignInSuccessTTT = function (response) {
  store.user = response.user
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#status-message').text(response.user.email + ' signed in to TicTacToe.')
  $('#sign-in').trigger('reset')
  $('#game-message').show()
  $('#game-message').removeClass()
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
  $('#change-password').trigger('reset')
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#status-message').text('Password changed successfully!')
}

const onChangePasswordFailureTTT = function (response) {
  $('#change-password').trigger('reset')
  $('#status-message').removeClass()
  $('#status-message').addClass('failure-message')
  $('#status-message').text('Error: password not changed. Please try again.')
}

const onSignOutSuccessTTT = function (response) {
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#status-message').show()
  $('#status-message').text('User signed out of TicTacToe. Come back soon!')
  $('#game-message').hide()
  $('#gameBoard').hide()
  $('#counter').hide()
  $('.x-move').hide()
  $('.o-move').hide()
  $('#change-password').hide()
  $('#change-password').trigger('reset')
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
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#status-message').text('User started a new game.')
  $('#game-message').show()
  $('#game-message').removeClass()
  $('#game-message').addClass('move-message')
  $('#game-message').text('X, it is your move.')
  $('#start-game').hide()
  $('#counter').show()
  $('#reset-game').show()
  $('#gameBoard').show()
  $('.x-move').hide()
  $('.o-move').hide()
}

const onNewGameFailTTT = function (response) {
  $('#status-message').removeClass()
  $('#status-message').addClass('failure-message')
  $('#status-message').text('Error: could not start a new game. Please try again.')
  $('#reset-game').show()
  $('#game-message').hide()
}

const onXMoveTTT = function (response) {
  store.game = response.game
  $('#status-message').hide()
  $('#game-message').removeClass()
  $('#game-message').addClass('move-message')
  $('#game-message').text('O, it is your move.')
}

const onOMoveTTT = function (response) {
  store.game = response.game
  $('#status-message').hide()
  $('#game-message').removeClass()
  $('#game-message').addClass('move-message')
  $('#game-message').text('X, it is your move.')
}

const onInvalidMoveTTT = function () {
  $('#status-message').removeClass()
  $('#status-message').addClass('failure-message')
  $('#status-message').show()
  $('#status-message').text('You cannot move there.')
}

const onXWinTTT = function (response) {
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#status-message').text(overMessage)
  $('#status-message').show()
  $('#game-message').removeClass()
  $('#game-message').addClass('x-win-message')
  $('#game-message').text('X wins!!')
}

const onOWinTTT = function (response) {
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#status-message').text(overMessage)
  $('#status-message').show()
  $('#game-message').removeClass()
  $('#game-message').addClass('o-win-message')
  $('#game-message').text('O wins!!')
}

const onFullGameTTT = function (response) {
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('#status-message').text(overMessage)
  $('#status-message').show()
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
