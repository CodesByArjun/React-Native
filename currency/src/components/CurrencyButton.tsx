import React from 'react'
import type { PropsWithChildren } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flagStyle}>{props.flag}</Text>
            <Text style={styles.counttyStyle}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },

    flagStyle: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },

    counttyStyle: {
        fontSize: 14,
        color: "#2d3436",
        marginBottom: 4
    }

})

export default CurrencyButton;