import { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import RenderUserList from "./RenderUserList";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/redux/userSlice";
import LoadingOverlay from "../ui/LoadingOverlay";

const UserList = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <LoadingOverlay message="Fetching Data..." />;
  }

  const renderUserDetails = ({ item }) => {
    return <RenderUserList {...item} />;
  };
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderUserDetails}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserList;
