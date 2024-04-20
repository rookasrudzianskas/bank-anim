//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Account from '../model/Account';
import { AntDesign } from '@expo/vector-icons';
import database from '../db';

type AccountListItem = {
  account: Account;
};

const AccountListItem = ({account: {item}}: AccountListItem) => {
  const onDelete = async () => {
    await database.write(async () => {
      await item.markAsDeleted();
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.7} className={'flex flex-row my-1 items-center border rounded-md border-black' +
      ' border-1' +
      ' justify-between px-7 py-3' +
      ' text-black'}>
      <Text className={'text-black text-lg font-semibold'}>{item.name}</Text>
      <View className={'flex flex-row items-center gap-6'}>
        <View className={'flex flex-col items-center justify-center'}>
          <Text className={'text-black text-lg font-semibold'}>{item.cap}%</Text>
          <Text className={'text-black'}>Cap</Text>
        </View>
        <View className={'flex flex-col items-center justify-center'}>
          <Text className={'text-black text-lg font-semibold'}>{item.tap}%</Text>
          <Text className={'text-black'}>Cap</Text>
        </View>
        <View className={'flex flex-col items-center justify-center'}>
          <Text className={'text-black text-lg font-semibold'}>10%</Text>
          <Text className={'text-black'}>Cap</Text>
        </View>
        <AntDesign name="delete" size={18} color="gray" onPress={onDelete} />

      </View>
    </TouchableOpacity>
  );
};

export default AccountListItem;

//@ts-nocheck
// import React from 'react';
// import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import Account from '../model/Account';
// import { withObservables } from '@nozbe/watermelondb/react';
//
// type AccountListItem = {
//   account: Account;
// };
//
// function AccountListItem({ account }: AccountListItem) {
//   return (
//     <TouchableOpacity activeOpacity={0.7} className={'flex flex-row my-1 items-center border rounded-md border-black' +
//       ' border-1' +
//       ' justify-between px-7 py-3' +
//       ' text-black'}>
//       <Text className={'text-black text-lg font-semibold'}>{account?.name}</Text>
//       <View className={'flex flex-row items-center gap-6'}>
//         <View className={'flex flex-col items-center justify-center'}>
//           <Text className={'text-black text-lg font-semibold'}>{account?.cap}%</Text>
//           <Text className={'text-black'}>Cap</Text>
//         </View>
//         <View className={'flex flex-col items-center justify-center'}>
//           <Text className={'text-black text-lg font-semibold'}>{account?.tap}%</Text>
//           <Text className={'text-black'}>Cap</Text>
//         </View>
//         <View className={'flex flex-col items-center justify-center'}>
//           <Text className={'text-black text-lg font-semibold'}>10%</Text>
//           <Text className={'text-black'}>Cap</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };
//
// const enhance = withObservables(
//   ['account'],
//   ({ account }: AccountListItem) => ({
//     account,
//   })
// );
//
// export default enhance(AccountListItem);
