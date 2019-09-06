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
import { Button, ButtonLabel } from '../../components/styles';

export default function Result({ navigation }) {
  const result = navigation.getParam('result');
  return (
    <>
      <Container>
        <LabelResult>Your Result</LabelResult>

        <CardResult>
          <TextNomal>{result.diagnostic}</TextNomal>
          <TextNumber>{result.calc}</TextNumber>
          <TextBMI>Normal BMI range:</TextBMI>
          <DescriptionResult>{result.description}</DescriptionResult>
        </CardResult>
      </Container>
      <Button onPress={() => navigation.navigate('Main')}>
        <ButtonLabel>RE-CALCULATE</ButtonLabel>
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
