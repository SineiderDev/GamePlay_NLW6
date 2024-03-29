import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Avatar } from '../Avatar';
import { styles } from './styles';
export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar
        urlImage="http://github.com/rodrigorgtic.png"
      />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          <Text style={styles.username}>
            Felipe
          </Text>
        </View>
        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>

    </View>
  );
}