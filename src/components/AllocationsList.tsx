import { FlatList } from 'react-native';
import { withObservables } from '@nozbe/watermelondb/react';
import { allocationsCollection } from '../db';
import { Q } from '@nozbe/watermelondb';
import AllocationListItem from "@/src/components/allocation-list-item";
import Allocation from "@/src/model/Allocation";

function AllocationsList({ allocations }: { allocations: Allocation[] }) {
  return (
    <FlatList
      data={allocations}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      renderItem={({ item }) => <AllocationListItem allocation={item} />}
    />
  );
}

const enhance = withObservables([], () => ({
  allocations: allocationsCollection.query(Q.sortBy('created_at', Q.desc)),
}));

export default enhance(AllocationsList);
