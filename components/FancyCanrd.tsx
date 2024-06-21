import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCanrd() {
  return (
    <View>
      <Text style={styles.headingText}>Trading Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://www.shutterstock.com/image-photo/jhansi-16-feb-2023-fort-260nw-2262475279.jpg',
          }}
          style={styles.cardImg}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Jhansi Fort</Text>
          <Text style={styles.cardLable}>Jhansi UP</Text>
          <Text style={styles.cardDescription}>
            Jhansi Fort or Jhansi ka Qila is a fortress situated on a large
            hilltop called Bangira, in Uttar Pradesh. It served as a stronghold
            of the Chandela Kings in Balwant Nagar from the 11th through the
            17th century
          </Text>
          <Text style={styles.cardFooter}>20 Min Away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 2,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 25,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImg: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLable: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242b2E',
    fontSize: 12,
  },
  cardFooter: {
    color: 'blue',
    fontSize: 12,
    marginTop: 12,
  },
});
