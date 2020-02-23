function json() {
  return {
    buffer: [],

    next(data) {
      this.buffer.push(data);

      try {
        let json = JSON.parse(Buffer.concat(this.buffer).toString('utf8'));
        this.reset();
        return json;
      } catch (error) {
        return false;
      }
    },

    reset() {
      this.buffer.length = 0;
    }

  };
}

export default {
  json
};