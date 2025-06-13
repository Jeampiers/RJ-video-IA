
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function EditorScreen() {
  const [videoName, setVideoName] = useState(null);

  const pickVideo = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: 'video/*' });
    if (result.assets && result.assets.length > 0) {
      setVideoName(result.assets[0].name);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cargar video desde el teléfono:</Text>
      <Button title="Seleccionar Video" onPress={pickVideo} />
      {videoName && <Text style={styles.videoName}>📹 {videoName}</Text>}
      <View style={styles.exportButton}>
        <Button title="Aplicar IA y Exportar" onPress={() => alert('IA simulada aplicada')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center'
  },
  label: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10
  },
  videoName: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16
  },
  exportButton: {
    marginTop: 30
  }
});
