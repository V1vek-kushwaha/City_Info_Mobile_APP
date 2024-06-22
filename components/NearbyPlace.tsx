import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function NearbyPlace() {
  const nearbyPlaces = [
    {
      uid: 1,
      name: 'Jhansi Fort',
      status: '2 km Away',
      imageUrl:
        'https://www.shutterstock.com/image-photo/jhansi-16-feb-2023-fort-260nw-2262475279.jpg',
    },
    {
      uid: 2,
      name: 'Rani Mahal',
      status: '3 km Away',
      imageUrl:
        'https://www.tourmyindia.com/states/uttarpradesh/images/rani-mahal-jhansi.jpg',
    },
    {
      uid: 3,
      name: 'Barua Sagar',
      status: '25 km Away',
      imageUrl:
        'https://images1.livehindustan.com/uploadimage/library/2022/10/22/16_9/16_9_6/barua_sagar_jhansi_1666406252.jpg',
    },
    {
      uid: 4,
      name: 'Maharaja Gangadhar Rao Ki Chhatri',
      status: '4 km Away',
      imageUrl:
        'https://static2.tripoto.com/media/filter/tst/img/1992358/SpotDocument/1612070357_1612070354137.jpg.webp',
    },
    {
      uid: 5,
      name: 'St. Jude’s Shrine',
      status: '6 km Away',
      imageUrl:
        'https://www.adotrip.com/public/images/areas/master_images/60913b7619d71-St_Judes_Shrine_Jhansi.jpg',
    },
  ];

  // Example usage:
  console.log(nearbyPlaces);

  return (
    <View>
      <Text style={styles.headingTaxt}>More Place</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {nearbyPlaces.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.nearbtplaceCard}>
            <Image
              style={styles.CardImg}
              source={{
                uri: imageUrl,
              }}
            />
            <View>
              <Text style={styles.CardName}>{name}</Text>
              <Text style={styles.CardStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingTaxt: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 2,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  nearbtplaceCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#1287A5',
    borderRadius: 6,
    padding: 8,
  },
  CardImg: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
    borderColor: '#fff',
    borderWidth: 0.8,
  },
  CardName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  CardStatus: {
    fontSize: 16,
    color: '#fff',
  },
});
