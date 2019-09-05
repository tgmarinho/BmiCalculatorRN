import React from 'react';
import { View } from 'react-native';

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

export default function Results({ navigation }) {
  return (
    <>
      <Container>
        <LabelResult>Your Result</LabelResult>

        <CardResult>
          <TextNomal>NORMAL</TextNomal>
          <TextNumber>23.1</TextNumber>
          <TextBMI>Normal BMI range:</TextBMI>

          <DescriptionResult>
            You have a normal body weight. Good job!
          </DescriptionResult>
        </CardResult>
      </Container>
      <Button onPress={() => navigation.navigate('Main')}>
        <ButtonLabel>RE-CALCULATE</ButtonLabel>
      </Button>
    </>
  );
}
