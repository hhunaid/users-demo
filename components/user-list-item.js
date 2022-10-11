import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const UserListItem = ({ user, onPress }) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress} key={user.email}>
      <Image style={styles.avatar} source={{uri: user.avatar}}/>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{ `${user.first_name} ${user.last_name}` }</Text>
        <Text>{ user.email }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default UserListItem

const styles = StyleSheet.create({
  listItem: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 12
  },
  avatar: {
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: 'bold'
  },
  contentContainer: {
    justifyContent: 'space-between',
    paddingStart: 12
  }
})
