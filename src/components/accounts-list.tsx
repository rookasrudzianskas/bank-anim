//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import AccountListItem from "@/src/components/account-list-item";

export const DATA = [1, 2, 3, 4, 5, 6]

const AccountsLists = () => {
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={(item) => {
          return (
            <AccountListItem />
          )
        }}
        contentContainerStyles={{
          gap: 5,
        }}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default AccountsLists;
