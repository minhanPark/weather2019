import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "anybody here?"
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm",
    subtitle: "oh pickachu is here"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Dribble? no Drizzle"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Rain",
    subtitle: "Wtf rainy day"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "white christmas is coming"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Atmosphere",
    subtitle: "i don't know this weather"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Clear",
    subtitle: "Beautiful shiny day"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "something special day"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist",
    subtitle: "what th fffff?"
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dust",
    subtitle: "oh my eyes!"
  },
  Smoke: {
    iconName: "smoke-detector",
    gradient: ["#30E8BF", "#FF8235"],
    title: "Smoke",
    subtitle: "I am in Blue.."
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#20002c", "#cbb4d4"],
    title: "Fog",
    subtitle: "is it Fog???"
  },
  Sand: {
    iconName: "timer-sand",
    gradient: ["#F7971E", "#FFD200"],
    title: "Sand",
    subtitle: "oh SsssSsss"
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#6190E8", "#A7BFE8"],
    title: "Ash",
    subtitle: "whf ashole"
  },
  Squall: {
    iconName: "weather-fog",
    gradient: ["#200122", "#6f0000"],
    title: "Squall",
    subtitle: "Squall is what tf"
  },
  Tornado: {
    iconName: "home-currency-usd",
    gradient: ["#0575E6", "#021B79"],
    title: "Tornado",
    subtitle: "your house is out of earth"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
    "Smoke",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado"
  ])
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  temp: {
    fontSize: 42,
    color: "white",
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
    textAlign: "left"
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1
  }
});
