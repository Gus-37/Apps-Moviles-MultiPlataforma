import React, { useState, createContext, useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { GluestackUIProvider, HStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Practica1 from './Practica1';
import Ejer_Navegacion from './Ejer_Navegacion';
import Practica3_1 from './Practica3_1';
import ProfileScreen from './ProfileScreen';
import Display from './Display';
import Practica3_2 from './Practica3_2';

// Contexto para manejar el color dinámico del header
const HeaderColorContext = createContext({ color: '#1E3A8A', setColor: () => {} });
const useHeaderColor = () => useContext(HeaderColorContext);

const Drawer = createDrawerNavigator();

// Paleta de colores para la barra de herramientas
const HEADER_COLORS = ['#1E3A8A', '#047857', '#7C2D12', '#6D28D9', '#1E40AF', '#B45309'];

function ColorSelector() {
  const { color, setColor } = useHeaderColor();
  return (
    <HStack flexWrap="wrap" px="$3" pb="$3" space="sm">
      {HEADER_COLORS.map(c => (
        <Pressable
          key={c}
          onPress={() => setColor(c)}
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            margin: 4,
            backgroundColor: c,
            borderWidth: c === color ? 3 : 1,
            borderColor: c === color ? '#fff' : '#ccc'
          }}
        />
      ))}
    </HStack>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>Color Toolbar</Text>
        <ColorSelector />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function ScreenWrapper({ children }) {
  return <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>{children}</View>;
}

export default function App() {
  const [color, setColor] = useState('#1E3A8A');
  // Asumido nombre completo; reemplaza por el tuyo real
  const fullName = 'Gustavo';

  return (
    <GluestackUIProvider config={config}>
      <HeaderColorContext.Provider value={{ color, setColor }}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
              headerStyle: { backgroundColor: color },
              headerTintColor: '#fff',
              headerTitle: fullName,
              headerTitleStyle: { fontWeight: 'bold' }
            }}
          >
            <Drawer.Screen name="Display" options={{ title: 'Inventario' }}>
              {() => (
                <ScreenWrapper>
                  <Display />
                </ScreenWrapper>
              )}
            </Drawer.Screen>
            <Drawer.Screen name="Perfil" component={ProfileScreen} />
            <Drawer.Screen name="Practica1" component={Practica1} options={{ title: 'Login' }} />
            <Drawer.Screen name="Navegacion" component={Ejer_Navegacion} />
            <Drawer.Screen name="Practica3_1" component={Practica3_1} options={{ title: 'Drawer Ejemplo' }} />
            <Drawer.Screen name="Practica3_2" component={Practica3_2} />
          </Drawer.Navigator>
        </NavigationContainer>
      </HeaderColorContext.Provider>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    paddingTop: 36,
    paddingHorizontal: 16,
    backgroundColor: '#111827'
  },
  drawerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8
  }
});
