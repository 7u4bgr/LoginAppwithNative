import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

const HomeScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username && password) {
            Alert.alert("Login Successful", `Welcome ${username}!`);
        } else {
            Alert.alert("Error", "Please enter both username and password.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.loginText}>Login</Text>
                <TextInput 
                    placeholder="Username"
                    placeholderTextColor="gray"
                    style={styles.input} 
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput 
                    placeholder="Password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    style={styles.input} 
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    content: {
        backgroundColor: 'black',
        width: '90%',
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    loginText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    buttonLogin: {
        width: '50%',
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default HomeScreen;
