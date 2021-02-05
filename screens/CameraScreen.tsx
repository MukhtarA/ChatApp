import React from "react";
import { View } from "react-native";
import { useRoute } from '@react-navigation/native';
import CameraComponent from "../components/CameraComponent";

const CameraScreen = () => {
    const route = useRoute();
    return(
        <View style={{width: '100%', height: '100%'}}>
            <CameraComponent />
        </View>
    );
}

export default CameraScreen;
