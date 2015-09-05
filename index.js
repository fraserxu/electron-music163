var BrowserWindow = require('browser-window')
var globalShortcut = require('global-shortcut')
var Menu = require('menu')
var path = require('path')

var menubar = require('menubar')
var mb = menubar({
  icon: path.resolve(__dirname, '/app/IconTemplate.png'),
  dir: path.join(__dirname, '/app'),
  preloadWindow: true,
  width: 400,
  height: 500,
  resizable: false
})

mb.on('ready', function () {
  console.log('app is ready')
})
