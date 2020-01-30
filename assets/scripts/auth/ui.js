'use strict'

const store = require('./../store')

const onSignUpSuccessTTT = function (response) {
  $('#message').text(response.user.email + ' signed up successfully. Welcome to TicTacToe!')
  $('#sign-up').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#change-password').show()
  $('#sign-out').show()
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
  $('#message').text(response.user.email + ' signed in to TicTacToe.')
  store.user = response.user
  $('#sign-in').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#change-password').show()
  $('#sign-out').show()
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
  $('#message').text(response.user.email + ' signed out of TicTacToe. Come back soon!')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  store.user = null
}

const onSignOutFailure = function (response) {
  $('#message').text('Error: user not signed out. Please try again.')
  $('#message').removeClass()
  $('#message').addClass('failure-message')
}

module.exports = {
  onSignUpSuccessTTT,
  onSignUpFailureTTT,
  onSignInSuccessTTT,
  onSignInFailureTTT,
  onChangePasswordSuccessTTT,
  onChangePasswordFailureTTT,
  onSignOutSuccessTTT,
  onSignOutFailure
}
