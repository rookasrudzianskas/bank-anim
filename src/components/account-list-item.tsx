//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const AccountListItem = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} className={'flex flex-row my-1 items-center border rounded-md border-white' +
      ' border-1' +
      ' justify-between px-7 py-3' +
      ' text-white'}>
      <Text className={'text-white text-lg font-semibold'}>Profit</Text>
      <View className={'flex flex-row items-center gap-6'}>
        <View className={'flex flex-col items-center justify-center'}>
          <Text className={'text-white text-lg font-semibold'}>10%</Text>
          <Text className={'text-white'}>Cap</Text>
        </View>
        <View className={'flex flex-col items-center justify-center'}>
          <Text className={'text-white text-lg font-semibold'}>10%</Text>
          <Text className={'text-white'}>Cap</Text>
        </View>
        <View className={'flex flex-col items-center justify-center'}>
          <Text className={'text-white text-lg font-semibold'}>10%</Text>
          <Text className={'text-white'}>Cap</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AccountListItem;
