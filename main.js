// const express = require('express')
import express from 'express'
import api from './server/api.js'
import readFile from './server/readFile.js'

const app = express()
const port = 8022

var datas={
  app,
  port,
  lib:{}
}

app.use(express.static('./web/dist/')) // dist 是项目的打包资源
app.use('/api', api)

import { createServer,build } from 'vite'

const server = await createServer({
  // 任何合法的用户配置选项，加上 `mode` 和 `configFile`
  configFile: './vite.config.js',
  root: './web/',
})
server.listen()
async function main(){
  let toDoList = [
    showWelcome,
    ()=>build({
      // 任何合法的用户配置选项，加上 `mode` 和 `configFile`
      configFile: './vite.config.js',
      root: './web/',
    }),
    loadLib
  ]

  for (let index = 0; index < toDoList.length; index++) {
    const element = toDoList[index];
    await element()
  }

  app.listen(port, () => {
    console.log(`服务器已经运行在了 http://localhost:${port}`)
  })
}
main()


async function loadLib() {
  let libs = await readFile.load()
  datas.lib = libs
}


async function showWelcome(){
  let welcome = [
    '==================================',
    'EffiNote 后端服务启动中...',
    '',
  ]

  for (let i = 0;i < welcome.length; i++) {
    console.log(welcome[i])
  }

}


export default datas