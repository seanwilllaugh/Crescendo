import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { theme } from './theme';

const ExerciseScreen = ({ route }) => {

    const { title } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.titleSection}>
                <Text style={styles.titleText}>Scale Flexbility</Text>
            </View>
            <Image style={styles.exercisePNG} source={require('./exercises/Scale Flexibility.png')}></Image>
            <View style={styles.toolSection}>
                <View style={styles.toolColumn}>
                    <View style={styles.transpositionTool}>
                        <View style={styles.transpositionColumn}>
                            <Text style={styles.transpositionText2}> Key </Text>
                            <Text style={styles.transpositionText}>C</Text>
                        </View>
            
                        <View style={styles.transpositionButton}></View>
                        <View style={styles.transpositionButton}></View>
                    </View>

                    <View style={styles.recordingTool}>
                        <Text style={styles.recordingText}> Recording </Text>
                        <View style={styles.recordingButton}>
                            <Text style={color='#FFFFFF'}>Start</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.toolColumn}>
                    <View style={styles.metronomeTool}>
                        
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background, // You can use your theme's background color
      },

    titleSection: {
        width: 300,
        height: 300,
        borderRadius: 200,
        backgroundColor: theme.colors.background,
        transform: [
            { scaleX: 2 },
            { translateY: -120 }
        ],
        position: 'absolute',
        top: 0,
        zIndex:1,
        borderWidth: 10,
        borderColor: theme.colors.accent,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 32,
        fontFamily: 'JosefinSans-Bold',
        color: '#FFFFFF',
        transform: [
            {scaleX: 0.5},
            {translateY: 50}
        ],
    },
    titleTime: {

    },
    titleButton:{

    },

    exercisePNG: {
        width: 393,
        height: 663,
        position: 'absolute',
        transform: [
            { translateY: -15 }
        ],
        resizeMode: 'contain',  
    },

    toolSection: {
        width: 500,
        height: 230,
        backgroundColor: theme.colors.background,
        borderWidth: 10,
        borderColor: theme.colors.accent,
        zIndex:1,
        bottom: 0,
        position: 'absolute',
        transform: [
            { translateY: 15 }
        ],
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    toolColumn: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
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

    metronomeTool: {
        width: 150,
        height: 165,
        borderRadius: 20,
        backgroundColor: theme.colors.secondary,
        borderWidth: 2,
        borderColor: theme.colors.accent,
    },
    metronomeTitle: {

    },
    metronomeText: {
        
    },
    metronomeButton: {

    },

    playButton: {
        width: 50, // Adjust width as needed
        height: 40, // Adjust height as needed
        borderRadius: 10, // Half of width/height to make it round
        backgroundColor: '#0EB4B0', // Blue background color
        justifyContent: 'center', // Center icon horizontally
        alignItems: 'center', // Center icon vertically
        marginBottom: 16, // Spacing between play button and tags
    },
});

export default ExerciseScreen;