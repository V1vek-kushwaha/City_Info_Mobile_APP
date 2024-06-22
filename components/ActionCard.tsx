import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Nearby Places</Text>
      <View style={[styles.card, styles.elevatedCars]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerTex}>What's new in Jhansi City</Text>
        </View>
        <Image
          style={styles.cardImg}
          source={{
            uri: 'https://www.tourmyindia.com/states/uttarpradesh/images/rani-mahal-jhansi.jpg',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardBodyText} numberOfLines={3}>
            To add more to your trip to Jhansi, visit the famous Rani Mahal.
            Built by Raghu Nath II, Rani Mahal was once the palace of Rani
            Lakshmibai. However, it has now been converted into a beatiful
            museum.
          </Text>
          <View style={styles.cardFooter}>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://www.tourmyindia.com/states/uttarpradesh/rani-mahal-jhansi.html',
                )
              }>
              <Text style={styles.footerReadme}>ReadMore</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerReadme}>Follow Me</Text>
            </TouchableOpacity>
          </View>
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
  elevatedCars: {
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTex: {
    // color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImg: {
    height: 180,
    marginBottom: 8,
  },
  cardBody: {
    padding: 8,
  },
  cardBodyText: {
    // color: '#fff',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  footerReadme: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: 'pink',
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginTop: 12,
    borderRadius: 6,
    borderColor: '#000',
    borderWidth: 0.2,
  },
});
