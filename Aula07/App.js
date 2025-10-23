// DesafioFinal.js
import React, { useState } from 'react';
import { View, Text, TextInput, SectionList, StyleSheet } from 'react-native';

const produtos = [
  { categoria: 'Eletrônicos', nome: 'Notebook', preco: 4500 },
  { categoria: 'Eletrônicos', nome: 'Smartphone', preco: 2500 },
  { categoria: 'Roupas', nome: 'Camiseta', preco: 80 },
  { categoria: 'Roupas', nome: 'Jaqueta', preco: 300 },
];

export default function DesafioFinal() {
  const [busca, setBusca] = useState('');

  // Agrupar produtos por categoria
  const categorias = [...new Set(produtos.map(p => p.categoria))];
  const dadosAgrupados = categorias.map(cat => ({
    title: cat,
    data: produtos.filter(p => p.categoria === cat && p.nome.toLowerCase().includes(busca.toLowerCase())),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛍️ Catálogo Interativo</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar produto..."
        value={busca}
        onChangeText={setBusca}
      />

      <SectionList
        sections={dadosAgrupados}
        keyExtractor={(item, index) => item.nome + index}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.nome} - R$ {item.preco}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6,
    marginBottom: 12,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    padding: 8,
  },
  item: {
    padding: 10,
  },
});
