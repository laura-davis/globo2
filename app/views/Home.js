import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header} from '../sections/Header';
import {Hero} from '../sections/Hero';
import {Menu} from '../sections/Menu';

export class Home extends React.Component {
    render() {
        return(
            <View style ={styles.container}>
                <Header message = 'Press to Log In'/>
                <Hero/>
                <Menu/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})