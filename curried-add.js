function curriedAdd(total) {
  let sum = total ? total : 0;
  if (Number.isInteger(total)) return function(add) {
    if (!add) return sum;
    sum += add;
    return curriedAdd(sum);
  }
  return sum;
}

module.exports = { curriedAdd };