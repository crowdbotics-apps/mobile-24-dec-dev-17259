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

  state = {}

  render = () => (
    <View>
      <Text style={styles.Text_2}>Sample text content</Text>
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        style={styles.Slider_3}
      />
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        style={styles.Slider_4}
      />
      <Text>Sample text content</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_2: { alignSelf: "center" },
  Slider_3: { width: 100, alignSelf: "center" },
  Slider_4: { width: 100 },
  Text_5: {}
})
