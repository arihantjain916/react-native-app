import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default class ElevatedCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>ElevatedCard</Text>
        <ScrollView horizontal={true} style={styles.container}>
          <View style={[styles.card, styles.elevatedCard]}>
            <Text>Hello</Text>
          </View>
          <View style={[styles.card, styles.elevatedCard]}>
            <Text>Hello</Text>
          </View>
          <View style={[styles.card, styles.elevatedCard]}>
            <Text>Hello</Text>
          </View>
          <View style={[styles.card, styles.elevatedCard]}>
            <Text>Hello</Text>
          </View>
          <View style={[styles.card, styles.elevatedCard]}>
            <Text>Hello</Text>
          </View>
          <View style={[styles.card, styles.elevatedCard]}>
            <Text>Hello</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
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
    margin: 10,
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 4,
    margin: 3,
  },
  elevatedCard: {
    backgroundColor: '#CAD5E2',
    elevation: 10,
  },
});
