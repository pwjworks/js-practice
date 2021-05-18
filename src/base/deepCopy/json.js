const a = {
  age: 1,
  jobs: {
    first: 'FE'
  }
}
const b = JSON.parse(JSON.stringify(a))
// const b = JSON.parse(JSON.stringify(a))
a.jobs.first = 'native'
console.log(b.jobs.first)