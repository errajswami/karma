import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Header } from './Header'
import { Main  } from './Main'

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Main/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  }
})