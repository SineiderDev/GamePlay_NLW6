import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
  const uri ='https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg';
  return (
    <Image
      source={{uri}}
      style={styles.image}
      resizeMode='cover'
    />
  )
}