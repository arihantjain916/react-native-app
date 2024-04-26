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
    console.log('opening website');
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.container, styles.cardElevated]}>
        <View style={styles.Headingcontainer}>
          <Text style={styles.HeadingText}>Whst's new in JavaScript</Text>
        </View>
        <Image
          source={{
            uri: 'data:image/png;base64,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',
          }}
          style={styles.cardImage}
          alt="jkvjs"
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit ea explicabo ratione numquam iure assumenda distinctio
            vitae ullam, id nisi amet facilis nesciunt, sunt illo! Aliquid,
            voluptates! Ipsa, dignissimos quibusdam.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://reactnative.dev')}>
            <Text style={styles.footerText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    padding: 15,
    width: 345,
    height: 325,
    borderRadius: 6,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  cardElevated: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  Headingcontainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeadingText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {height: 150},
  cardBody: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
  },
  footerText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
