/**
 * @module config/environments
 * @author Broxel Innovation Dev
 * @desc App enviroments configurations file
 */

module.exports = {

  local: { 
    API_URL: 'http://localhost',
    API_PORT: '1342'
  },

  development: {
    API_URL: 'https://stark-caverns-33268.herokuapp.com',
    API_PORT: '1337'
  },

  staging: {
    API_URL: 'http://localhost',
    API_PORT: '1342'
  },

  production: {
    API_URL: 'http://localhost',
    API_PORT: '1342'
  }

};