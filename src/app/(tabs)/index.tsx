import {Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import AccountsList from "@/src/components/accounts-list";
import {useRouter} from "expo-router";
import database, { accountsCollection } from '../../db';
import {awaitExpression} from "@babel/types";

export default function TabOneScreen() {
  const router = useRouter();
  const [name, setName] = useState('');

  const createAccount = () => {
    console.warn('Account created')
  }

  const onRead = async () => {
    const accounts = await accountsCollection.query().fetch();
    console.log(accounts);

    await database.write(async () => {
      await accountsCollection.create((account) => {
        account.name = 'Test'
        account.cap = 10.5;
        account.tap = 20.1;
      })
    })
  }

  return (
    <View className="m-5">
      <AccountsList />

      <View className={'flex flex-row items-center mb-3 mt-1 py-1 justify-between border border-black rounded-md '}>
        <View className={'text-black flex-1 font-semibold'}>
          <TextInput
            className={'h-10 my-1 pl-3 text-black flex-1'}
            placeholder={'Name'}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View className={'flex-1 flex flex-row'}>
          <View className={'text-white items-center h-16 flex-1 font-semibold'}>
            <TextInput
              className={'h-10 my-1 text-black flex-1'}
              placeholder={'Enter'}
            />
            <Text className={'text-black'}>Cap</Text>
          </View>
          <View className={'flex items-center h-16 flex-1 flex-col'}>
            <TextInput
              className={'h-10 flex-1 my-1 text-black'}
              placeholder={'Enter'}
            />
            <Text className={'text-black'}>Cap</Text>
          </View>
          <View className={'flex items-center h-16 flex-1 flex-col'}>
            <TextInput
              className={'h-10 flex-1 my-1 text-white'}
              placeholder={'Enter'}
            />
            <Text className={'text-black'}>Cap</Text>
          </View>
        </View>
      </View>

      <Button title={'Add account'} onPress={() => createAccount()} />
      <Button title="Test" onPress={onRead} />
      <StatusBar style="auto" />
    </View>
  );
}
