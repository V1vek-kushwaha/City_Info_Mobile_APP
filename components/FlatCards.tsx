import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Find Destination</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <View style={styles.Incontainer}>
            <Image
              style={styles.InImg}
              source={{
                uri: 'https://img.icons8.com/?size=100&id=XcK4yyTgfNsY&format=png&color=000000',
              }}
            />
            <Text style={styles.InText}>Temple</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <View style={styles.Incontainer}>
            <Image
              style={styles.InImg}
              source={{
                uri: 'https://img.icons8.com/?size=100&id=45261&format=png&color=000000',
              }}
            />
            <Text style={styles.InText}>Food</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <View style={styles.Incontainer}>
            <Image
              style={styles.InImg}
              source={{
                uri: 'https://img.icons8.com/?size=100&id=3Vmqp9CYmbd7&format=png&color=000000',
              }}
            />
            <Text style={styles.InText}>Hotels</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
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
    color: '#fff',
  },
  cardOne: {
    backgroundColor: '#1287A5',
  },
  cardTwo: {
    backgroundColor: '#777E8B',
  },
  cardThree: {
    backgroundColor: '#019031',
  },
});

export default FlatCards;
