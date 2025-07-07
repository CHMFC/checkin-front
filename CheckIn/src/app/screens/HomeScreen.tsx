import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import InputField from '../core/components/input-field';
import CustomButton from '../core/components/custom-button';
type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  signIn: {
    fontSize: 18,
    marginLeft: 20,
    alignSelf: 'flex-start',
    marginBottom: 10
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20, // Espaçamento acima e abaixo
  },
  line: {
    flex: 1,
    width: 0.1,
    height: 2,
    color: '#999',
    backgroundColor: '#e0e0e0',
  },
  separator: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#999',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
    marginTop: 20,
  },
  boldFooterText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  }
});

function HomeScreen({ navigation }: HomeScreenProps) {

   const [showFirstItem, setShowFirstItem] = useState(true);

   useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstItem(false); 
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (

    <View style={styles.container}>
      {showFirstItem ? (
        <Text style={styles.text}>CheckIn</Text>
      ) : (
        <>
          <Text style={styles.text}>CheckIn</Text>
          <Text style={styles.signIn}>Sign In</Text>
          <InputField 
            placeholder={'user@email.com'} 
            value={''} 
            onChangeText={function (text: string): void {
              throw new Error('Function not implemented.');
            } }></InputField>

          <Text style={styles.signIn}>Password</Text>
          <InputField 
            placeholder={'*********'} 
            value={''} 
            onChangeText={function (text: string): void {
              throw new Error('Function not implemented.');
            } }></InputField>
            <CustomButton 
              title={'Login'} 
              onPress={function (): void {
              throw new Error('Function not implemented.');
            } }></CustomButton>
            <View style={styles.separator}>
              <View style={styles.line} />
              <Text style={styles.separatorText}>{'Or'}</Text>
              <View style={styles.line} />
            </View>
            <>
              <Text style={styles.footerText}>Doesn't have an account? </Text>
              <Text style={styles.boldFooterText}>Sign Up </Text>
  
            </>
        </>
      )}
    </View>
  );
}


export default HomeScreen;