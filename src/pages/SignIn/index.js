import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Header, Button, Gap } from '../../components';

const SignIn = () => {
    return (
        <View style={styles.page}>
            <Header title='Sign in' subTitle='Kita maju bersama'/>
            <View style={styles.container}>
                <TextInput label='Email Address' placeholder='Alamat email'/>
                <Gap height={16} />
                <TextInput label='Password' placeholder='Password'/>
                <Gap height={24} />
                <Button text="Sign In"/>
                <Gap height={12} />
                <Button text="Sign Up" color="#8D92A3" textColor="white"/>
            </View>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    container : {
        backgroundColor:'white',
        paddingHorizontal:24,
        paddingVertical:26,
        marginTop:24,
        flex:1
    },
    page : {
        flex:1
    }
});
