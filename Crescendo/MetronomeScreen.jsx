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

    useEffect(() => {
        loadAudio();
        return () => {
            click1.unloadAsync();
            click2.unloadAsync();
        };
    }, []);

    const loadAudio = async () => {
        try {
            await click1.loadAsync(require("path"));
            await click2.loadAsync(require("path"));
        } catch (error) {
            console.error('Error loading clicks', error);
        }
    };

    const playClick = () => {
        if (count % beatsPerMeasure === 0) {
            click2.replayAsync();
        } else {
            click1.replayAsync();
        }
        setCount((prevCount) (prevCount + 1) % beatsPerMeasure);
    };

    const handleInputChange = (value) => {
        setBpm(value);
        if (isPlaying) {
            clearInterval(timerRef.current);
            timerRef.current = setInterval(playClick, (60 / value) * 1000);
            setCount(0);
        }
    };

    const startStop = () => {
        if (isPlaying) {
            clearInterval(timerRef.current);
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
            setCount(0);
            timerRef.current = setInterval(playClick, (60 / bpm) * 1000);
            playClick();
        }
    }

    return (
        <View style={styles.metronome}>
          <Text>{bpm} BPM</Text>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={60}
            maximumValue={240}
            value={bpm}
            onValueChange={handleInputChange}
          />
          <Button title={isPlaying ? "Stop" : "Start"} onPress={startStop} />
        </View>
      );
};

const styles = StyleSheet.create({
    metronome: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MetronomeScreen;
