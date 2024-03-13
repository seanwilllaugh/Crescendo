import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { theme } from '../theme';

export default function KeyTransposer() {

    //const { key } = route.params;

    return (
        <View style={styles.transpositionTool}>
            <View style={styles.transpositionColumn}>
                <Text style={styles.transpositionText2}> Key </Text>
                <Text style={styles.transpositionText}>C</Text>
            </View>

            <View style={styles.transpositionButton}></View>
            <View style={styles.transpositionButton}></View>
        </View>
    );

}

const styles = StyleSheet.create({
    transpositionTool: {
        width: 150,
        height: 75,
        borderRadius: 20,
        backgroundColor: theme.colors.secondary,
        borderWidth: 2,
        borderColor: theme.colors.accent,

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    transpositionColumn: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    transpositionText: {
        fontSize: 32,
        fontFamily: 'JosefinSans-Bold',
        color: '#FFFFFF',
    },
    transpositionText2: {
        fontSize: 16,
        fontFamily: 'JosefinSans-Bold',
        color: '#FFFFFF',
    },
    transpositionButton: {
        width: 35,
        height: 35,
        borderRadius: 10,
        backgroundColor: theme.colors.primary
    },
})