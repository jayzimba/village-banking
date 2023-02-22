import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { COLORS } from "./../Colors";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";

const DataScreen = () => {
  const route = useRoute();

  const [hasLoan, setHasLoan] = useState(true);
  return (
    <View>
      <View style={{ paddingTop: 20, paddingHorizontal: 10 }}>
        {!hasLoan ? (
          <View>
            <Text>click the button below to get a loan</Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              You have No Pending Loan
            </Text>

            <TouchableOpacity
              style={styles.loanBtn}
              onPress={() => this.props.navigation.navigate("Loan")}
            >
              <Text style={{ color: "white", fontSize: 23 }}>Loan</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={{ fontSize: 14 }}>You have a pending loan of</Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: COLORS.accent }}
            >
              K {3000}
            </Text>
            <Text>
              You are adviced to pay back the loan in due time thank you.{" "}
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 18 }}>
              click the button below to pay back your loan
            </Text>

            <TouchableOpacity
              style={styles.loanBtn}
              onPress={() => this.props.navigation.navigate("Loan")}
            >
              <Text style={{ color: "white", fontSize: 23 }}>
                Pay {"K3000"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
export default class MyLoan extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    hasLoan: true,
  };

  render() {
    return <DataScreen />;
  }
}

const styles = StyleSheet.create({
  loanBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#0b87f3",
    borderRadius: 10,
    marginVertical: 30,
  },
});
