import Interpretation from './EnumBMI';

class CalculeBMI {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
    this.calc = 0;
  }

  calcule() {
    this.calc = (this.weight / (this.height / 100) ** 2).toFixed(2);
    return { calc: this.calc };
  }

  analyze() {
    let interpretion = null;
    if (this.calc >= 25) {
      interpretion = Interpretation.OVERWEIGHT;
    } else if (this.calc >= 18) {
      interpretion = Interpretation.NORMAL;
    } else {
      interpretion = Interpretation.UNDERWEIGHT;
    }

    return {
      description: interpretion.getDescription(),
      diagnostic: interpretion.getDiagnostic(),
    };
  }

  showResult() {
    return { ...this.calcule(), ...this.analyze() };
  }
}

export default CalculeBMI;
