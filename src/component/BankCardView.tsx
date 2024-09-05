import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  WHITE,
  windowWidth,
  TERTIARY_ACCENT,
  windowHeight,
} from '../util/Constants';
import {AppText} from './AppText';

const SCREEN_HEIGHT = windowHeight;

type BankCardViewProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: ImageSourcePropType;
  onClick: () => void;
};

export function BankCardView({
  title,
  subtitle,
  onClick,
  imageUrl,
}: BankCardViewProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => onClick()}>
          <Image style={styles.imageThumbnail} source={imageUrl} />
        </TouchableOpacity>
        <View>
          <AppText text={title} color={WHITE} width={windowWidth * 0.7} fontSize={16}/>
          <View style={{marginTop: 10}}></View>
          <AppText text={subtitle} color={WHITE} fontSize={20} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageThumbnail: {
    resizeMode: 'cover',
    width: SCREEN_HEIGHT * 0.05,
    height: SCREEN_HEIGHT * 0.05,
    borderRadius: (SCREEN_HEIGHT * 0.15) / 2,
    marginEnd: 20,
  },
  cardContainer: {
    backgroundColor: TERTIARY_ACCENT,
    padding: 20,
    margin: 10,
    borderRadius: 6,
    elevation: 2,
    shadowOffset: {width: 2, height: 6},
    shadowRadius: 4,
    shadowOpacity: 0.2,
    height: 150,
  },
});
