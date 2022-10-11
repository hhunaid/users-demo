import {Image, StyleSheet, Text, View} from "react-native";
import useUserShow from "../hooks/use-user-show";

const UserDetailsScreen = ({route}) => {
  const {user, isLoading} = useUserShow(route.params.user.id)

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: user.avatar}}/>
      <View style={styles.infoContainer}>
        <Text style={styles.heading}>Full name</Text>
        <Text style={styles.title}>{`${user.first_name} ${user.last_name}`}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.heading}>Email</Text>
        <Text>{user.email}</Text>
      </View>
    </View>
  )
}

export default UserDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  avatar: {
    width: '40%',
    aspectRatio: 1,
    marginTop: 12,
    alignSelf: 'center'
  },
  infoContainer: {
    marginTop: 12,
    marginStart: 8
  },
  heading: {
    fontWeight: 'bold'
  },
})
