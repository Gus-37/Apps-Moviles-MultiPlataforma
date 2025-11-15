import React from "react";
import { GluestackUIProvider, StyledProvider, Box, Heading, Text, HStack, Pressable, Link, Icon, Checkbox, CheckboxGroup, Radio, RadioGroup, Switch, Textarea, FormControl, Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectContent, SelectItem, SelectBackdrop } from "@gluestack-ui/themed";
import Slider from '@react-native-community/slider';
import { config } from "@gluestack-ui/config";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

function FormScreen() {
  const [pressed, setPressed] = React.useState(false);
  const [switchValue, setSwitchValue] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState(50);
  const [radioValue, setRadioValue] = React.useState("op1");
  const [selectValue, setSelectValue] = React.useState("");
  const [checkedValues, setCheckedValues] = React.useState([]);

  return (
    <Box flex={1} p="$4" bg="$backgroundLight100">
      <Heading mb="$4" color="$primary500">Formulario Gluestack</Heading>

          {/* Checkbox */}
          <FormControl mb="$4">
            <FormControl.Label><Text>Selecciona tus intereses:</Text></FormControl.Label>
            <HStack mb="$2">
              <Pressable onPress={() => setCheckedValues(prev => prev.includes('op1') ? prev.filter(v => v !== 'op1') : [...prev, 'op1'])}>
                <HStack alignItems="center">
                  <Box style={{ width: 20, height: 20, borderWidth: 1, borderColor: '#673AB7', borderRadius: 3, backgroundColor: checkedValues.includes('op1') ? '#673AB7' : 'transparent' }} />
                  <Text ml="$3">Opción 1</Text>
                </HStack>
              </Pressable>
            </HStack>
            <HStack mb="$2">
              <Pressable onPress={() => setCheckedValues(prev => prev.includes('op2') ? prev.filter(v => v !== 'op2') : [...prev, 'op2'])}>
                <HStack alignItems="center">
                  <Box style={{ width: 20, height: 20, borderWidth: 1, borderColor: '#673AB7', borderRadius: 3, backgroundColor: checkedValues.includes('op2') ? '#673AB7' : 'transparent' }} />
                  <Text ml="$3">Opción 2</Text>
                </HStack>
              </Pressable>
            </HStack>
          </FormControl>

          {/* Radio */}
          <FormControl mb="$4">
            <FormControl.Label><Text>Elige una opción:</Text></FormControl.Label>
            <HStack mb="$2">
              <Pressable onPress={() => setRadioValue('op1')}>
                <HStack alignItems="center">
                  <Box style={{ width: 20, height: 20, borderWidth: 1, borderColor: '#673AB7', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    {radioValue === 'op1' && <Box style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: '#673AB7' }} />}
                  </Box>
                  <Text ml="$3">A</Text>
                </HStack>
              </Pressable>
            </HStack>
            <HStack mb="$2">
              <Pressable onPress={() => setRadioValue('op2')}>
                <HStack alignItems="center">
                  <Box style={{ width: 20, height: 20, borderWidth: 1, borderColor: '#673AB7', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    {radioValue === 'op2' && <Box style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: '#673AB7' }} />}
                  </Box>
                  <Text ml="$3">B</Text>
                </HStack>
              </Pressable>
            </HStack>
          </FormControl>

          {/* Select */}
          <FormControl mb="$4">
            <FormControl.Label><Text>Selecciona país:</Text></FormControl.Label>
            <Select selectedValue={selectValue} onValueChange={setSelectValue}>
              <SelectTrigger>
                <SelectInput placeholder="Selecciona..." />
                <SelectIcon mr="$2" as={Ionicons} name="chevron-down" />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectItem label="México" value="mx" />
                  <SelectItem label="Argentina" value="ar" />
                  <SelectItem label="Chile" value="cl" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>

          {/* Slider */}
          <FormControl mb="$4">
            <FormControl.Label><Text>Volumen: {sliderValue}</Text></FormControl.Label>
            {/* Slider que actualiza el estado y redondea el valor para mostrarlo. Se envuelve en Box para forzar ancho. */}
            <Box w="$full" my="$2">
              <Slider
                style={{ width: '100%', height: 40 }}
                value={sliderValue}
                onValueChange={(v) => setSliderValue(Math.round(v))}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#673AB7"
                maximumTrackTintColor="#e6e6e6"
                thumbTintColor="#673AB7"
              />
            </Box>
          </FormControl>

          {/* Switch */}
          <FormControl mb="$4">
            <Pressable onPress={() => setSwitchValue(prev => !prev)}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text>Activar notificaciones:</Text>
                <Switch value={switchValue} onChange={(v) => setSwitchValue(v)} />
              </HStack>
            </Pressable>
          </FormControl>

          {/* TextArea */}
          <FormControl mb="$4">
            <FormControl.Label><Text>Comentarios:</Text></FormControl.Label>
            <Textarea placeholder="Escribe aquí..." />
          </FormControl>

          {/* Link + Icon */}
          <HStack alignItems="center" mb="$4">
            <Icon as={Ionicons} name="link" size="lg" color="$blue500" mr="$2" />
            <Link href="https://gluestack.io" isExternal><Text>Visita Gluestack</Text></Link>
          </HStack>

          {/* Pressable */}
          <Pressable onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)}>
            <Box p="$3" bg={pressed ? "$primary600" : "$primary500"} rounded="$lg">
              <Text color="$white" textAlign="center">{pressed ? "Presionado" : "Presióname"}</Text>
            </Box>
          </Pressable>
        </Box>
  );
}

export default function Practica3_1() {
  return (
    <StyledProvider config={config}>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#673AB7" },
          headerTintColor: "#fff",
          headerTitle: () => (
            <Text color="$white" fontSize="$md" fontWeight="$bold">
              Gustavo Rangel
            </Text>
          ),
        }}
      >
          <Drawer.Screen
            name="Inicio"
            options={{
              drawerLabel: 'Inicio'
            }}
            component={FormScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  </StyledProvider>
  );
}
