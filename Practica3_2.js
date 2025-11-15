import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GluestackUIProvider, Box, Text, VStack, Button, Image, Card, Toast, useToast } from "@gluestack-ui/themed";
import { Badge } from "@gluestack-ui/themed";
import { ShoppingCart, AlertCircle } from "lucide-react-native";
import { ScrollView, View } from "react-native";

const Drawer = createDrawerNavigator();

function HomeScreen() {
  const toast = useToast();

  const handleAddToCart = (product) => {
    toast.show({
      render: () => (
        <Toast bgColor="$green600" action="success">
          <Text color="white">{product} añadido al carrito 🛒</Text>
        </Toast>
      ),
    });
  };

  const products = [
    { id: 1, name: "Auriculares Bluetooth", price: "$250", stock: "Agotado" },
    { id: 2, name: "Mouse Gamer", price: "$320", stock: "Disponible" },
    { id: 3, name: "Teclado Mecánico", price: "$600", stock: "Agotado" },
  ];

  return (
    <ScrollView style={{ backgroundColor: "#f4f4f4" }}>
      <VStack space="md" p="$4" alignItems="center">
        <Text size="2xl" bold color="$indigo600">Pantalla de Productos</Text>

        <Image
          source={{ uri: "https://source.unsplash.com/random/400x200?tech" }}
          alt="Imagen principal"
          style={{ width: 350, height: 180, borderRadius: 12 }}
        />

        <Button
          onPress={() => handleAddToCart("Producto de ejemplo")}
          action="primary"
        >
          <Text color="white">Add to cart</Text>
        </Button>

        <Card mt="$4" p="$3" w="90%">
          <Text bold size="lg" mb="$2">Tabla de Productos</Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            {products.map((p, index) => (
              <View
                key={p.id}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                  backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                }}
              >
                <Text w="30%">{p.name}</Text>
                <Text w="20%">{p.price}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {p.stock === "Agotado" ? (
                    <Badge action="error" variant="solid" mr="$2">
                      <AlertCircle size={14} color="white" />
                      <Text color="white" ml="$1">Sold out</Text>
                    </Badge>
                  ) : (
                    <Badge action="success" variant="solid" mr="$2">
                      <Text color="white">OK</Text>
                    </Badge>
                  )}
                  <ShoppingCart color="#4a4a4a" size={20} />
                </View>
              </View>
            ))}
          </View>
        </Card>
      </VStack>
    </ScrollView>
  );
}

export default function App() {
  return (
    <GluestackUIProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#6200ee" },
            headerTintColor: "#fff",
            headerTitle: "Gustavo Rangel",
          }}
        >
          <Drawer.Screen name="Inicio" component={HomeScreen} />
          <Drawer.Screen name="Configuración" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
