'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onSignUpTTT = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUpTTT(data)
    .then(function (response) {
      return api.signInTTT(data)
    })
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
    .then(ui.onSignOutSuccessTTT)
    .catch(ui.onSignOutFailureTTT)
}

const onNewGameTTT = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  turnCount = 1
  gameOver = false
  api.newGameTTT(data)
    .then((res) => {
      ui.onNewGameStartTTT(res)
      return res
    })
    .then((res) => {
      store.game.id = res.game._id
    })
    .catch(ui.onNewGameFailTTT)
  api.getTotalGamesTTT()
    .then(ui.totalGamesTTT)
}

let turnCount = 1
let gameCount = 0
let gameOver = false
//
const onGameMoveTTT = function (event) {
  const cellIndex = $(event.target).data('cellIndex')
  if ($((event.target).children).css('display') !== 'none' || gameOver === true) {
    api.getBoardTTT()
      .then(ui.onInvalidMoveTTT)
  } else {
    if ((turnCount % 2 !== 0) && (turnCount < 9)) {
      $(event.target).children('.x-move').show()
      turnCount = turnCount + 1
      api.gameMoveTTT('x')
        .then(ui.onXMoveTTT)
        .then(function () {
          const xWinTTT = function () {
            gameCount = gameCount + 1
            gameOver = true
            api.getTotalGamesTTT()
              .then(ui.totalGamesTTT)
            api.finalMoveTTT('x')
              .then(ui.onXWinTTT)
          }
          if ((store.game.cells[0] === 'x') && (store.game.cells[1] === 'x') && (store.game.cells[2] === 'x')) {
            return xWinTTT()
          } else if ((store.game.cells[0] === 'x') && (store.game.cells[3] === 'x') && (store.game.cells[6] === 'x')) {
            return xWinTTT()
          } else if (store.game.cells[0] === 'x' && store.game.cells[4] === 'x' && store.game.cells[8] === 'x') {
            return xWinTTT()
          } else if (store.game.cells[1] === 'x' && store.game.cells[4] === 'x' && store.game.cells[7] === 'x') {
            return xWinTTT()
          } else if (store.game.cells[2] === 'x' && store.game.cells[4] === 'x' && store.game.cells[6] === 'x') {
            return xWinTTT()
          } else if (store.game.cells[2] === 'x' && store.game.cells[5] === 'x' && store.game.cells[8] === 'x') {
            return xWinTTT()
          } else if (store.game.cells[3] === 'x' && store.game.cells[4] === 'x' && store.game.cells[5] === 'x') {
            return xWinTTT()
          } else if (store.game.cells[6] === 'x' && store.game.cells[7] === 'x' && store.game.cells[8] === 'x') {
            return xWinTTT()
          }
        })
      //
    } else if ((turnCount % 2 !== 1) && (turnCount < 9)) {
      $(event.target).children('.o-move').show()
      turnCount = turnCount + 1
      api.gameMoveTTT('o')
        .then(ui.onOMoveTTT)
        .then(function () {
          const oWinTTT = function () {
            gameCount = gameCount + 1
            gameOver = true
            api.getTotalGamesTTT()
              .then(ui.totalGamesTTT)
            api.finalMoveTTT('o', cellIndex)
              .then(ui.onOWinTTT)
          }
          if (store.game.cells[0] === 'o' && store.game.cells[1] === 'o' && store.game.cells[2] === 'o') {
            return oWinTTT()
          } else if (store.game.cells[0] === 'o' && store.game.cells[3] === 'o' && store.game.cells[6] === 'o') {
            return oWinTTT()
          } else if (store.game.cells[0] === 'o' && store.game.cells[4] === 'o' && store.game.cells[8] === 'o') {
            return oWinTTT()
          } else if (store.game.cells[1] === 'o' && store.game.cells[4] === 'o' && store.game.cells[7] === 'o') {
            return oWinTTT()
          } else if (store.game.cells[2] === 'o' && store.game.cells[4] === 'o' && store.game.cells[6] === 'o') {
            return oWinTTT()
          } else if (store.game.cells[2] === 'o' && store.game.cells[5] === 'o' && store.game.cells[8] === 'o') {
            return oWinTTT()
          } else if (store.game.cells[3] === 'o' && store.game.cells[4] === 'o' && store.game.cells[5] === 'o') {
            return oWinTTT()
          } else if (store.game.cells[6] === 'o' && store.game.cells[7] === 'o' && store.game.cells[8] === 'o') {
            return oWinTTT()
          }
        })
        //
    } else if (turnCount === 9) {
      $(event.target).children('.x-move').show()
      gameCount = gameCount + 1
      gameOver = true
      api.getTotalGamesTTT()
        .then(ui.totalGamesTTT)
      api.finalMoveTTT('x', cellIndex)
        .then(ui.onFullGameTTT)
    }
  }
}

module.exports = {
  onSignUpTTT,
  onSignInTTT,
  onChangePasswordTTT,
  onSignOutTTT,
  onNewGameTTT,
  onGameMoveTTT
}
