import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Header, Button, Gap } from '../../components';

const SignUp = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Sign Up" subTitle="Daftarkan diri kamu" onBack={() => {}}/>
            <View style={styles.container}>
                <View style={styles.photoGit}>
                    <View style={styles.photoContainer}>
                        <Text style={styles.addPhoto}>Add Photo</Text>
                    </View>
                </View>
                <TextInput label='Full Name' placeholder='Full Name'/>
                <Gap height={16} />
                <TextInput label='Email Address' placeholder='Alamat email'/>
                <Gap height={16} />
                <TextInput label='Password' placeholder='Password'/>
                <Gap height={24} />
                <Button text="Continue" onPress={() => navigation.navigate('SignUpAddress')}/>
                <Gap height={24} />
            </View>
        </View>
    )
}

export default SignUp

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
    },
    addPhoto : {
        fontSize:14,
        color : '#8D92A3',
        textAlign:'center'
    },
    photoContainer : {
        width:90,
        height:90,
        backgroundColor:'#F0F0F0',
        padding:24,
        borderRadius:90,
        textAlign:'center'
    },
    photoGit : {
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
        borderWidth:1,
        borderColor:'#8D92A3',
        borderStyle:'dashed',
        borderRadius:110,
        width:110,
        height:100,
        justifyContent:'center',
    }
})
