import { View, Image } from "react-native";


export default function HeaderLegal() {
    return (
        <View style={{ width: "100%", height: 150, backgroundColor: "#282c34", alignItems: "center", justifyContent: "center" }}>
            <Image
                source={require("../../assets/images/react-logo.png")}
                style={{ width: 80, height: 80 }}
            />
        </View>
    );
}