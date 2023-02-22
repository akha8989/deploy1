

import React, { useState } from 'react';
import {
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';

const FirstPage = ({ navigation }) => {
    /*const [userName, setUserName] = useState('AboutReact');*/

    const [percentGas8, setPercentGas8] = useState('')
    const addThemTogether8 = () => setTotal8(+percentGas8 * 5)
    const [total8, setTotal8] = useState('')



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <Text style={styles.textStyle}>
                    Please insert your name to pass it to second screen
                </Text>
                {/*Input to get the value from the user*/}

                <View style={styles.InputcontainerGas}>
                    <Text> นำ้แก๊ส รวม5kg :  {total8}   KG</Text>
                    <TextInput
                        placeholder="%Gas"
                        value={percentGas8}
                        onChangeText={Number => setPercentGas8(Number)}
                        style={styles.inputGas}
                        clearButtonMode='always' />
                </View>




                {/* On click of the button we will send the data as a Json
          From here to the Second Screen using navigation */}
                <Button
                    title="Go Next"
                    //Button Title
                    onPress={() =>
                        navigation.navigate('SecondPage', {
                            paramKey: total8,
                        })
                    }
                />
            </View>
            <Text style={{ textAlign: 'center', color: 'grey' }}>
                www.aboutreact.com
            </Text>
        </SafeAreaView>
    );
};

export default FirstPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
    inputStyle: {
        width: '80%',
        height: 44,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#DBDBD6',
    },




    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,

    },

    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
    },

    buttonGas: {
        backgroundColor: '#0782F9',
        width: '30%',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 2,
    },
    buttonTextGas: {
        color: 'white',
        fontWeight: '700',
        fontSize: 15,
    },


    buttonOut: {
        backgroundColor: '#0788F9',
        width: '50%',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,

    },
    buttonTextOut: {
        color: 'white',
        fontWeight: '700',
        fontSize: '16',
    },

    inputGas: {
        backgroundColor: '#33E0FF',
        paddingHorizontal: 60,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,

    },
    InputcontainerGas: {
        width: '50%'
    },



});

