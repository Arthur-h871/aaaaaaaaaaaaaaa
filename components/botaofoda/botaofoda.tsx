import { TouchableOpacity, Text } from "react-native";

type BotaoFodaProps = {
  onPress: () => void;
};

export default function Botaofoda({ onPress }: BotaoFodaProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: "#4878c4", paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", fontWeight: "bold" }}>Enviar</Text>
    </TouchableOpacity>
  );
}