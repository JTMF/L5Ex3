import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, SectionList} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import {pokemon} from "./Data.js";

const baseURL = "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/";

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    textStyle: {
        fontSize: 15,
        flex: 1,
        marginRIGHT: 10,
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: "center",
        fontWeight: "bold",
    },
    container: {
        flex: 1,
        margin: 10,
        marginTop: 40,
    },
    cardImage: {
        width: 250,
        height: 350,
        resizeMode: "contain",
        alignSelf: "center",
    },
    button: {
        backgroundColor: "lightblue",
        padding: 15,
        alignItems: "center",
        marginBottom: 10,
        borderRadius: 5,
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
})

const Home = ({navigation}) => {
    const renderPoke = ({item, index, section}) => {
        const url = `${baseURL}SV3pt5_EN_${item.number}-2x.png`;
        return (
            <TouchableOpacity style={styles.opacityStyle}
                              onPress={() => {
                                  navigation.navigate("Edit", {
                                      key: item.name,
                                      number: item.number,
                                      type: section.title,
                                      index: index,
                                  });
                              }}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Image source={{uri: url}} style={styles.cardImage}/>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text style={styles.addButtonText}
                          onPress={() => {navigation.navigate("Add")}}>ADD POKEMON</Text>
                </TouchableOpacity>
            </View>
            <SectionList
                sections={pokemon}
                renderItem={renderPoke}
                renderSectionHeader={({section:{title, byColor, icon}})=>(
                    <View style={[styles.header, {backgroundColor: byColor}]}>
                        <Icon name={icon} size={24} color="black"/>
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                )}/>
        </View>
    )
};

export default Home;
