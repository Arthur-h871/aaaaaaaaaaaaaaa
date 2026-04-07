import { View, Text, TextInput } from "react-native";

type CampoTextoProps = {
  negociodocampo: string;
  textoemcimadocampo: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function Campotexto({
  negociodocampo,
  textoemcimadocampo,
  value,
  onChangeText,
}: CampoTextoProps) {
  return (
    <View style={{ marginBottom: 20, width: "70%", borderRadius: 5 }}>
      <Text>{textoemcimadocampo}</Text>
      <TextInput
        placeholder={negociodocampo}
        value={value}
        onChangeText={onChangeText}
        style={{ backgroundColor: "#43485a", borderRadius: 5, padding: 10, color: "#fff" }}
      />
    </View>
  );
}