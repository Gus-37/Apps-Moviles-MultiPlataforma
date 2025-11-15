import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { Text, Card, Button, ButtonText, HStack, VStack, Box, Badge, BadgeText, Toast, ToastDescription, ToastTitle, useToast, Icon } from '@gluestack-ui/themed';
import { ShoppingCart, CheckCircle } from 'lucide-react-native';

// --- COMPONENTE TABLE (DENTRO DE UN CARD) ---
const ProductTable = () => (
    <Card p="$4" m="$2" borderRadius="$lg">
        <VStack space="md">
            <HStack justifyContent="space-between" borderBottomWidth={1} borderBottomColor="$gray200" pb="$2">
                <Text flex={1.5} fontWeight="$bold" textAlign="center">Pro</Text>
                <Text flex={1} fontWeight="$bold" textAlign="center">Size</Text>
                <Text flex={1} fontWeight="$bold" textAlign="center">Ava</Text>
                <Text flex={1} fontWeight="$bold" textAlign="center">ST</Text>
            </HStack>

            <HStack justifyContent="space-between" alignItems="center">
                <Text flex={1.5} textAlign="center">Vestido</Text>
                <Text flex={1} textAlign="center">Medio</Text>
                <Text flex={1} textAlign="center">12</Text>
                <Box flex={1} alignItems="center">
                    <Icon as={ShoppingCart} size="sm" color="$gray700" />
                </Box>
            </HStack>

            <HStack justifyContent="space-between" alignItems="center">
                <Text flex={1.5} textAlign="center">Aretes</Text>
                <Text flex={1} textAlign="center">Grande</Text>
                <Text flex={1} textAlign="center">0</Text>
                <Box flex={1} alignItems="center">
                    <Badge size="sm" variant="solid" action="error">
                        <BadgeText>AGOTADO</BadgeText>
                    </Badge>
                </Box>
            </HStack>

            <Text size="sm" color="$gray600" textAlign="center" bg="$gray100" p="$2" borderRadius="$sm">
                Showing recent inventory
            </Text>
        </VStack>
    </Card>
);

// --- PANTALLA DISPLAY PRINCIPAL ---
export default function DisplayScreen() {
    const toast = useToast();
    
    const handleAddToCart = () => {
        toast.show({
            placement: "top",
            render: ({ id }) => {
                return (
                    <Toast action="success" variant="solid">
                        <HStack space="xs" alignItems="center">
                            <Icon as={CheckCircle} size="sm" color="$white" />
                            <VStack space="xs">
                                <ToastTitle>Success</ToastTitle>
                                <ToastDescription>
                                    Your Order was placed Successfully, Thanks for shopping with us!
                                </ToastDescription>
                            </VStack>
                        </HStack>
                    </Toast>
                )
            }
        })
    };

    return (
        <View style={styles.container}>
            <Card
                m="$3"
                p="$4"
                borderRadius="$lg"
                shadowColor="$gray900"
                shadowOpacity={0.1}
                shadowRadius={8}
                elevation={3}
            >
                <Image
                    source={{ uri: 'https://gluestack.github.io/public-blog-video-assets/saree.png' }}
                    style={styles.image}
                    resizeMode="cover"
                />
                
                <VStack space="sm" mt="$3">
                    <Text size="sm" color="$gray600">Fashion Clothing</Text>
                    <Text size="xl" fontWeight="$bold">Cotton Kurta</Text>
                    <Text size="sm" color="$gray700">
                        Floral embroidered notch neck thread work cotton kurta in white and black.
                    </Text>
                </VStack>

                <HStack space="md" mt="$4">
                    <Button
                        flex={1}
                        onPress={handleAddToCart}
                        bg="$gray800"
                        borderRadius="$lg"
                    >
                        <ButtonText>Add to cart</ButtonText>
                    </Button>
                    <Button
                        flex={1}
                        variant="outline"
                        borderRadius="$lg"
                    >
                        <ButtonText color="$gray800">Wishlist</ButtonText>
                    </Button>
                </HStack>
            </Card>
            
            <ProductTable />
        </View>
    );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    image: {
        width: '100%',
        height: 240,
        borderRadius: 8,
    },
});