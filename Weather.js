import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FBD3E9", "#BB377D"],
    title: "What a pleasant sky!",
    subtitle: "Fresh air, good mood.. it's perfect!",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "",
    subtitle: "",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#000046", "#1CB5E0"],
    title: "",
    subtitle: "",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#0575E6", "#021B79"],
    title: "",
    subtitle: "",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#E6DADA", "#274046"],
    title: "",
    subtitle: "",
  },
  Atmosphere: {
    iconName: "weather-sunset",
    gradient: ["#5614B0", "#DBD65C"],
    title: "",
    subtitle: "",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "",
    subtitle: "",
  },
  Mist: {
    iconName: "weather-partly-cloudy",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "",
    subtitle: "",
  },
  Smoke: {
    iconName: "weather-partly-cloudy",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "",
    subtitle: "",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "",
    subtitle: "",
  },
  Dust: {
    iconName: "weather-hazy",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "",
    subtitle: "",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "",
    subtitle: "",
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "",
    subtitle: "",
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "",
    subtitle: "",
  },
  Squall: {
    iconName: "weather-fog",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "",
    subtitle: "",
  },
  Tornado: {
    iconName: "weather-windy",
    gradient: ["#DC2424", "#4A569D"],
    title: "",
    subtitle: "",
  },
};

export default function Weather({ temp, condition, gradient }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={80}
          color="white"
        />
        <Text style={styles.temp}>{temp}˚C</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
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
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    marginTop: 12,
    fontSize: 25,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "600",
    fontSize: 38,
    textShadowColor: "black",
    textShadowRadius: 0.2,
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "400",
    fontSize: 22,
    textShadowColor: "black",
    textShadowRadius: 0.2,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
