//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import AccountListItem from "@/src/components/account-list-item";
import {awaitExpression} from "@babel/types";
import {accountsCollection} from "@/src/db";
import Account from "@/src/model/Account";

export const DATA = [1, 2, 3, 4, 5, 6]

const AccountsLists = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  useEffect(() => {
    const fetchAccounts = async () => {
      const accounts = await accountsCollection.query().fetch();
      console.log(accounts)
      setAccounts(accounts)
    }
    fetchAccounts();
  }, [])

  return (
    <>
      <FlatList
        data={accounts.slice(0, 5)}
        renderItem={(item) => {
          return (
            <AccountListItem account={item} />
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
