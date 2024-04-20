//@ts-nocheck
import React from 'react';
import {FlatList} from 'react-native';
import AccountListItem from "@/src/components/account-list-item";
import {accountsCollection} from "@/src/db";
import Account from "@/src/model/Account";
import { withObservables } from '@nozbe/watermelondb/react';

export const DATA = [1, 2, 3, 4, 5, 6]


function AccountsList({ accounts }: { accounts: Account[] }) {
  return (
    <>
      <FlatList
        data={accounts.slice(0, 7)}
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

const enhance = withObservables([], () => ({
  accounts: accountsCollection.query(),
}));

export default enhance(AccountsList);
