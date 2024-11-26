import React, {useState} from "react";
import {pokemon} from "./Data";
import {TextInput, View, Text, Button} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Add = ({navigation}) => {
    const [pokemonName, setPokemonName] = useState("");  // Renamed to avoid conflict
    const [pokeNum, setPokeNum] = useState("");          // Pokemon number state
    const [type, setType] = useState("Fire");            // Default type is Fire

    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: "bold"}}>Pokemon name:</Text>
                <TextInput
                    style={{borderWidth: 1}}
                    onChangeText={(pokeName) => setPokemonName(pokeName)}  // Update name
                />
                <Text style={{fontWeight: "bold"}}>Pokemon number:</Text>
                <TextInput
                    style={{borderWidth: 1}}
                    onChangeText={(pokeNum) => setPokeNum(pokeNum)}  // Update number
                />
            </View>
            <View style={{ padding: 10 }}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}  // Update type
                    items={[
                        {label: "Fire", value: "Fire"},
                        {label: "Grass", value: "Grass"},
                        {label: "Water", value: "Water"},
                        {label: "Electric", value: "Electric"},
                        {label: "Psychic", value: "Psychic"},
                    ]}
                />
            </View>
            <Button
                title="SUBMIT"
                onPress={() => {
                    const newItem = { name: pokemonName, number: pokeNum };
                    let indexNum = 0;
                    if (type === "Fire") {
                        indexNum = 0;
                    } else if (type === "Grass") {
                        indexNum = 1;
                    } else if (type === "Water") {
                        indexNum = 2;
                    } else if (type === "Electric") {
                        indexNum = 3;
                    } else if (type === "Psychic") {
                        indexNum = 4;
                    }
                    pokemon[indexNum].data.push(newItem);
                    navigation.navigate("Home");
                }}
            />
        </View>
    );
};

export default Add;
