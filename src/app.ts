import express from 'express'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
  }
}
