import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React from "react";

export default function Slider() {
  const sliderList = [
    {
      id: 1,
      name: "slider-1",
      imageUrl:
        "https://storage.googleapis.com/www-saludiario-com/wp-content/uploads/2023/03/afc2e96c-mejores-hospitales-del-mundo.jpg",
    },
    {
      id: 2,
      name: "slider-2",
      imageUrl:
        "https://www.health.gov.lk/wp-content/uploads/2022/11/hospital.png",
    },
  ];
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <>
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: Dimensions.get("screen").width * 0.9,
                height: 170,
                borderRadius: 10,
                margin: 2,
              }}
            />
          </>
        )}
      />
    </View>
  );
}
