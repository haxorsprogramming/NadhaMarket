import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({title, subTitle}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    title : {
        fontSize:22
    },
    subTitle : {
        fontSize:14
    },
    container : {
        backgroundColor:'white',
        paddingHorizontal:24,
        paddingTop:30,
        paddingBottom:24
    }
});
