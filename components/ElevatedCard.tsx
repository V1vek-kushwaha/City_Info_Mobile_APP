import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Needs</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.Incontainer}>
            <Image
              style={styles.InImg}
              source={{
                uri: 'https://img.icons8.com/?size=100&id=j2SfqDojO0h4&format=png&color=000000',
              }}
            />
            <Text style={styles.InText}>Book Cab</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.Incontainer}>
            <Image
              style={styles.InImg}
              source={{
                uri: 'https://img.icons8.com/?size=100&id=ryYXze84ieGU&format=png&color=000000',
              }}
            />
            <Text style={styles.InText}>Theater</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.Incontainer}>
            <Image
              style={styles.InImg}
              source={{
                uri: 'https://img.icons8.com/?size=100&id=AhPGCEXeR8Nt&format=png&color=000000',
              }}
            />
            <Text style={styles.InText}>Rent Bike</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.Incontainer}>
            <Image
              style={styles.InImg}
              source={{
                uri: 'https://img.icons8.com/?size=100&id=NiVzHzLuPdEo&format=png&color=000000',
              }}
            />
            <Text style={styles.InText}>shopping</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  Incontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InImg: {
    height: 30,
    width: 30,
  },
  InText: {
    color: '#000',
  },
});
