'use strict'

class AuthController {
  async twitterRedirect ({ ally }) {
    await ally.driver('twitter').redirect()
  }

  async twitterCallback ({ ally }) {
    const user = await ally.driver('twitter').getUser()
    const userInfo = await user.toJSON()
    return userInfo
  }
}

module.exports = AuthController
