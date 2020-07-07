import React from 'react';
import {
    SafeAreaView,
    View,
    Image,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { useTheme, useRoute, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/combinedReducers';

//REDUX IMPORTS
import { DARK, LIGHT, BLUE, PINK } from '../redux/themeReducer/themeTypes';

//MY IMPORTS
import { selectPostImage } from '../assets/OBJ/posts';
import { ICON_SIZE } from './SecondScreen'

//INTERFACES
interface ItemProps {
    id: number,
    image: number,
    description: string,
    likes: number,
    author: number
}

const Detail = () => {


    //CONST STUFF
    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params as ItemProps;

    //REDUX STUFF
    const { colors } = useTheme();
    const { currentThemeName } = useSelector((state: RootState) => { return state.themeReducer });

    //FUNCTIONS
    function handlerNavigationGoBack() { navigation.goBack() }

    return (
        <>
            <StatusBar
                barStyle={currentThemeName !== DARK ? 'dark-content' : 'light-content'}
                backgroundColor={colors.background_primary} />

            <SafeAreaView style={[styles.mainContainer, {
                backgroundColor: colors.background_primary
            }]}>
                <ScrollView
                    style={styles.scrollviewContainer}
                >

                    <View style={styles.imgContainer}>

                        <Image
                            source={selectPostImage(routeParams.image)}
                            style={styles.img}
                        />
                        <View style={styles.iconAbsolute}>
                            <TouchableWithoutFeedback style={styles.iconGoback} onPress={handlerNavigationGoBack}>
                                <IconFeather name={'arrow-left-circle'} size={ICON_SIZE} color={colors.font_primary} />
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <View style={styles.likeContainer}>
                            <IconFeather name={'heart'} size={20} color={colors.font_primary} />
                            <Text style={{
                                fontWeight: 'bold',
                                color: colors.font_primary,
                                paddingLeft: 5,
                            }}>{routeParams.likes}</Text>
                        </View>
                        <Text style={{ color: colors.font_primary, }}>{routeParams.description}</Text>
                        <Text style={{ color: colors.font_primary, }}>{routeParams.description}</Text>
                        <Text style={{ color: colors.font_primary, }}>{routeParams.description}</Text>
                        <Text style={{ color: colors.font_primary, }}>{routeParams.description}</Text>
                        <Text style={{ color: colors.font_primary, }}>{routeParams.description}</Text>
                        <Text style={{ color: colors.font_primary, }}>{routeParams.description}</Text>

                    </View>
                </ScrollView>

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',

    },
    iconAbsolute: {
        position: 'absolute',
        top: 10,
        left: 10,
        right: 0,
        bottom: 0,
    },
    iconGoback: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        zIndex: 999,

    },
    scrollviewContainer: {
        width: '100%',
        height: '100%',

    },
    innerContainer: {
        flex: 1,
        padding: 10,
    },
    imgContainer: {
        flex: 1,
        width: '100%',
        height: 800,
    },
    img: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
        position: 'relative',
    },
    descriptionContainer: {
        width: '100%',
        padding: 10,

    },
    likeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
    },
})

export default Detail;