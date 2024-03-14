import { FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

const DrawerLayout = () => (
  <Drawer>
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: '',
        drawerLabel: 'Início',
        headerTransparent: true,
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />
      }}
    />
    <Drawer.Screen
      name="two"
      options={{
        headerTitle: 'Prontuário',
        drawerLabel: 'Prontuário',
        headerTransparent: true,
        drawerIcon: ({ size, color }) => (
          <FontAwesome name="user-md" size={size} color={color} />
        ),
        headerRight: () => (
          <Link href="/modal" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color="gray"
                  style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    />
    <Drawer.Screen
      name="hospitals"
      options={{
        headerTitle: 'Hospitais',
        drawerLabel: 'Hospitais',
        headerTransparent: true,
        drawerIcon: ({ size, color }) => (
          <FontAwesome5 name="hospital-alt" size={size} color={color} />
        ),
        headerRight: () => (
          <Link href="/modal" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color="gray"
                  style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    />
  </Drawer>
);

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
});

export default DrawerLayout;
