import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>Name: {item.name}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Phone: {item.phone}</Text>
      <Text>Website: {item.website}</Text>
      <Button
        title="View Posts"
        onPress={() => navigation.navigate('UserPosts', { userId: item.id, userName: item.name })}
      />
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <FlatList
      data={users.slice(0, page * 5)}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={() => setPage(page + 1)}
      onEndReachedThreshold={0.5}
    />
  );
};

export default HomeScreen;
