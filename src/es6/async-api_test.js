function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve('hello'), ms);
  })
}

async function asyncPrint(value,ms) {
  const pro=await timeout(ms)
  console.log(pro)
  console.log(value)
}

asyncPrint('hello world',1000)

class Sleep {
  constructor(timeout) {
    this.timeout = timeout;
  }
  then(resolve, reject) {
    const startTime = Date.now();
    setTimeout(
      () => resolve(Date.now() - startTime),
      this.timeout
    );
  }
}

(async () => {
  const sleepTime = await new Sleep(1000);
  console.log(sleepTime);
})();