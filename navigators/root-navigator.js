import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UsersScreen from "../components/users-screen";
import queryClient from "../query-client";
import {QueryClientProvider} from "@tanstack/react-query";
import UserDetailsScreen from "../components/user-details-screen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack.Navigator>
        <Stack.Screen name="UsersScreen" component={UsersScreen} options={{title: 'Users'}}/>
        <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen}
                      options={({route}) => ({title: route.params.user.first_name})}/>
      </Stack.Navigator>
    </QueryClientProvider>
  )
}

export default RootNavigator;
