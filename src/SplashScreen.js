import React, { useEffect } from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('DrawerNavigate');
        }, 500);
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.logo}
                source={require('../assets/images/falcon.jpg')}
                resizeMode="center"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffff",
    },
    logo: {
        flex: 1.7,
        alignSelf: 'stretch',
        height: "100%"
    },
});

export default SplashScreen;
