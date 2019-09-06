import { Enum } from 'enumify';

class Interpretation extends Enum {}

Interpretation.initEnum({
  OVERWEIGHT: {
    getDiagnostic() {
      return 'OVERWEIGHT!';
    },
    getDescription() {
      return 'You have a higher than normal body weight. Try to exercise more.';
    },
  },
  NORMAL: {
    getDiagnostic() {
      return 'NORMAL!';
    },
    getDescription() {
      return 'You have a normal body weight. Good job!';
    },
  },
  UNDERWEIGHT: {
    getDiagnostic() {
      return 'UNDERWEIGHT!';
    },
    getDescription() {
      return 'You have a lower than normal body weight. You can eat a bit more!';
    },
  },
});

export default Interpretation;
