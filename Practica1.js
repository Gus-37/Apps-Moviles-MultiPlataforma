import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  console.log("Renderizando componente App..."); 

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [autenticado, setAutenticado] = useState(false);

  const handleLogin = () => {
    if (usuario && password) {
      Alert.alert("Autenticación exitosa", "El usuario ha sido autenticado correctamente ✅");
      setAutenticado(true);
    } else {
      Alert.alert("Error", "Por favor, completa todos los campos.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Encabezado con el nombre */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Login - Gustavo Rangel</Text>
      </View>

      {/* Formulario */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Botón con operador ternario */}
        <Button
          title={autenticado ? "Usuario autenticado" : "Sign In"}
          onPress={handleLogin}
          disabled={autenticado}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#007bff', 
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  form: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
});
