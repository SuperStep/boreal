'use strict';

let knexfile = require('knexfile');
let knex = require('knex')('master');

/**
 * Conexão com o Banco de Dados
 * @type {[type]}
 */
module.exports = knex;