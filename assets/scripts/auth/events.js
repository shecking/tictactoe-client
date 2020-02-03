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
  const form = event.target
  const data = getFormFields(form)
  api.newGameTTT(data)
    .then(ui.onNewGameStartTTT)
    .catch(ui.onNewGameFailTTT)
}

let turnCount = 1
let gameCount = 0
const onGameMoveTTT = function (event) {
  api.getBoardTTT()
  if (gameCount === -1) {
    console.log('NOPE')
  } else {
    if ((turnCount % 2 !== 0) && (turnCount < 9)) {
      $(event.target).children('.x-move').show()
      turnCount = turnCount + 1
      api.xMoveTTT()
      // if (win conditions)
      // else continue game
        .then(ui.onXMoveTTT)
    } else if ((turnCount % 2 !== 1) && (turnCount < 9)) {
    // catch invalid move here
      $(event.target).children('.o-move').show()
      turnCount = turnCount + 1
      api.oMoveTTT()
      // if (win conditions)
      // else continue game
        .then(ui.onOMoveTTT)
    } else if (turnCount === 9) {
      $(event.target).children('.x-move').show()
      gameCount = gameCount + 1
      api.fullGameTTT()
        .then(ui.onFullGameTTT)
    }
  }
}

const onResetGameTTT = function (event) {
  const form = event.target
  const data = getFormFields(form)
  turnCount = 1
  api.resetGameTTT(data)
    .then(ui.onResetGameSuccessTTT)
    .catch(ui.onResetGameFailTTT)
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
