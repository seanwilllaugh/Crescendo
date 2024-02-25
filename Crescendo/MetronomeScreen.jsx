import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Audio } from 'expo-av';

const MetronomeScreen = ({ route }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [count, setCount] = useState(0);
    const [bpm, setBpm] = useState(100);
    const beatsPerMeasure = 4;
    const timerRef = useRef(null);

    const click1 = new Audio.Sound();
    const click2 = new Audio.Sound();
    const [audioLoaded, setAudioLoaded] = useState(false);

    useEffect(() => {
        loadAudio();
        return () => {
            click1.unloadAsync();
            click2.unloadAsync();
        };
    }, []);

    const loadAudio = async () => {
        try {
            await click1.loadAsync(require('./Metronomes/Perc_Clap_hi.wav'));
            await click2.loadAsync(require('./Metronomes/Perc_Clap_lo.wav'));
            setAudioLoaded(true); // Set audioLoaded to true after loading is complete
        } catch (error) {
            console.error('Error loading clicks', error);
            setAudioLoaded(false); // Ensure audioLoaded reflects loading failure
        }
    };

    const playClick = () => {
        if (!audioLoaded) {
            console.log("Audio not loaded yet");
            return; // Exit if audio is not loaded
        }
    
        if (count % beatsPerMeasure === 0) {
            click2.replayAsync();
        } else {
            click1.replayAsync();
        }
        setCount((prevCount) => (prevCount + 1) % beatsPerMeasure);
    };
    
    const startStop = () => {
        if (!audioLoaded) {
            console.log("Audio not loaded yet");
            return; // Prevent starting the metronome if audio is not loaded
        }
    
        if (isPlaying) {
            clearInterval(timerRef.current);
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
            setCount(0);
            timerRef.current = setInterval(playClick, (60 / bpm) * 1000);
            playClick(); // for immediate click
        }
    };    

    const increaseBpm = () => {
        const newBpm = bpm + 1;
        setBpm(newBpm);
        if (isPlaying) {
            clearInterval(timerRef.current);
            timerRef.current = setInterval(playClick, (60 / newBpm) * 1000);
        }
    };

    const decreaseBpm = () => {
        const newBpm = bpm - 1;
        setBpm(newBpm);
        if (isPlaying) {
            clearInterval(timerRef.current);
            timerRef.current = setInterval(playClick, (60 / newBpm) * 1000);
        }
    };

    return (
        <View style={styles.metronome}>
            <Text>{bpm} BPM</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={decreaseBpm} style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={startStop} style={styles.button}>
                    <Text style={styles.buttonText}>{isPlaying ? "Stop" : "Start"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={increaseBpm} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    metronome: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        margin: 10,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDD',
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 24,
    },
});

export default MetronomeScreen;
