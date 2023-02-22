import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { Component } from "react";
import Group from "../components/Group";
import BackToHome from "./../components/BackToHome";
import { COLORS } from "./../Colors";

export default class Groups extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    groupData: [],
    group: "",
    selected: false,
  };

  AddMemberToGroupDB = () => {
    var group = this.state.group;

    var formdata = new FormData();
    formdata.append("group", group);

    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://172.20.10.4/vb/join.php", requestOptions)
      .then((Response) => Response.text())
      .then((Response) => {
        if (Response[0].Message == "Joined Successfully!") {
          alert(
            "you have joined " +
              this.state.group +
              " village banking group successfully "
          );
        } else {
        }
      })
      .catch((error) => {
        console.error("ERROR:" + error);
        alert(error);
      });
  };

  fetchGroups = async () => {
    fetch("http://172.20.10.4/vb/fetchGroupsData.php")
      .then((response) => response.json())
      .then((result) => {
        if (result == "no groups found") {
          this.setState({ groupData: [] });
        } else {
          this.setState({ groupData: result });
        }
      })
      .catch((error) => console.log("error", error));
  };

  compileALL = () => {
    this.AddMemberToGroupDB();
    alert(
      "You have successfully joined " +
        this.state.group +
        " village banking groupp"
    );
    this.props.navigation.navigate("Dashboard");
  };

  addNow() {
    this.AddGroupToMemberDB();
    alert(
      "you have joined " +
        this.state.group +
        " village banking group successfully "
    );
  }

  componentDidMount() {
    this.fetchGroups();
  }

  render() {
    return (
      <View>
        <ScrollView
          bounces={false}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 10 }}
        >
          {this.state.groupData.map((item, index) => (
            <View key={item.id}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ group: item.name, selected: true });
                }}
                disabled={this.state.selected}
              >
                <Group
                  name={item.gname}
                  total_members={item.total_members}
                  admin={item.admin_contact}
                  join={true}
                  selected={this.state.selected}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={styles.voteNowBtn}
          onPress={() => {
            this.compileALL();
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }}>
            Submit Votes
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  joinNowBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "80%",
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    marginTop: 30,
  },
  voteNowBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#0b87f3",
    borderRadius: 10,
  },
});
