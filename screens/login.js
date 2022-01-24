import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

export default class SigninScreen extends React.Component{
    render(){
        return(
            <View style={styles.View}>
                <ImageBackground
                    source={require("../assets/img/corona_bg.png")}
                    style={styles.backgroundImage}
                >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.button}>
                        <Image
                            source={require("../assets/img/google-icon.png")}
                            style={styles.image}
                        />
                        <Text style={styles.text}>Sign in with google</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "flex-start",
    },
    backgroundImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    text: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 20,
    },
    image: {
        width: 50,
        height: 50,
    },
    button: {
        width: "75%",
        height: 50,
        backgroundColor: 0xFFFFFFDD,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    }
});