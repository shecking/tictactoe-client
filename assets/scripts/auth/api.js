'use strict'

const config = require('./../config')
const store = require('./../store')
// const html = require('./../../../index.html')

const signUpTTT = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signInTTT = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePasswordTTT = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOutTTT = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newGameTTT = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const resetGameTTT = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const xMoveTTT = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': $(event.target).data('cellIndex'), // what position did they move to
          // using data attributes and value/over properties
          // see Game Actions doc
          'value': 'x' // who made the move
        },
        'over': false // is the game over
      }
    },
    success: function (data) {
      console.log(data)
    }
  })
}

const oMoveTTT = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': $(event.target).data('cellIndex'), // what position did they move to
          // using data attributes and value/over properties
          // see Game Actions doc
          'value': 'o' // who made the move
        },
        'over': false // is the game over
      }
    },
    success: function (data) {
      console.log(data)
    }
  })
}

const getBoardTTT = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      console.log(data)
    }
  })
}

const fullGameTTT = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': $(event.target).data('cellIndex'), // what position did they move to
          // using data attributes and value/over properties
          // see Game Actions doc
          'value': 'x' // who made the move
        },
        'over': true
      }
    },
    success: function (data) {
      console.log(data)
    }
  })
}

module.exports = {
  signUpTTT,
  signInTTT,
  changePasswordTTT,
  signOutTTT,
  newGameTTT,
  resetGameTTT,
  xMoveTTT,
  oMoveTTT,
  getBoardTTT,
  fullGameTTT
}
