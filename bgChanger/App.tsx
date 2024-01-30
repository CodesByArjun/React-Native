import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App(): JSX.Element {
  const [randombackground, setrandombackground] = useState('#ffffff');
  const generateRandomBackground = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setrandombackground(color);

  }
  return (
    <>
      <StatusBar backgroundColor={randombackground} />
      <View style={[styles.container, { backgroundColor: randombackground }]}>
        <TouchableOpacity>
          <View style={styles.actionbtn}>
            <Text style={styles.actionbtntxt} onPress={generateRandomBackground}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionbtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionbtntxt: {
    fontSize: 24,
    color: "#FFFFFF",
  }
})