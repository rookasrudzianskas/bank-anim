//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const AccountListItem = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} className={'flex flex-row my-1 items-center border rounded-md border-black' +
      ' border-1' +
      ' justify-between px-7 py-3' +
      ' text-black'}>
      <Text className={'text-black text-lg font-semibold'}>Profit</Text>
      <View className={'flex flex-row items-center gap-6'}>
        <View className={'flex flex-col items-center justify-center'}>
          <Text className={'text-black text-lg font-semibold'}>10%</Text>
          <Text className={'text-black'}>Cap</Text>
        </View>
        <View className={'flex flex-col items-center justify-center'}>
          <Text className={'text-black text-lg font-semibold'}>10%</Text>
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
