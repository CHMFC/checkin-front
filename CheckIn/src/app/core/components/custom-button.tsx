import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle; 
  textStyle?: TextStyle; 
  iconName?: string; 
  rightIconName?: string; 
  iconColor?: string;
  iconSize?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  iconName,
  rightIconName,
  iconColor = '#fff', 
  iconSize = 20,
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {iconName && (
        <Icon name={iconName} size={iconSize} color={iconColor} style={styles.leftIcon} />
      )}
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      {rightIconName && (
        <Icon name={rightIconName} size={iconSize} color={iconColor} style={styles.rightIcon} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#6A5ACD', 
    width: '50%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  leftIcon: {
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 10,
  },
});

export default CustomButton;