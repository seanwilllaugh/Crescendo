import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContentCard = ({ cardType, cardTitle, cardTime, cardTags, navigation }) => {
  // Function to handle the press action
  const onPlayPress = () => {
    // Navigate to the DetailScreen with parameters
    navigation.navigate('DetailScreen', {
      type: cardType,
      title: cardTitle,
      time: cardTime,
      tags: cardTags,
    });
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <Text style={styles.cardTime}>{cardTime}</Text>
      <TouchableOpacity style={styles.playButton} onPress={onPlayPress}>
        <Icon name="play" size={15} color="#FFFFFF" />
      </TouchableOpacity>
      <View style={styles.tagContainer}>
        {cardTags.map((tag, index) => (
          <Text key={index} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 100,
    height: 130,
    flexDirection: 'column',
    borderRadius: 10,
    marginLeft: 18,
    marginRight: 18,
    backgroundColor: '#0f2239',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5, // Added padding for internal spacing
  },
  cardTitle: {
    color: '#FFFFFF',
    fontFamily: 'JosefinSans-Medium',
    fontSize: 10,
    marginBottom: 4,
  },
  cardTime: {
    fontFamily: 'JosefinSans-Medium',
    color: '#FFFFFF',
    fontSize: 10,
    marginBottom: 16,
  },
  tagContainer: {
    flexDirection: 'row',
    fontFamily: 'JosefinSans-Medium',
    marginTop: 5,
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
  tag: {
    color: '#FFFFFF',
    fontFamily: 'JosefinSans-Medium',
    fontSize: 6.75,
    borderRadius: 5, // Optional: Round corners for tags
    padding: 2, // Optional: Padding inside tags
  },
});

export default ContentCard;
