import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from '@react-native-community/slider';
import {
  Container,
  TitleApp,
  WrapperCard,
  WrapperButton,
  Row,
  Label,
  GenderIcon,
  ContainerHeight,
  Number,
  HeightContainer,
  HeightSize,
  CircleButton,
  CircleIcon,
  RowIcons,
} from './styles';

import { Button, ButtonLabel } from '../../components/styles';

import CalculeBMI from '../../core/CalculeBMI';

export default function Main({ navigation }) {
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState(164);
  const [weight, setWeight] = useState(60);
  const [age, setAge] = useState(25);

  const handleCalculate = async () => {
    const result = new CalculeBMI(height, weight).showResult();
    navigation.navigate('Result', { result });
  };

  const handleAge = operation => {
    if (operation === 'minus') {
      setAge(age - 1);
    }
    if (operation === 'plus') {
      setAge(age + 1);
    }
  };

  const handleWeight = (operation = 'plus') => {
    if (operation === 'minus') {
      setWeight(weight - 1);
    }
    if (operation === 'plus') {
      setWeight(weight + 1);
    }
  };

  return (
    <>
      <Container>
        <TitleApp>BMI CALCULATOR</TitleApp>
        <Row>
          <WrapperButton
            active={gender === 'male'}
            onPress={() => setGender('male')}
          >
            <GenderIcon name="gender-male" />
            <Label>MALE</Label>
          </WrapperButton>
          <WrapperButton
            active={gender === 'female'}
            onPress={() => setGender('female')}
          >
            <GenderIcon name="gender-female" />
            <Label>FEMALE</Label>
          </WrapperButton>
        </Row>

        <ContainerHeight>
          <Label>HEIGHT</Label>
          <HeightContainer>
            <Number>{height}</Number>
            <HeightSize>cm</HeightSize>
          </HeightContainer>
          <Slider
            style={{ width: 300, height: 40 }}
            value={height}
            onValueChange={value => setHeight(value)}
            step={1}
            minimumValue={0}
            maximumValue={230}
            minimumTrackTintColor="#B1546F"
            maximumTrackTintColor="#999"
            thumbTintColor="#B1546F"
          />
        </ContainerHeight>
        <Row>
          <WrapperCard>
            <Label>WEIGHT</Label>
            <Number>{weight}</Number>
            <RowIcons>
              <CircleButton
                disabled={weight === 0}
                onPress={() => handleWeight('minus')}
              >
                <CircleIcon name="minus" />
              </CircleButton>
              <CircleButton onPress={() => handleWeight('plus')}>
                <CircleIcon name="plus" />
              </CircleButton>
            </RowIcons>
          </WrapperCard>
          <WrapperCard>
            <Label>AGE</Label>
            <Number>{age}</Number>
            <RowIcons>
              <CircleButton
                disabled={age === 0}
                onPress={() => handleAge('minus')}
              >
                <CircleIcon name="minus" />
              </CircleButton>
              <CircleButton onPress={() => handleAge('plus')}>
                <CircleIcon name="plus" />
              </CircleButton>
            </RowIcons>
          </WrapperCard>
        </Row>
      </Container>
      <Button onPress={handleCalculate}>
        <ButtonLabel>CALCULATE</ButtonLabel>
      </Button>
    </>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
