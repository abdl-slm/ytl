import {Text, View} from 'react-native';

type AppTextProps = {
  text?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  width?: number;
  backgroundColor?: string;
  borderRadius?: number
  padding?: number
};

export function AppText({text, color, fontFamily, fontSize, width, backgroundColor, borderRadius, padding}: AppTextProps) {
  return (
    <View>
      <Text style={{color: color, fontFamily: fontFamily, fontSize: fontSize, width: width, backgroundColor: backgroundColor, borderRadius, padding}}>
        {text}
      </Text>
    </View>
  );
}
