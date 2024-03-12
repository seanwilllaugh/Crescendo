import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { theme } from '../theme';

export default function ExerciseRecorder() {

    //const { key } = route.params;

    return (
        <View style={styles.recordingTool}>
            <Text style={styles.recordingText}> Recording </Text>
            <View style={styles.recordingButton}>
                <Text style={color='#FFFFFF'}>Start</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    recordingTool: {
        width: 150,
        height: 75,
        borderRadius: 20,
        backgroundColor: theme.colors.secondary,
        borderWidth: 2,
        borderColor: theme.colors.accent,
        
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    recordingText: {
        fontSize: 16,
        fontFamily: 'JosefinSans-Bold',
        color: '#FFFFFF',
    },
    recordingButton: {
        width: 60,
        height: 25,
        borderRadius: 10,
        backgroundColor: 'green',

        alignItems: 'center',
        justifyContent: 'center',
    },
})