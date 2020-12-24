import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_2: "", TextInput_3: "", TextInput_5: "" }

  render = () => (
    <View>
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_2}
        onChangeText={nextValue => this.setState({ TextInput_2: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_3}
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <Text style={styles.Text_4}>Sample text content</Text>
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <Text style={styles.Text_6}>Sample text content</Text>
      <Text style={styles.Text_7}>Sample text content</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  TextInput_2: {},
  TextInput_3: {
    alignSelf: "center",
    fontSize: 17,
    color: "#776ad7",
    backgroundColor: "#f5dbdb",
    fontStyle: "italic",
    fontWeight: "bold"
  },
  Text_4: { color: "#46c318" },
  TextInput_5: { color: "#39e123", fontFamily: "Merriweather-Regular" },
  Text_6: { color: "#46c318" },
  Text_7: { color: "#46c318" }
})
