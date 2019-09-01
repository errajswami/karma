import React from 'react'
import Note from "./Note";
import { Footer } from './Footer'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, AsyncStorage, TextInput, KeyboardAvoidingView, StatusBar } from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      karmaList: [],
      newKarma: '',
      notes: []
    }
  }

  componentDidMount() {
    this.getStorageData()
  }

  getStorageData = async () => {
    let notes = await AsyncStorage.getItem('notes');
    if(notes){
      this.setState({notes: JSON.parse(notes)})
    }
  }

  /**
  * This will add note
  */
  addNote = async () => {
    if (this.state.noteText) {
      var d = new Date();
      this.state.notes.push({
        date: d.getFullYear() + '/' + (d.getMonth() - 1) + '/' + d.getDate(),
        note: this.state.noteText,
      });
      this.setState({ notes: this.state.notes });
      this.setState({ noteText: "" });;

      AsyncStorage.setItem('notes', JSON.stringify(this.state.notes))
    }
  }

  /**
   * This will delete the note
   * @param {String} key
   */
  deleteNote = async (key) => {
    this.state.notes.splice(key, 1);
    this.setState({ notes: this.state.notes });
    AsyncStorage.setItem('notes', JSON.stringify(this.state.notes))
  }

  render() {

    let notes = this.state.notes.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteNote={() => this.deleteNote(key)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#1A237E"
          translucent={true} />
        
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>


        <KeyboardAvoidingView
          keyboardVerticalOffset={80}
          behavior="padding" >

          <Footer
            noteText={this.state.noteText}
            addText={(noteText) => this.setState({ noteText })}
            addNote={() => this.addNote()}
          />

        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 0,
    backgroundColor: "#FAFAFA",
  }
});