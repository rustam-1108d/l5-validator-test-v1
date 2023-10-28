export default class NumberSchema {
  validators = [(value) => typeof value === 'number'];

  isValid(value) {
    const isTrue = (validator) => validator(value) === true;
    return this.validators.every(isTrue);
  }

  even() {
    const validator = (number) => number % 2 === 0;
    this.validators.push(validator);
    return this;
  }

  odd() {
    const validator = (number) => number % 2 !== 0;
    this.validators.push(validator);
    return this;
  }
}
