import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { useRepositories } from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import { useNavigate } from "react-router-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import TextInput from "./TextInput";
import ItemSeparator from "./ItemSeparator";

const RepositoryList = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });
  const [searchKeyword, setSearchKeyword] = useState("");
  const { repositories, fetchMore } = useRepositories({
    first: 5,
    orderBy: order.orderBy,
    orderDirection: order.orderDirection,
    searchKeyword,
  });

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repo/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      ListHeaderComponent={
        <View style={{ padding: 8, gap: 8 }}>
          <TextInput
            placeholder="Search repository"
            value={searchKeyword}
            onChangeText={(value) => setSearchKeyword(value)}
          />
          <Picker
            selectedValue={order}
            onValueChange={(value) => setOrder(value)}
          >
            <Picker.Item
              label="Latest repositories"
              value={{ orderBy: "CREATED_AT", orderDirection: "DESC" }}
            />
            <Picker.Item
              label="Highest rated repositories"
              value={{ orderBy: "RATING_AVERAGE", orderDirection: "DESC" }}
            />
            <Picker.Item
              label="Lowest rated repositories"
              value={{ orderBy: "RATING_AVERAGE", orderDirection: "ASC" }}
            />
          </Picker>
        </View>
      }
      onEndReached={() => fetchMore()}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryList;
