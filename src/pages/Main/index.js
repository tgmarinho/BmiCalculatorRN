import React, { useState, useEffect, useRef } from 'react';
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
import useInterval from '../../customHooks/useInterval';

export default function Main({ navigation }) {
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState(164);
  const [weight, setWeight] = useState(60);
  const [opereation, setOperation] = useState('');
  const [age, setAge] = useState(25);
  const [delayAge, setDelayAge] = useState(null);
  const [delayWeight, setDelayWeight] = useState(null);

  useInterval(() => {
    if (opereation === 'minus') {
      setWeight(weight - 1);
    } else {
      setWeight(weight + 1);
    }
  }, delayWeight);

  useInterval(() => {
    if (opereation === 'minus') {
      setAge(age - 1);
    } else {
      setAge(age + 1);
    }
  }, delayAge);

  function stopCount() {
    setDelayAge(null);
    setDelayWeight(null);
  }

  const handleWeight = operation => {
    setDelayWeight(100);
    if (operation === 'minus') {
      setOperation(operation);
    }
    if (operation === 'plus') {
      setOperation(operation);
    }
  };

  const handleAge = operation => {
    setDelayAge(100);
    if (operation === 'minus') {
      setOperation(operation);
    }
    if (operation === 'plus') {
      setOperation(operation);
    }
  };

  const handleCalculate = () => {
    const result = new CalculeBMI(height, weight).showResult();
    navigation.navigate('Result', { result });
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
                onPress={() => setWeight(weight - 1)}
                onPressIn={() => handleWeight('minus')}
                onPressOut={stopCount}
              >
                <CircleIcon name="minus" />
              </CircleButton>
              <CircleButton
                onPress={() => setWeight(weight + 1)}
                onPressIn={() => handleWeight('plus')}
                onPressOut={stopCount}
              >
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
                onPress={() => setAge(age - 1)}
                onPressIn={() => handleAge('minus')}
                onPressOut={stopCount}
              >
                <CircleIcon name="minus" />
              </CircleButton>
              <CircleButton
                onPress={() => setAge(age + 1)}
                onPressIn={() => handleAge('plus')}
                onPressOut={stopCount}
              >
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
