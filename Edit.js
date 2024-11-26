import React, { useState } from "react";
import { pokemon } from "./Data";
import { TextInput, View, Text, Button, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Edit = ({ navigation, route }) => {
    const { key, number, type, index } = route.params;
    const [pokeName, setPokeName] = useState(key);
    const [pokeNum, setPokeNum] = useState(number);
    const [pokeType, setPokeType] = useState(type);

    const typeToIndex = {
        "Fire": 0,
        "Grass": 1,
        "Water": 2,
        "Electric": 3,
        "Psychic": 4,
    };

    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Pokemon Name:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10 }}
                value={pokeName}
                onChangeText={(text) => setPokeName(text)}
            />

            <Text style={{ fontWeight: "bold" }}>Pokemon Number:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10 }}
                value={pokeNum.toString()}
                onChangeText={(text) => setPokeNum(text)}
            />

            <Text style={{ fontWeight: "bold" }}>Pokemon Type:</Text>
            <RNPickerSelect
                value={pokeType}
                onValueChange={(value) => setPokeType(value)}
                items={[
                    { label: "Fire", value: "Fire" },
                    { label: "Grass", value: "Grass" },
                    { label: "Water", value: "Water" },
                    { label: "Electric", value: "Electric" },
                    { label: "Psychic", value: "Psychic" },
                ]}
            />

            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <Button
                        title="Save"
                        onPress={() => {
                            const indexNum = typeToIndex[pokeType];

                            pokemon[indexNum].data[index] = {
                                name: pokeName,
                                number: parseInt(pokeNum),
                            };

                            navigation.navigate("Home");
                        }}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Button
                        title="Delete"
                        onPress={() => {
                            const indexNum = typeToIndex[pokeType];

                            Alert.alert("Are you sure?", "", [
                                {
                                    text: "Yes",
                                    onPress: () => {
                                        pokemon[indexNum].data.splice(index, 1);
                                        navigation.navigate("Home");
                                    },
                                },
                                { text: "No" },
                            ]);
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default Edit;




