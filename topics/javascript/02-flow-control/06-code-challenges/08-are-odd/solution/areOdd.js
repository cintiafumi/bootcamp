const areOdd = (n, m) => {
  if (n % 2 === 0 && m % 2 === 0) {
    return true;
  }

  return false;
};

module.exports = areOdd;
