#!/bin/bash
echo "watchman watch-del-all..."
watchman watch-del-all

echo "rm -rf node_modules..."
rm -rf node_modules

echo "yarn install..."
yarn install

echo "rm -rf /tmp/metro-bundler-cache-*..."
rm -rf /tmp/metro-bundler-cache-*

echo "rm -rf /tmp/haste-map-react-native-packager-*..."
rm -rf /tmp/haste-map-react-native-packager-*