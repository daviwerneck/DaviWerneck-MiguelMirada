import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Touchable } from 'react-native';
import {useState} from 'react';

{/* Criar variáveis para as imagens */}
const face1 = require('./assets/face1.png');
const face2 = require('./assets/face2.png');
const face3 = require('./assets/face3.png');
const face4 = require('./assets/face4.png');
const face5 = require('./assets/face5.png');
const face6 = require('./assets/face6.png');


export default function App() {
  // Estado para armazenar a face atual do dado e o número anterior
  const [face, setFace] = useState<number>(1);
  const [faceAnterior, setFaceAnterior] = useState<number>(0); // Armazena a face anterior
  const [backgroundColor, setBackgroundColor] = useState<string>('lightgray'); // Cor de fundo
  
  //Array de imagens das faces
  const faces = [face1, face2, face3, face4, face5, face6];

  // Função para gerar um número aleatório diferente do anterior
  function rolarDado() {
    let novaFace;
    // Sorteio até que o número seja diferente do anterior
    do{
      novaFace = Math.floor(Math.random() * 6) + 1;
    } while (novaFace === faceAnterior);

    setFace(novaFace);
    setFaceAnterior(novaFace); // Atualiza o número anterior

    // Altera a cor de fundo com base no número sorteado
    if (novaFace >= 1 && novaFace <= 3){
      setBackgroundColor('lightblue');
    }else{
      setBackgroundColor('darkblue');
    }
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.texto}>Clique no dado para sortear!</Text>
      <TouchableOpacity onPress={rolarDado}>
        <Image source={faces[face - 1]} style={styles.diceImage} />
      </TouchableOpacity>
      <Text style={styles.texto}>Você tirou o número {face}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  diceImage: {
    width: 150,
    height: 150,
  }

});