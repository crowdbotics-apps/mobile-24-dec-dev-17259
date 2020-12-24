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

  state = { CheckBox_5: true, CheckBox_6: true }

  render = () => (
    <View>
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        style={styles.Slider_3}
      />
      <Icon name="star" style={styles.Icon_4} />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.CheckBox_5}
        checked={this.state.CheckBox_5}
        onPress={nextChecked => this.setState({ CheckBox_5: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_6}
        onPress={nextChecked => this.setState({ CheckBox_6: nextChecked })}
      />
      <Text>Sample text content</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Slider_2: {},
  Slider_3: { width: 100 },
  Icon_4: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 11,
    marginTop: 15,
    alignSelf: "flex-end",
    backgroundColor: "#fde2e2",
    textDecorationLine: "underline",
    textTransform: "lowercase"
  },
  CheckBox_5: {
    width: 200,
    height: 100,
    alignSelf: "flex-end",
    textDecorationLine: "line-through",
    textTransform: "uppercase",
    letterSpacing: 7
  },
  CheckBox_6: {},
  Text_7: {}
})
