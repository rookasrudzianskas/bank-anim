//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Account from '../model/Account';

type AccountListItem = {
  account: Account;
};

const AccountListItem = ({account}: AccountListItem) => {
  return (
    <TouchableOpacity activeOpacity={0.7} className={'flex flex-row my-1 items-center border rounded-md border-black' +
      ' border-1' +
      ' justify-between px-7 py-3' +
      ' text-black'}>
      <Text className={'text-black text-lg font-semibold'}>{account?.name}</Text>
      <View className={'flex flex-row items-center gap-6'}>
        <View className={'flex flex-col items-center justify-center'}>
          <Text className={'text-black text-lg font-semibold'}>{account?.cap}%</Text>
          <Text className={'text-black'}>Cap</Text>
        </View>
        <View className={'flex flex-col items-center justify-center'}>
          <Text className={'text-black text-lg font-semibold'}>{account?.tap}%</Text>
          <Text className={'text-black'}>Cap</Text>
        </View>
        <View className={'flex flex-col items-center justify-center'}>
          <Text className={'text-black text-lg font-semibold'}>10%</Text>
          <Text className={'text-black'}>Cap</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AccountListItem;
