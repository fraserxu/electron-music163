var h = require('virtual-dom/h')
var main = require('main-loop')
var ud = require('ud')

var render = ud.defn(module, function render (state) {
  return h('div', [
    h('h1', 'Music163 menubar player')
  ])
})

var loop = ud.defonce(module, function () {
  var loop = main({ n: 0 }, render, require('virtual-dom'))
  document.querySelector('#content').appendChild(loop.target)
  return loop
})

loop.update(loop.state)
