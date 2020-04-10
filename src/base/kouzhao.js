var prices = [2, 2, 3, 1, 5, 2];
var prod = [2, 3, 1, 5, 4, 3];
var use = new Array(6);
use.fill(false);
var n = 9;
var max = 0;
var dfs = function (use, prod, prices, money, num) {
  if (money < 0) {
    return;
  }
  if (money >= 0) {
    max = Math.max(num, max);
  }
  for (let i = 0; i < 6; i++) {
    if (!use[i]) {
      use[i] = true;
      dfs(use, prod, prices, money - prices[i], num + prod[i]);
      use[i] = false;
    }
  }
}
dfs(use, prod, prices, n, 0);
console.log(max);