import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Header, Button, Gap, Select } from '../../components';


const SignUpAddress = (navigation) => {
    return (
        <View style={styles.page}>
        <Header title="Address" subTitle="Alamat kamu" onBack={() => {}}/>
        <View style={styles.container}>
            <TextInput label='Phone Number' placeholder='Phone Number'/>
            <Gap height={16} />
            <TextInput label='Addresss' placeholder='Alamat'/>
            <Gap height={16} />
            <TextInput label='House No' placeholder='Nomor Rumah'/>
            <Gap height={16} />
            <Select />
            <Gap height={16} />
            <Button text="Sign Up Now"/>
            <Gap height={24} />
        </View>
    </View>
    )
}

export default SignUpAddress

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
