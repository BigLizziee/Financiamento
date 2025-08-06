import { useState } from "react";
import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  title: {
    fontSize: 26,
    color: "#AA2200",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "#121212",
  },
  input: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff"
  }
});

export default function Index() {
  const [valorBem, setValorBem] = useState("");
  const [numParcelas, setNumParcelas] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [taxasAdicionais, setTaxasAdicionais] = useState("");
  const [valorParcela, setValorParcela] = useState(0);
  const [montanteTotal, setMontanteTotal] = useState(0);

  const calcularFinanciamento = () => {
    const C = parseFloat(valorBem) + parseFloat(taxasAdicionais); // Valor total com taxas
    const i = parseFloat(taxaJuros) / 100; // Convertendo para decimal
    const t = parseInt(numParcelas);

    // Cálculo do montante total usando a fórmula dos juros compostos
    const M = C * Math.pow((1 + i), t);
    const parcela = M / t; // Valor da parcela

    setMontanteTotal(M);
    setValorParcela(parcela);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador de Financiamento</Text>
      <TextInput
        placeholder="Valor do bem"
        style={styles.input}
        value={valorBem}
        onChangeText={setValorBem}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Número de parcelas"
        style={styles.input}
        value={numParcelas}
        onChangeText={setNumParcelas}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Taxa de juros mensal (%)"
        style={styles.input}
        value={taxaJuros}
        onChangeText={setTaxaJuros}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Taxas adicionais"
        style={styles.input}
        value={taxasAdicionais}
        onChangeText={setTaxasAdicionais}
        keyboardType="numeric"
      />
      <Button
        title="Calcular Financiamento"
        onPress={calcularFinanciamento}
      />
      <Text style={styles.text}>Valor da Parcela: R$ {valorParcela.toFixed(2)}</Text>
      <Text style={styles.text}>Montante Total: R$ {montanteTotal.toFixed(2)}</Text>
    </View>
  );
}
