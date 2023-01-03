import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { COLORS } from "../../assets/Colors";
import BackToHome from "../components/BackToHome";

export default function PrivacyPolicy() {
  return (
    <View>
      <TouchableOpacity onPress={() => Alert.alert("Back Button Clicked")}>
        <BackToHome />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator="false"
        style={{ marginBottom: 80, paddingBottom: 30 }}
      >
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <MaterialIcons name="policy" size={50} color={COLORS.gray} />
          <Text
            style={{
              marginHorizontal: 20,
              lineHeight: 20,
              letterSpacing: 0.5,
              marginTop: 20,
              fontSize: 16,
            }}
          >
            A village bank is an informal self-help support group of 20-30
            members, predominantly female heads-of-household. If the program is
            “on mission”, in a normal village bank about 50% of all new members
            entering the program will be severely poor—representing families
            with a daily per-capita expenditure (DPCE) of less than US$1; the
            rest are moderately poor or non-poor (DPCE >$2).[citation needed]
            These women meet once a week in the home of one of their members to
            avail themselves of working capital loans, a safe place to save,
            skill training, mentoring, and motivation. Loans normally start at
            $50–$100 and are linked to savings such that the more a client saves
            the more she can borrow. The normal loan period is four months and
            is repaid in 16 weekly installments.[1] At the end of 2006, 95% of
            clients covered by a benchmark sample of 71 NGOs and institutions
            engaged in village bank lending were women.[2] To eliminate the need
            for collateral (the poor man's obstacle to receiving bank loans),
            village banks rely on a variation of the solidarity lending
            methodology. It relies on a system of cross-guarantees, where each
            member of a village bank ensures the loan of every other member.
            This system gives rise to an atmosphere of social pressure within
            the village bank, where the cost of social embarrassment motivates
            bank members to repay their loans in full. The admixture of
            cross-guarantees and social pressure makes it possible for even the
            poorest people to receive loans. This method has proven very
            effective for FINCA, yielding a repayment rate of over 97% in its
            worldwide network. Village banks are highly democratic,
            self-managed, grassroots organizations. They elect their own
            leaders, select their own members, create their own bylaws, do their
            own bookkeeping, manage all funds, disburse and deposit all funds,
            resolve loan delinquency problems, and levy their own fines on
            members who come late, miss meetings, or fall behind in their
            payments.[1] There was some hope in the early years of village bank
            development that these small village organizations could become
            independent and self-financing, but this hope was later abandoned.
            Most village banks in operation today are directly supervised by the
            staff of a local NGO or microfinance institution, from which they
            receive much of their loan financing.
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              width: "100%",
              backgroundColor: "#ededed",
              paddingHorizontal: 7,
              paddingVertical: 5,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
              }}
            >
              {"©Copy2023"}
            </Text>
            <Text
              style={{
                fontSize: 12,
              }}
            >
              Version {"1.0"}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
