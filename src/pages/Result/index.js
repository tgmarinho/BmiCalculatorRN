import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  LabelResult,
  CardResult,
  TextNomal,
  TextNumber,
  TextBMI,
  DescriptionResult,
} from './styles';
import i18n from '../../i18n';

import {Button, ButtonLabel} from '../../components/styles';

export default function Result({navigation}) {
  const result = navigation.getParam('result');
  const data = navigation.getParam('data');
  return (
    <>
      <Container>
        <LabelResult>{i18n.t('result.title')}</LabelResult>

        <CardResult>
          <TextNomal>{result.diagnostic}</TextNomal>
          <TextNumber>{result.calc}</TextNumber>
          {/* <TextBMI>{i18n.t('result.bmi')}</TextBMI> */}
          <DescriptionResult>{result.description}</DescriptionResult>
        </CardResult>
      </Container>
      <Button onPress={() => navigation.navigate('Main', {data})}>
        <ButtonLabel>{i18n.t('result.button')}</ButtonLabel>
      </Button>
    </>
  );
}

Result.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
