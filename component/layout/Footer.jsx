import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This text writed by Elchin 2025</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        position: 'absolute', // **Footer'ı sabitliyoruz**
        bottom: 0, // **Ekranın en altına sabitliyor**
        width: '100%', // **Tam genişlikte yapıyor**
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default Footer;
