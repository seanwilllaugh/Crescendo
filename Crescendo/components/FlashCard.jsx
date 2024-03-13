import React, { useState, useRef } from 'react';
import { View, Image, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { theme } from '../theme';

const FlashCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    Animated.spring(flipAnimation, {
      toValue: isFlipped ? 0 : 1,
      friction: 6,
      tension: 8,
      useNativeDriver: true,
    }).start();
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <TouchableOpacity onPress={flipCard}>
      <View style={styles.cardContainer}>
        <Animated.View style={[styles.card, styles.frontCard, frontAnimatedStyle]}>
        <Image
            source={frontContent} // Update this path
            style={styles.image}
          />
        </Animated.View>
        <Animated.View style={[styles.card, styles.backCard, backAnimatedStyle]}>
          <Text style={styles.title}>{backContent}</Text>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    height: 300,
    perspective: 1000,
  },
  card: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  frontCard: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backCard: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotateY: '180deg' }],
  },
  title: {
    color: '#fff',
    fontFamily: 'JosefinSans-Medium',
    fontSize: 30,
    marginBottom: 10,
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: '40%',
    //resizeMode: 'cover',
  },
});

export default FlashCard;