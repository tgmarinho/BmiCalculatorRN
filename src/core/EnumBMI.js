import {Enum} from 'enumify';

import i18n from '../i18n';

class Interpretation extends Enum {}

Interpretation.initEnum({
  OVERWEIGHT: {
    getDiagnostic() {
      return i18n.t('enumbmi.overweight.diagnostic');
    },
    getDescription() {
      return i18n.t('enumbmi.overweight.description');
    },
  },
  NORMAL: {
    getDiagnostic() {
      return i18n.t('enumbmi.normal.diagnostic');
    },
    getDescription() {
      return i18n.t('enumbmi.normal.description');
    },
  },
  UNDERWEIGHT: {
    getDiagnostic() {
      return i18n.t('enumbmi.underweight.diagnostic');
    },
    getDescription() {
      return i18n.t('enumbmi.underweight.description');
    },
  },
});

export default Interpretation;
