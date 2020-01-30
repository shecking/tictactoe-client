'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const onSignUpTTT = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUpTTT(data)
    .then(ui.onSignUpSuccessTTT)
    .catch(ui.onSignUpFailureTTT)
}

const onSignInTTT = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signInTTT(data)
    .then(ui.onSignInSuccessTTT)
    .catch(ui.onSignInFailureTTT)
}

const onChangePasswordTTT = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePasswordTTT(data)
    .then(ui.onChangePasswordSuccessTTT)
    .catch(ui.onChangePasswordFailureTTT)
}

const onSignOutTTT = function (event) {
  event.preventDefault()
  api.signOutTTT()
  // no form or data OR .signOut parameters
    .then(ui.onSignOutSuccessTTT)
    .catch(ui.onSignOutFailureTTT)
}

const onNewGameTTT = function (event) {
  $('#gameBoard').show()
  const form = event.target
  const data = getFormFields(form)
  api.NewGameTTT(data)
    .then()
    .catch()
}

const onGameMoveTTT = function (event) {
  // console.log('click')
  const form = event.target
  const data = getFormFields(form)
  api.GameMoveTTT(data)
    .then()
    .catch()
}

module.exports = {
  onSignUpTTT,
  onSignInTTT,
  onChangePasswordTTT,
  onSignOutTTT,
  onNewGameTTT,
  onGameMoveTTT
}
