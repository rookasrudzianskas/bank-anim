import {Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import AccountsList from "@/src/components/accounts-list";
import {useRouter} from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();
  const [name, setName] = useState('');

  const createAccount = () => {
    console.warn('Account created')
  }

  return (
    <View className="m-5">
      <AccountsList />

      <View className={'flex flex-row items-center mb-3 mt-1 py-1 border border-white rounded-md '}>
        <View className={'text-white flex-1 font-semibold'}>
          <TextInput
            className={'h-10 my-1 pl-3 text-white flex-1'}
            placeholder={'Name'}
          />
        </View>
        <View className={'text-white items-center h-16 flex-1 font-semibold'}>
          <TextInput
            className={'h-10 my-1 text-white flex-1'}
            placeholder={'Enter'}
          />
          <Text className={'text-white'}>Cap</Text>
        </View>
        <View className={'flex items-center h-16 flex-1 flex-col'}>
          <TextInput
            className={'h-10 flex-1 my-1 text-white'}
            placeholder={'Enter'}
            value={name}
            onChangeText={setName}
          />
          <Text className={'text-white'}>Cap</Text>
        </View>
      </View>

      <Button title={'Add account'} onPress={() => createAccount()} />
      <StatusBar style="auto" />
    </View>
  );
}
