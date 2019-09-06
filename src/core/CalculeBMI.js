import Interpretation from './EnumBMI';

class CalculeBMI {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
    this.calc = 0;
  }

  // calcule() {
  //   let description = null;
  //   let diagnostic = null;
  //   let calc = 0;

  //   calc = (this.weight / (this.height / 100) ** 2).toFixed(2);

  //   if (calc >= 25) {
  //     diagnostic = 'Overweight!';
  //     description =
  //       'You have a higher than normal body weight. Try to exercise more.';
  //   } else if (calc >= 18) {
  //     diagnostic = 'Normal';
  //     description = 'You have a normal body weight. Good job!';
  //   } else {
  //     diagnostic = 'Underweight!';
  //     description =
  //       'You have a lower than normal body weight. You can eat a bit more!';
  //   }

  //   return {
  //     calc,
  //     description,
  //     diagnostic,
  //   };
  // }

  calcule() {
    this.calc = (this.weight / (this.height / 100) ** 2).toFixed(2);
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
    this.calcule();
    const analysis = this.analyze();

    return { calc: this.calc, ...analysis };
  }
}

export default CalculeBMI;
