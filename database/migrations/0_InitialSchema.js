'use strict'

const Schema = use('Schema')

class InitialSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('nickname', 255).notNullable()
      table.string('username', 255).notNullable().unique()
      table.string('email', 255).notNullable().unique()
      table.string('password', 255).notNullable()
      table.timestamps()
    })

    this.create('linked_social_accounts', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.string('provider_name', 255)
      table.string('provider_id', 255).unique()
      table.timestamps()

      table
        .foreign('user_id').references('users.id')
        .onDelete('CASCADE').onUpdate('CASCADE')
    })

    this.create('tokens', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.string('token', 255).notNullable().unique()
      table.string('type', 80).notNullable()
      table.boolean('is_revoked').defaultTo(false)
      table.timestamps()

      table.index('token')

      table
        .foreign('user_id').references('users.id')
        .onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('tokens')
    this.drop('linked_social_accounts')
    this.drop('users')
  }
}

module.exports = InitialSchema
