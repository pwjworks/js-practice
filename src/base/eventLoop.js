const p = Promise.resolve()
console.log('in outer1')
setTimeout(function a () { //! macro task
  console.log('in timeout')
}, 0)
p.then(function b () { //! micro task
  console.log('in promise')
})
setTimeout(function c () {
  setTimeout(function d () { //! macro in macro
    console.log('in timeout\'s timeout')
  }, 0)
  p.then(function e () { //! micro in macro
    console.log('in timeout\'s promise')
  })
}, 0)
p.then(function f () { //! onResolve
  setTimeout(function g () { //! macro in micro
    console.log('in timeout\'s timeout')
  }, 0)
  p.then(function h () { //! macro in macro
    console.log('in timeout\'s promise')
  })
}, 0)
p.then(function i () {
  console.log('in promise2')
})
setTimeout(function j () {
  console.log('in timout')
}, 0)
console.log('outer2')
