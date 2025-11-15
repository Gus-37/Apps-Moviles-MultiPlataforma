import React, { useState, useEffect } from 'react';
import {
    Avatar, AvatarFallbackText, AvatarImage, Box, Image, Text, HStack, VStack, ScrollView, Center, Icon, StarIcon, ShareIcon, EditIcon, BadgeIcon, CheckCircleIcon, GluestackUIProvider, Pressable,
} from '@gluestack-ui/themed';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { config } from "@gluestack-ui/config";
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function MainProfile() {
    const [avatarUri, setAvatarUri] = useState('https://randomuser.me/api/portraits/men/75.jpg');

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permiso denegado', 'Se necesitan permisos para acceder a la galería');
            }
        })();
    }, []);

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.8,
            });
            if (!result.canceled) {
                const uri = result.assets && result.assets.length > 0 ? result.assets[0].uri : result.uri;
                setAvatarUri(uri);
            }
        } catch (e) {
            console.log('ImagePicker error', e);
        }
    };

    return (
        <ScrollView>
            <VStack space="md" p="$4">
                <Center>
                    <Box position="relative">
                        <Avatar size="2xl" borderRadius="$full">
                            <AvatarFallbackText>RT</AvatarFallbackText>
                            <AvatarImage
                                source={{ uri: avatarUri }}
                            />
                        </Avatar>

                        <Pressable onPress={pickImage} position="absolute" bottom={0} right={0}>
                            <Box bg="$coolGray100" p="$2" borderRadius="$full">
                                <Icon as={EditIcon} size="sm" color="$blue500" />
                            </Box>
                        </Pressable>
                    </Box>

                    <VStack space="xs" mt="$2" alignItems="center">
                        <Text size="xl" fontWeight="$bold">Gustavo Diaz</Text>
                        <Text size="sm" color="$coolGray600">Ingeniero</Text>
                        <Text size="sm" color="$coolGray600">Aguascalientes , Ags</Text>
                    </VStack>

                    <HStack space="2xl" mt="$4" justifyContent="center">
                        <VStack alignItems="center">
                            <HStack alignItems="center" space="xs">
                                <Text size="lg" fontWeight="$bold">10</Text>
                            </HStack>
                            <Text size="sm" color="$coolGray600">Following</Text>
                        </VStack>
                        <VStack alignItems="center" mx="$6">
                            <HStack alignItems="center" space="xs">
                                <Text size="lg" fontWeight="$bold">1000</Text>
                            </HStack>
                            <Text size="sm" color="$coolGray600">Followers</Text>
                        </VStack>
                        <VStack alignItems="center">
                            <HStack alignItems="center" space="xs">
                                <Text size="lg" fontWeight="$bold">5K</Text>
                            </HStack>
                            <Text size="sm" color="$coolGray600">Likes</Text>
                        </VStack>
                    </HStack>
                </Center>

                <Center mt="$4">
                    <HStack space="xl" px="$4">
                        <Box bg="$coolGray100" p="$3" borderRadius="$lg">
                            <Icon as={ShareIcon} size="lg" color="$blue500" />
                        </Box>
                        <Box bg="$coolGray100" p="$3" borderRadius="$lg">
                            <Icon as={EditIcon} size="lg" color="$blue500" />
                        </Box>
                        <Box bg="$coolGray100" p="$3" borderRadius="$lg">
                            <Icon as={StarIcon} size="lg" color="$blue500" />
                        </Box>
                    </HStack>
                </Center>

                <Box width="100%" px="$4">
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=870'
                        }}
                        alt="nature image"
                        height={150}
                        width="100%"
                        borderRadius="$xl"
                        resizeMode="cover"
                    />
                </Box>

                <HStack justifyContent="space-between" px="$4" mt="$4">
                    <Box flex={1} mx="$2">
                        <Image
                            source={{
                                    uri: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&q=60&w=500'
                                }}
                            alt="nature image"
                            size="xl"
                            borderRadius="$xl"
                        />
                    </Box>
                    <Box flex={1} mx="$2">
                        <Image
                            source={{
                                    uri: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&auto=format&fit=crop&q=60&w=500'
                                }}
                            alt="architecture image"
                            size="xl"
                            borderRadius="$xl"
                        />
                    </Box>
                    <Box flex={1} mx="$2">
                        <Image
                            source={{
                                    uri: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&q=60&w=500'
                                }}
                            alt="travel image"
                            size="xl"
                            borderRadius="$xl"
                        />
                    </Box>
                </HStack>
            </VStack>
        </ScrollView>
    );
}

function EditProfile() {
    return (
        <Box flex={1} bg="$backgroundLight100">
            <VStack space="md" p="$4">
                <Text size="xl" color="$primary500" fontWeight="$bold">Editar Perfil</Text>
                <Box bg="$backgroundLight200" p="$4" rounded="$lg">
                    <VStack space="md">
                        <HStack alignItems="center" space="sm">
                            <Icon as={Ionicons} name="person-outline" size="lg" color="$textLight700" />
                            <Text size="md" color="$textLight900">Cambiar foto de perfil</Text>
                        </HStack>
                        <HStack alignItems="center" space="sm">
                            <Icon as={Ionicons} name="create-outline" size="lg" color="$textLight700" />
                            <Text size="md" color="$textLight900">Editar información</Text>
                        </HStack>
                        <HStack alignItems="center" space="sm">
                            <Icon as={Ionicons} name="settings-outline" size="lg" color="$textLight700" />
                            <Text size="md" color="$textLight900">Configuración de cuenta</Text>
                        </HStack>
                    </VStack>
                </Box>
            </VStack>
        </Box>
    );
}

export default function ProfileScreen() {
    return (
        <GluestackUIProvider config={config}>
            <NavigationContainer independent={true}>
                <Drawer.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: "#673AB7" },
                        headerTintColor: "#fff",
                        drawerStyle: { backgroundColor: "#fff" },
                        headerTitle: () => (
                            <Text color="$white" fontSize="$md" fontWeight="$bold">
                                Mi Perfil
                            </Text>
                        ),
                    }}
                >
                    <Drawer.Screen
                        name="MainProfile"
                        component={MainProfile}
                        options={{
                            drawerLabel: 'Perfil',
                            drawerIcon: ({ color }) => (
                                <Icon as={Ionicons} name="person-outline" size="md" color={color} />
                            )
                        }}
                    />
                    <Drawer.Screen
                        name="EditProfile"
                        component={EditProfile}
                        options={{
                            drawerLabel: 'Editar Perfil',
                            drawerIcon: ({ color }) => (
                                <Icon as={Ionicons} name="create-outline" size="md" color={color} />
                            )
                        }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </GluestackUIProvider>
    );
}