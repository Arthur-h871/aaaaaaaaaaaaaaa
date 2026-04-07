import { useState } from "react";
import { View, Text } from "react-native";

import Campotexto from "../components/aaaaaaaaTexto/campotexto";
import Botaofoda from "../components/botaofoda/botaofoda";
import HeaderLegal from "../components/headerlegal/headerlegal";

export default function HomeScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const enviar = () => {
    setMostrarResultado(true);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%"}}>
      <HeaderLegal />
      <Campotexto
        negociodocampo="Digite um texto mt foda"
        textoemcimadocampo="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <Campotexto
        negociodocampo="Digite outro texto mt foda"
        textoemcimadocampo="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Botaofoda onPress={enviar} />

      {mostrarResultado && (
        <View style={{ position: "absolute", bottom: 30, alignItems: "center" }}>
          <Text>Nome: {nome}</Text>
          <Text>Email: {email}</Text>
        </View>
      )}
    </View>
  );
}