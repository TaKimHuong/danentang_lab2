import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#6C63FF"
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* AVATAR */}
        <Image
          source={require("./assets/avatar.jpg")}
          style={styles.avatar}
        />

        {/* NAME */}
        <Text style={styles.name}>
          TẠ KIM HƯƠNG
        </Text>

        {/* JOB */}
        <Text style={styles.job}>
          AI ENGINEER
        </Text>

        {/* DESCRIPTION */}
        <Text style={styles.description}>
          Information Technology Student
        </Text>

        {/* DIVIDER */}
        <View style={styles.divider} />

        {/* PHONE CARD */}
        <View style={styles.card}>

          <Text style={styles.icon}>
            ☎
          </Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Phone
            </Text>

            <Text style={styles.cardText}>
              0123 456 789
            </Text>
          </View>

        </View>

        {/* EMAIL CARD */}
        <View style={styles.card}>

          <Text style={styles.icon}>
            ✉
          </Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Email
            </Text>

            <Text style={styles.cardText}>
              kimhuong@gmail.com
            </Text>
          </View>

        </View>

        {/* LOCATION CARD */}
        <View style={styles.card}>

          <Text style={styles.icon}>
            📍
          </Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Location
            </Text>

            <Text style={styles.cardText}>
              Da Nang, Vietnam
            </Text>
          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#6C63FF",
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 40,
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom: 20,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
  },

  job: {
    color: "#E8E6FF",
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 3,
    marginTop: 8,
  },

  description: {
    color: "#D9D7FF",
    fontSize: 14,
    marginTop: 8,
  },

  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    marginVertical: 30,
  },

  card: {
    width: "100%",
    minHeight: 75,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 20,
    marginBottom: 15,

    elevation: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },

  icon: {
    fontSize: 28,
    width: 50,
    textAlign: "center",
  },

  cardContent: {
    marginLeft: 15,
  },

  cardTitle: {
    color: "#777777",
    fontSize: 13,
    marginBottom: 4,
  },

  cardText: {
    color: "#222222",
    fontSize: 17,
    fontWeight: "600",
  },

});