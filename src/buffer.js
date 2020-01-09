function json() {
  return {
    buffer: [],
    next(data) {
      this.buffer.push(data);

      try {
        let json = JSON.parse(Buffer.concat(this.buffer).toString('utf8'));
        let json = JSON.parse(this.buffer.join(''));
        this.reset();
        return json;

      } catch (error) {
        return false;
      }
    },
    reset() {
      this.buffer.length = 0;
    },
  };
}

module.exports = {
  json,
};
