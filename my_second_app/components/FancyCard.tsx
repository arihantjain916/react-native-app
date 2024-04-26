import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCards</Text>
      <View style={[styles.container, styles.cardElevaed]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1R5inQibspO3r8JMGMejEmnXr3Q5ZdlMWw7GzsDb8xQ&s',
          }}
          alt="react native logo"
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
          <Text style={styles.cardDesc}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Build form
            red and pink sandstone, it is on the edge of the City Palace.
          </Text>
          <Text >12 mins away</Text>
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
    width: 340,
    height: 387,
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 13,
  },
  cardElevaed: {
    backgroundColor: '#FFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 250,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardLabel: {
    marginBottom: 4,
    fontSize: 14,
  },
  cardDesc: {
    color: '#242B2E',
    marginBottom: 4,
    fontSize: 12,
  },
});
