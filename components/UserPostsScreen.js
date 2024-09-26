import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';

const UserPostsScreen = ({ route, navigation }) => {
  const { userId, userName } = route.params;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      setPosts(response.data);
    } catch (error) {
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>Title: {item.title}</Text>
      <Text>Body: {item.body}</Text>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <Text>User: {userName}</Text>
      <FlatList
        data={posts.slice(0, page * 5)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default UserPostsScreen;
