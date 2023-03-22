export class ValidatorService {
  static min(value, min) {
    if (value.length < min) {
      return `Veuillez taper au moins ${min} caractères`;
    }
  }

  static max(value, max) {
    if (value.length > max) {
      return `Veuillez taper au plus ${max} caractères`;
    }
  }
}
