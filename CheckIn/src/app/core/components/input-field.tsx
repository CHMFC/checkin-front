import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface InputFieldProps extends TextInputProps {
  iconName?: string; 
  placeholder: string;
  isPassword?: boolean; 
  value: string;
  onChangeText: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  iconName,
  placeholder,
  isPassword = false,
  value,
  onChangeText,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {iconName && (
        <Icon
          name={iconName}
          size={20}
          color="#666" 
          style={styles.iconLeft}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999" 
        secureTextEntry={isPassword && !showPassword} 
        value={value}
        onChangeText={onChangeText}
        {...rest} 
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.iconRight}
        >
          <Icon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'} 
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8, 
    borderWidth: 1,
    borderColor: '#e0e0e0', 
    paddingHorizontal: 15,
    height: 50, 
    marginBottom: 15, 
    width: '90%',
  },
  iconLeft: {
    marginRight: 10,
  },
  input: {
    flex: 1, 
    fontSize: 16,
    color: '#333', 
    paddingVertical: 0, 
    marginLeft: 10,
    marginRight: 10
  },
  iconRight: {
    marginLeft: 10,
  },
});

export default InputField;