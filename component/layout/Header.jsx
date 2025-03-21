import { StyleSheet, View, Text, Image } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Logo</Text>
            <Text style={styles.textHeader}>Menu</Text>
            <Image style={styles.svgHeader} source={require('../../assets/menu1.png')} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // **Buraya ekledim**
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    svgHeader: {
        width: 20,
        height: 20,
    }
})

export default Header;
