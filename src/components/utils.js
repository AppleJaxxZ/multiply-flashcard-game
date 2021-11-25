

const randoMatic = (setEx, setWhy) => {
    const x = Math.floor(Math.random() * 11);
    const y = Math.floor(Math.random() * 11);
    return setEx(x) * setWhy(y);
  }

module.exports = {randoMatic};