import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    FlatList,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';

import { useNavigation, useTheme } from '@react-navigation/native';
import IconFeather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/combinedReducers';

//REDUX IMPORTS
import { DARK, LIGHT, BLUE, PINK } from '../redux/themeReducer/themeTypes';

//MY IMPORTS
import { generatePosts, selectPostImage } from '../assets/OBJ/posts'
import Card from '../components/Card';

IconFeather.loadFont();


// MY CONST

const ICON_SIZE = 40;

const SecondScreen = () => {

    //REDUX STUFF
    const navigation = useNavigation();
    const { colors } = useTheme();
    const { currentThemeName } = useSelector((state: RootState) => { return state.themeReducer });

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
                <TouchableWithoutFeedback style={styles.iconGoback} onPress={handlerNavigationGoBack}>
                    <IconFeather name={'arrow-left-circle'} size={ICON_SIZE} color={colors.font_primary} />
                </TouchableWithoutFeedback>

                <FlatList
                    style={{ flex: 1, width: '100%' }}
                    contentContainerStyle={{ alignItems: 'center' }}
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
    iconGoback: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        zIndex: 999,

    },
})

export default SecondScreen;