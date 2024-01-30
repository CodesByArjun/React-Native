import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        { "id": 1, "firstName": "Terry", "lastName": "Medhurst", "status": "active", "image": "https://robohash.org/hicveldicta.png" },
        { "id": 2, "firstName": "Sheldon", "lastName": "Quigley", "maidenName": "Cole", "age": 28, "status": "offline", "email": "hbingley1@plala.or.jp", "phone": "+7 813 117 7139", "username": "hbingley1", "password": "CQutx25i8r", "birthDate": "2003-08-02", "image": "https://robohash.org/doloremquesintcorrupti.png", "bloodGroup": "O+", "height": 187, "weight": 74, "eyeColor": "Brown", "hair": { "color": "Blond", "type": "Curly" }, "domain": "51.la", "ip": "253.240.20.181", "address": { "address": "6007 Applegate Lane", "city": "Louisville", "coordinates": { "lat": 38.1343013, "lng": -85.6498512 }, "postalCode": "40219", "state": "KY" }, "macAddress": "13:F1:00:DA:A4:12", "university": "Stavropol State Technical University", "bank": { "cardExpire": "10/23", "cardNumber": "5355920631952404", "cardType": "mastercard", "currency": "Ruble", "iban": "MD63 L6YC 8YH4 QVQB XHIK MTML" }, "company": { "address": { "address": "8821 West Myrtle Avenue", "city": "Glendale", "coordinates": { "lat": 33.5404296, "lng": -112.2488391 }, "postalCode": "85305", "state": "AZ" }, "department": "Services", "name": "Aufderhar-Cronin", "title": "Senior Cost Accountant" }, "ein": "52-5262907", "ssn": "447-08-9217", "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30" },
        { "id": 3, "firstName": "Terrill", "lastName": "Hills", "maidenName": "Hoeger", "age": 38, "status": "5 mins ago", "email": "rshawe2@51.la", "phone": "+63 739 292 7942", "username": "rshawe2", "password": "OWsTbMUgFc", "birthDate": "1992-12-30", "image": "https://robohash.org/consequunturautconsequatur.png", "bloodGroup": "A−", "height": 200, "weight": 105.3, "eyeColor": "Gray", "hair": { "color": "Blond", "type": "Very curly" }, "domain": "earthlink.net", "ip": "205.226.160.3", "address": { "address": "560 Penstock Drive", "city": "Grass Valley", "coordinates": { "lat": 39.213076, "lng": -121.077583 }, "postalCode": "95945", "state": "CA" }, "macAddress": "F2:88:58:64:F7:76", "university": "University of Cagayan Valley", "bank": { "cardExpire": "10/23", "cardNumber": "3586082982526703", "cardType": "jcb", "currency": "Peso", "iban": "AT24 1095 9625 1434 9703" }, "company": { "address": { "address": "18 Densmore Drive", "city": "Essex", "coordinates": { "lat": 44.492953, "lng": -73.101883 }, "postalCode": "05452", "state": "VT" }, "department": "Marketing", "name": "Lindgren LLC", "title": "Mechanical Systems Engineer" }, "ein": "48-3951994", "ssn": "633-89-1926", "userAgent": "Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0" }
    ]
    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contacts.map(({ id, firstName, status, image }) => (
                    <View key={id} style={styles.userCard}>
                        <Image source={{ uri: image }} style={styles.userImage} />
                        <View>
                            <Text style={styles.userName}>{firstName}</Text>
                            <Text style={styles.userStatus}>{status}</Text>

                        </View>

                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 14
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14

    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000'
    },
    userStatus: {
        fontSize: 12,

    }

})