import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'





type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;


export default function Home({ navigation }: HomeProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.smalltext}>Home Screen</Text>
            <Button
                title='Go to Details'
                onPress={() => navigation.navigate("Details", { productId: "86" })}
            // onPress={()=>{navigation.navigate("Details")}}
            // onPress={() => navigation.push("Details", { productId: "80" })}
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    smalltext: {
        color: '#000000'
    }

})