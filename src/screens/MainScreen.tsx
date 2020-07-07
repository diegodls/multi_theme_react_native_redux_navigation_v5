import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    Keyboard,
    Alert,
} from 'react-native';

import IconFeather from 'react-native-vector-icons/Feather';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

//Redux things
import { changeThemeLight, changeThemeDark, changeThemeBlue, changeThemePink } from '../redux/themeReducer/themeActions';
import { changeText } from '../redux/textReducer/textActions';
import { RootState } from '../redux/combinedReducers';
import { DARK, LIGHT, BLUE, PINK } from '../redux/themeReducer/themeTypes';
import { blueTheme, darkTheme, lightTheme, pinkTheme } from '../themes/themes';

IconFeather.loadFont();

const MainScreen = () => {

    //NAVIGATION STUFF
    const navigation = useNavigation();
    const { colors } = useTheme();

    //REDUX STUFF
    const dispatch = useDispatch();
    const { currentThemeName } = useSelector((state: RootState) => { return state.themeReducer });
    const { text } = useSelector((state: RootState) => { return state.textReducer });

    //STATE AND DATAS
    const [name, setName] = useState<string>('');


    //FUNCTIONS
    function changeThemeToBlue() { dispatch(changeThemeBlue()); }
    function changeThemeToDark() { dispatch(changeThemeDark()); }
    function changeThemeToLight() { dispatch(changeThemeLight()); }
    function changeThemeToPink() { dispatch(changeThemePink()); }

    function handleNavigation() {
        if (name !== '') {
            dispatch(changeText(name));
            Keyboard.dismiss();
            navigation.navigate('SecondScreen');
        } else{
            Alert.alert('Oooopssss...', 'Digite um nome primeiro!')
        }

    }


    return (
        <>
            <StatusBar barStyle={currentThemeName !== DARK ? 'dark-content' : 'light-content'} backgroundColor={colors.background_primary} />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.keyboardContainer} >
                <View style={[styles.mainContainer, {
                    backgroundColor: colors.background_primary,
                }]}>

                    <View style={styles.titleContainer}>
                        <Text style={[styles.textBig, { color: colors.font_primary, }]}>Multiplos Temas</Text>
                        <Text style={[styles.textMiddle, { color: colors.font_primary, }]}>Com redux e navigation v.5</Text>
                    </View>

                    <View style={styles.contentContainer}>
                        <View style={styles.imgContainer}>
                            <Image
                                source={require('../assets/imgs/logo.png')}
                                style={styles.imgLogo}
                            />
                        </View>

                        <View style={[styles.buttonContainer]}>
                            <RectButton
                                style={[styles.buttonOption, {
                                    backgroundColor: lightTheme.colors.primary,
                                    borderColor: lightTheme.colors.secondary,
                                }]}
                                onPress={changeThemeToLight}>
                                {currentThemeName === LIGHT ? (
                                    <IconFeather
                                        name={'check'}
                                        size={25}
                                        color={colors.secondary} />
                                ) :
                                    (<View />)
                                }
                            </RectButton>

                            <RectButton
                                style={[styles.buttonOption, {
                                    backgroundColor: darkTheme.colors.primary,
                                    borderColor: darkTheme.colors.secondary,
                                }]}
                                onPress={changeThemeToDark}>
                                {currentThemeName === DARK ? (
                                    <IconFeather
                                        name={'check'}
                                        size={25}
                                        color={colors.secondary} />
                                ) :
                                    (<View />)
                                }
                            </RectButton>

                            <RectButton
                                style={[styles.buttonOption, {
                                    backgroundColor: pinkTheme.colors.primary,
                                    borderColor: pinkTheme.colors.secondary,
                                }]}
                                onPress={changeThemeToPink}>
                                {currentThemeName === PINK ? (
                                    <IconFeather
                                        name={'check'}
                                        size={25}
                                        color={colors.secondary} />
                                ) :
                                    (<View />)
                                }
                            </RectButton>

                            <RectButton
                                style={[styles.buttonOption, {
                                    backgroundColor: blueTheme.colors.primary,
                                    borderColor: blueTheme.colors.secondary,
                                }]}
                                onPress={changeThemeToBlue}>
                                {currentThemeName === BLUE ? (
                                    <IconFeather
                                        name={'check'}
                                        size={25}
                                        color={colors.secondary} />
                                ) :
                                    (<View />)
                                }
                            </RectButton>
                        </View>

                        <View style={[styles.inputContainer, {
                            borderColor: colors.button_primary,
                        }]}>
                            <TextInput
                                style={[styles.inputText, {
                                    color: colors.font_primary,
                                    backgroundColor: colors.background_primary,
                                }]}
                                placeholderTextColor={colors.font_primary}
                                placeholder={'Digite o seu nome...'}
                                value={name}
                                onChangeText={setName}
                            />
                            <RectButton
                                style={[{ backgroundColor: colors.button_primary }]}
                                onPress={handleNavigation}>
                                <View style={styles.inputIconContainer}>
                                    <IconFeather
                                        name={'arrow-right'}
                                        size={40}
                                        color={'#F5F5F5'} />
                                </View>
                            </RectButton>
                        </View>
                    </View>

                    <View style={styles.footerContainer}>
                        <Text style={[styles.textSmall, { color: colors.font_primary }]}>
                            Redux é utilizado para armazenar e compartilhar o estado da aplicação entre as telas, mas pode ser usado em conjunto com o react-navigation para trocar o tema globalmente.{"\n"}Selecione um esquema de cor acima, digite seu nome e vá para a galeria exemplo para ver os temas sendo usado globalmente.</Text>
                    </View>

                </View>

            </KeyboardAvoidingView >
        </>
    )
}


const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-around',
    },
    titleContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    textBig: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    textMiddle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textSmall: {
        fontSize: 12,
    },
    imgContainer: {
        width: '60%',
        height: '60%',
        overflow: 'hidden',
    },
    imgLogo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    buttonOption: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
    },
    inputContainer: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 2,
        overflow: 'hidden',
    },
    inputText: {
        flex: 1,
        fontSize: 16,
        padding: 10,
    },
    inputIconContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
});

export default MainScreen;