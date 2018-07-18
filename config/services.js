'use strict'

/*
|--------------------------------------------------------------------------
| Services Configuration
|--------------------------------------------------------------------------
|
| This is general purpose file to define configuration for multiple services.
| The below config is for the ally provider. Make sure to save it inside
| config/services.js file.
|
| Happy Coding :)
|
*/

const Env = use('Env')

module.exports = {
  ally: {
    twitter: {
      clientId: Env.get('TWITTER_CLIENT_ID'),
      clientSecret: Env.get('TWITTER_CLIENT_SECRET'),
      redirectUri: `${Env.get('APP_URL')}/api/auth/twitter/callback`
    }
  }
}
