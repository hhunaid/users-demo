import {FlatList, StyleSheet, View} from "react-native";
import UserListItem from "./user-list-item";
import useUsersIndex from "../hooks/use-users-index";

const UsersScreen = ({navigation}) => {
  const [users, fetchNextPage] = useUsersIndex()

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={users}
        renderItem={({item}) => <UserListItem user={item} onPress={() => navigation.navigate('UserDetailsScreen', { user: item })}/>}
        onEndReached={fetchNextPage}
        ItemSeparatorComponent={() => <View style={styles.divider}/>}
      />
    </View>
  )
}

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  list: {
    flex: 1
  },
  divider: {
    height: 1,
    backgroundColor: '#D3D3D3'
  }
})
