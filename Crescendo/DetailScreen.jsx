// DetailScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from './theme';

const DetailScreen = ({ route }) => {
  // Extract the necessary data from the route parameters
  const { title, time, tags } = route.params;

  return (
    <View style={styles.container}>

        <View style={styles.infoContainer}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.secondInfoRow}>

                <View style={styles.difficultyColumn}>
                    <Text style={styles.difficultyTitle}>Difficulty</Text>
                </View>

                <View style={styles.timeContainer}>
                    <Text style={styles.time}>{time}</Text>
                </View>

                <View style={styles.tagsColumn}>
                    <Text style={styles.tagsTitle}>Focuses</Text>
                    <View style={styles.tagsContainer}>
                        {tags.map((tag, index) => (
                        <Text key={index} style={styles.tag}>{tag}</Text>
                        ))}
                    </View>
                </View>
            </View>
        </View>

        <Text style={styles.setList}>Setlist</Text>

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
  infoContainer: {
    width: 375,
    height: 250,
    flexDirection: 'column',
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.accent,
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontFamily: 'JosefinSans-Medium',
    fontSize: 30,
    marginBottom: 10,
    marginTop: 20,
  },

  secondInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  difficultyColumn: {
    flexDirection: 'column',
    marginRight: 20,
  },
  difficultyTitle: {
    fontSize: 20,
    fontFamily: 'JosefinSans-Medium',
    color: '#FFF'
  },    
  timeContainer: {
    width: 130,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.accent,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  time: {
    color: '#fff',
    fontFamily: 'JosefinSans-Medium',
    fontSize: 20,
  },
  tagsColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 20,
  },
  tagsTitle: {
    fontSize: 20,
    fontFamily: 'JosefinSans-Medium',
    color: '#FFF'
  },
  tagsContainer: {
    flexDirection: 'column',
    marginBottom: 10,
    alignItems: 'center',
  },
  tag: {
    color: '#fff',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    padding: 5,
  },

  setList: {
    fontSize: 30,
    fontFamily: 'JosefinSans-Bold',
    color: theme.colors.accent,
    marginTop: 30,
    marginLeft: 10,
    alignSelf: 'flex-start'
  }
});

export default DetailScreen;
