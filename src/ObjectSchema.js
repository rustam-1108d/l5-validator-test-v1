export default class ObjectSchema {
  shape(fields) {
    this.fields = fields;
    return this;
  }

  isValid(object) {
    const keys = Object.keys(object);
    if (keys.length !== Object.keys(this.fields).length) {
      return false;
    }

    const validations = keys.map((key) => this.fields[key].isValid(object[key]));
    return !validations.includes(false);
  }
}
