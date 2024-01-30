import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { PropsWithChildren } from 'react'
import DiceOne from '../assets/dice-six-faces-one.png'
import DiceTwo from '../assets/dice-six-faces-two.png'
import DiceThree from '../assets/dice-six-faces-three.png'
import DiceFour from '../assets/dice-six-faces-four.png'
import DiceFive from '../assets/dice-six-faces-five.png'
import DiceSix from '../assets/dice-six-faces-six.png'


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}


export default function App() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const rollDice = () => {
    let diceNumber = Math.floor(Math.random() * 6) + 1;
    switch (diceNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        break;
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.diceContainer}>
        <Dice imageUrl={diceImage} />
      </View>
      <View>
        <TouchableOpacity onPress={rollDice}>
          <Text style={styles.rollDiceBtnText}>Roll</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#000000',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})