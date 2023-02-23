import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { COLORS } from "./../Colors";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

const DataScreen = () => {
  const route = useRoute();
  const [loanAmount, setLoanAmount] = React.useState([]);
  const [hasLoan, setHasLoan] = useState(true);

  // const getLoan = () => {
  //   axios
  //     .post("http://172.20.10.4/vb/fetchMyLoans.php", {
  //       memberID: "1",
  //     })
  //     .then(function (response) {
  //       setLoanAmount(response);
  //       console.log(response.amount);
  //       alert(response);
  //     });
  // };

  async function getLoan() {
    try {
      const response = await axios.post("http://172.20.10.4/vb/fetchMyLoans.php", {memberID: "1"});
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View>
      <View style={{ paddingTop: 20, paddingHorizontal: 10 }}>
        {/* {!hasLoan ? (
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
              K {loanAmount}
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
                Pay {}
              </Text>
            </TouchableOpacity>
          </View>
        )} */}
        <Text>{loanAmount.amount}</Text>
        <TouchableOpacity onPress={getLoan}>
          <Text>Click her to view your loan</Text>
        </TouchableOpacity>
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
