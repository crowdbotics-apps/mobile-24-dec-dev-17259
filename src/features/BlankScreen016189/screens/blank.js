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

  state = { DateTimePicker_7: new Date("05/31/2009"), TextInput_8: "" }

  render = () => (
    <View>
      <Text style={styles.Text_2}>Sample text content</Text>
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_7}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_7: selectedDate })
        }
      />
      <TextInput
        placeholder=""
        keyboardType="numeric"
        style={styles.TextInput_8}
        value={this.state.TextInput_8}
        onChangeText={nextValue => this.setState({ TextInput_8: nextValue })}
      />
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        style={styles.Slider_9}
      />
      <Slider value={50} minimumValue={0} maximumValue={100} />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_2: { alignSelf: "center" },
  DateTimePicker_7: {},
  TextInput_8: {
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  Slider_9: { width: 100 },
  Slider_10: {}
})
