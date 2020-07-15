'use strict'

const config = require('./../config')
const store = require('./../store')

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

const getBoardTTT = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getTotalGamesTTT = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameMoveTTT = function (xOrO) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': $(event.target).data('cellIndex'),
          // what position did they move to
          // using data attributes and value/over properties
          'value': xOrO
        },
        'over': false
      }
    }
  })
}

const finalMoveTTT = function (xOrO, cellIndex) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': cellIndex, // what position did they move to
          // using data attributes and value/over properties
          'value': xOrO
        },
        'over': true
      }
    }
  })
}

module.exports = {
  signUpTTT,
  signInTTT,
  changePasswordTTT,
  signOutTTT,
  newGameTTT,
  getBoardTTT,
  getTotalGamesTTT,
  gameMoveTTT,
  finalMoveTTT
}
