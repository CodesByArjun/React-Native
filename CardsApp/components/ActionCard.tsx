import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openwebsite(website: string) {
        Linking.openURL(website);
    }
    return (

        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>Javascript</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png' }}
                        style={styles.cardImage} />
                </View>
                <View style={styles.descriptonContainer}>
                    <Text numberOfLines={2} style={styles.descriptonText}>JavaScript, often abbreviated as JS,
                        is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openwebsite('https://en.wikipedia.org/wiki/JavaScript')}>

                        <Text style={styles.footerText}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    cardImage: {
        height: 200,
        objectFit: 'fill'


    },
    imageContainer: {},
    descriptonContainer: {
        padding: 10
    },
    descriptonText: {},
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    card: {
        width: 350,
        height: 340,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowOpacity: 0.3
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600'
    },
    footerText: {

    }



})