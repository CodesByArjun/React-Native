import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackPramList } from '../App'
import { PRODUCTS_LIST } from '../constants'
import Seperator from '../components/Seperator'
import ProductItems from '../components/ProductItems'

type HomeProps = NativeStackScreenProps<RootStackPramList, "Home">

const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={PRODUCTS_LIST}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={Seperator}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("Details", { product: item })}>
                        <ProductItems product={item} />
                    </Pressable>
                )}

            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',

        padding: 12,
        backgroundColor: '#FFFFFF',
    },
})