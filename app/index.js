import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import styles from '../styles/game.js';


export default function App() {

  return (
    <View style={styles.gui}>
      <View style={styles.banner}>
        <View style={styles.info}>
          <View style={styles.stats}>
            <Text style={styles.label}> PLACE </Text>
            <Text style={styles.label}> NUM </Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.label}> PLACE </Text>
            <Text style={styles.label}> NUM </Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.label}> PLACE </Text>
            <Text style={styles.label}> NUM </Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.label}> PLACE </Text>
            <Text style={styles.label}> NUM </Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.label}> PLACE </Text>
            <Text style={styles.label}> NUM </Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.label}> PLACE </Text>
            <Text style={styles.label}> NUM </Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.stats}>
            <Text style={styles.label}> PLACE </Text>
            <Text style={styles.label}> NUM </Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.label}> PLACE </Text>
            <Text style={styles.label}> NUM </Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.label}> PLACE </Text>
            <Text style={styles.label}> NUM </Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.label}> PLACE </Text>
            <Text style={styles.label}> NUM </Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.label}> PLACE </Text>
            <Text style={styles.label}> NUM </Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.label}> PLACE </Text>
            <Text style={styles.label}> NUM </Text>
          </View>
        </View>
      </View>
      <View style={styles.pet}>
        <Pressable>
          
        </Pressable>
      </View>
      <View style={styles.menu}>
        <Pressable>
          <View style={styles.button}>
            <Text style={styles.icon}> ### </Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.button}>
            <Text style={styles.icon}> ### </Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.button}>
            <Text style={styles.icon}> ### </Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.button}>
            <Text style={styles.icon}> ### </Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.button}>
            <Text style={styles.icon}> ### </Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.button}>
            <Text style={styles.icon}> ### </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};