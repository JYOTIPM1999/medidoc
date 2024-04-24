import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";

export default function SearchBars({ setSearchText }) {
  const [searchInput, setSearchInput] = useState();
  return (
    <View style={{ marginTop: 15 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
          borderWidth: 0.7,
          borderColor: Colors.GRAY,
          padding: 7,
          borderRadius: 8,
        }}
      >
        <Feather name="search" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder="Search"
          onChangeText={(value) => setSearchInput(value)}
          onSubmitEditing={() => setSearchText(searchInput)}
          style={{ width: "100%" }}
        />
      </View>
    </View>
  );
}
// 1.25;
