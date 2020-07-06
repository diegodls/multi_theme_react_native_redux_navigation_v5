import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';

import { useNavigation, useTheme } from '@react-navigation/native';
import IconFeather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/combinedReducers';

//REDUX IMPORTS
import { DARK, LIGHT, BLUE, PINK } from '../redux/themeReducer/themeTypes';

//MY IMPORTS
import ImageScalable from './ImageScalable';
import { selectPostImage } from '../assets/OBJ/posts';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

IconFeather.loadFont();

interface ItemProps {
    id: number,
    image: number,
    description: string,
    likes: number,
    author: number
}

//MY CONST
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SCREEN_WIDTH_95 = (SCREEN_WIDTH * 95) / 100;

const Card = (item: ItemProps) => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const { currentThemeName } = useSelector((state: RootState) => { return state.themeReducer });

    function handlerNavigationDetail() {
        //navigation.navigate('Detail', {...item})
    }

    return (
        <TouchableWithoutFeedback onPress={handlerNavigationDetail} 
        style={[styles.mainContainer, {
            backgroundColor: colors.background_primary,
            shadowColor: colors.shadowColor_primary,
        }]}>


                <ImageScalable source={selectPostImage(item.image)} width={SCREEN_WIDTH_95} />

                <View style={[styles.textContainer, {
                    backgroundColor: colors.background_secondary,
                }]}>

                    <View style={styles.description}>
                        <Text
                            numberOfLines={1}
                            style={{
                                color: colors.font_primary
                            }}
                        >{item.description}</Text>
                    </View>

                    <View style={styles.readMore}>
                        <Text
                            numberOfLines={1}
                            style={{
                                color: colors.font_primary
                            }}>Leia Mais</Text>
                    </View>

                </View>

        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        overflow: 'hidden',
        width: SCREEN_WIDTH_95,
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,        
        elevation: 6,
    },
    textContainer: {
        flex: 1,
        width: SCREEN_WIDTH_95,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden',

    },
    description: {
        flex: 1,
    },
    readMore: {},
})

export default Card;