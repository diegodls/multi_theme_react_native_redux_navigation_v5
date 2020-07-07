import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    FlatList,
    TouchableWithoutFeedback,
    View,
    Text
} from 'react-native';

import { useNavigation, useTheme } from '@react-navigation/native';
import IconFeather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/combinedReducers';

//REDUX IMPORTS
import { DARK, LIGHT, BLUE, PINK } from '../redux/themeReducer/themeTypes';

//MY IMPORTS
import { generatePosts } from '../assets/OBJ/posts';
import Card from '../components/Card';

IconFeather.loadFont();


// MY CONST
export const ICON_SIZE = 40;

const SecondScreen = () => {

    //NAVIGATION STUFF
    const navigation = useNavigation();

    //REDUX STUFF
    const { colors } = useTheme();
    const { currentThemeName } = useSelector((state: RootState) => { return state.themeReducer });
    const { text } = useSelector((state: RootState) => { return state.textReducer });

    //STATE AND DATA
    const data = generatePosts(20);


    //FUNCTIONS
    function handlerNavigationGoBack() { navigation.goBack() }

    return (
        <>
            <StatusBar barStyle={currentThemeName !== DARK ? 'dark-content' : 'light-content'} backgroundColor={colors.background_primary} />

            <SafeAreaView style={[styles.mainContainer, {
                backgroundColor: colors.background_primary
            }]}>
                <View style={[styles.header, {
                    backgroundColor: colors.background_primary
                }]}>
                    <TouchableWithoutFeedback style={styles.iconGoback} onPress={handlerNavigationGoBack}>
                        <IconFeather name={'arrow-left-circle'} size={ICON_SIZE} color={colors.font_primary} />
                    </TouchableWithoutFeedback>
                    <Text
                        style={{
                            color: colors.font_primary
                        }}
                    >Olá {text.slice(0,10)}</Text>
                </View>


                <FlatList
                    style={{ flex: 1, width: '100%' }}
                    contentContainerStyle={{ alignItems: 'center', width: '100%' }}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <Card {...item} />
                    )}

                />

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',

    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,

    },
    iconGoback: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        zIndex: 999,

    },
})

export default SecondScreen;