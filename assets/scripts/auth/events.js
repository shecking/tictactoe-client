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
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.newGameTTT(data)
    .then(ui.onNewGameStartTTT)
    .catch(ui.onNewGameFailTTT)
}
let turnCount = 0
const onGameMoveTTT = function (event) {
  const form = event.target
  const data = getFormFields(form)
  if (turnCount % 2 !== 1) {
    $(event.target).children('.x-move').show()
    turnCount = turnCount + 1
    console.log(turnCount)
  } else {
    $(event.target).children('.o-move').show()
    turnCount = turnCount + 1
    console.log(turnCount)
  }
  // api.endGame(data)
  // .then(ui.onEndGameTTT)
}

const onResetGameTTT = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.newGameTTT(data)
    .then(ui.onNewGameStartTTT)
    .catch(ui.onNewGameFailTTT)
}

module.exports = {
  onSignUpTTT,
  onSignInTTT,
  onChangePasswordTTT,
  onSignOutTTT,
  onNewGameTTT,
  onGameMoveTTT,
  onResetGameTTT
}
