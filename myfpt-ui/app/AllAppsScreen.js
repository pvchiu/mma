import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = {
  primary: "#4285F4",
  white: "#FFF",
  lightGray: "#F5F5F5",
  sectionBg: "#efefef",
  text: "#222",
  subtitle: "#777",
};

// Import ảnh từ thư mục assets
const approveImg = require("../assets/images/approve.png");
const birthdayImg = require("../assets/images/birthday.png");
const careImg = require("../assets/images/care.png");
const datingImg = require("../assets/images/dating.png");
const disciplineImg = require("../assets/images/discipline.png");
const eventsImg = require("../assets/images/events.png");
const gamesImg = require("../assets/images/games.png");
const learningImg = require("../assets/images/learning.png");
const newsImg = require("../assets/images/news.png");
const payslipImg = require("../assets/images/payslip.png");
const rewardImg = require("../assets/images/reward.png");
const starImg = require("../assets/images/star.png");
const surveyImg = require("../assets/images/survey.png");
const tasksImg = require("../assets/images/tasks.png");
const wikiImg = require("../assets/images/wiki.png");

const SECTIONS = [
  {
    title: "WORK",
    data: [
      {
        id: "w1",
        title: "Approve Now",
        desc: "Notify managers of pending requests and allow managers to approve/reject requests from internal tools",
        img: approveImg,
      },
      {
        id: "w2",
        title: "Reward",
        desc: "Send colleagues a thank you note or reward Gold for exceptional contribution.",
        img: rewardImg,
      },
      {
        id: "w3",
        title: "Discipline",
        desc: "Send a discipline warning to subordinates for violation of codes of conduct",
        img: disciplineImg,
      },
      {
        id: "w4",
        title: "Learning",
        desc: "View a list of mandatory, registered and suggested learning courses; check-in and send feedback for each course",
        img: learningImg,
      },
      { id: "w5", title: "My Tasks", desc: "", img: tasksImg },
    ],
  },
  {
    title: "UTILITIES",
    data: [
      { id: "t1", title: "FPT Care", desc: "FPT Care", img: careImg },
      {
        id: "t2",
        title: "Events",
        desc: "Register, check-in, check-out, send feedback to company events and programs",
        img: eventsImg,
      },
      {
        id: "t3",
        title: "Survey",
        desc: "Conduct and collect responses for company-wide or department-wide surveys",
        img: surveyImg,
      },
      {
        id: "t4",
        title: "FPT Dating",
        desc: "Dating feature ",
        img: datingImg,
      },
      { id: "t5", title: "Payslip", desc: "Payslip", img: payslipImg },
      {
        id: "t6",
        title: "Birthday",
        desc: "Your birthday is a special moment. We're very happy to send the best wishes for you. Colleagues can send you birthday wishes on myFPT",
        img: birthdayImg,
      },
    ],
  },
  {
    title: "NEWS",
    data: [
      {
        id: "n1",
        title: "News",
        desc: "A collection of latest news and notable events around the company",
        img: newsImg,
      },
      {
        id: "n2",
        title: "Star Ave",
        desc: "Recognise notable achievements within a business unit or within FPT",
        img: starImg,
      },
    ],
  },
  {
    title: "WIKI",
    data: [
      {
        id: "u1",
        title: "Employee Info",
        desc: "Basic, non-confidential employee information (name, gender, department, etc.)",
        img: wikiImg,
      },
    ],
  },
  {
    title: "GAMES",
    data: [
      {
        id: "g1",
        title: "Game",
        desc: "Community-engaging games with Gold as rewards",
        img: gamesImg,
      },
    ],
  },
];

const SearchBar = ({ value, onChange, isGrid, toggleView, onClear }) => (
  <View style={styles.searchWrap}>
    <MaterialCommunityIcons name="magnify" size={20} style={{ marginLeft: 12 }} color="#666" />
    <TextInput
      placeholder="Type feature's name"
      value={value}
      onChangeText={onChange}
      style={styles.searchInput}
      placeholderTextColor="#999"
    />
    {value.length > 0 && (
      <TouchableOpacity onPress={onClear} style={styles.clearButton}>
        <MaterialCommunityIcons name="close-circle" size={20} color="#999" />
      </TouchableOpacity>
    )}
    <TouchableOpacity onPress={toggleView}>
      <MaterialCommunityIcons
        name={isGrid ? "format-list-bulleted" : "apps"}
        size={22}
        style={{ marginRight: 12 }}
        color="#333"
      />
    </TouchableOpacity>
  </View>
);

const Row = ({ item }) => (
  <TouchableOpacity style={styles.row} onPress={() => {}}>
    <View style={styles.iconCircle}>
      <Image source={item.img} style={styles.rowIcon} resizeMode="contain" />
    </View>
    <View style={{ flex: 1 }}>
      <Text style={styles.rowTitle}>{item.title}</Text>
      <Text style={styles.rowDesc}>{item.desc}</Text>
    </View>
    <MaterialCommunityIcons name="chevron-right" size={20} color="#aaa" />
  </TouchableOpacity>
);

const GridItem = ({ item }) => (
  <TouchableOpacity style={styles.gridItem}>
    <View style={styles.iconCircle}>
      <Image source={item.img} style={styles.rowIcon} resizeMode="contain" />
    </View>
    <Text style={styles.gridText} numberOfLines={2}>{item.title}</Text>
  </TouchableOpacity>
);

export default function AllAppsScreen() {
  const [query, setQuery] = React.useState("");
  const [isGrid, setIsGrid] = React.useState(false);

  const filtered = SECTIONS.map((s) => {
    return {
      ...s,
      data: s.data.filter((it) => {
        if (!query.trim()) {
          return true;
        }
        
        const searchLower = query.toLowerCase().trim();
        const titleLower = it.title.toLowerCase();
        
        // Chỉ tìm kiếm trong title
        return titleLower.includes(searchLower);
      }),
    };
  }).filter((s) => s.data.length > 0);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        value={query}
        onChange={setQuery}
        isGrid={isGrid}
        toggleView={() => setIsGrid(!isGrid)}
        onClear={() => setQuery("")}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>All Apps</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {filtered.map((section) => (
          <View key={section.title}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>

            {isGrid ? (
              <View style={styles.gridContainer}>
                {section.data.map((item) => (
                  <GridItem key={item.id} item={item} />
                ))}
              </View>
            ) : (
              <View>
                {section.data.map((item, index) => (
                  <View key={item.id}>
                    <Row item={item} />
                    {index < section.data.length - 1 && <View style={styles.sep} />}
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },

  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    height: 52,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 16, color: "#333" },
  clearButton: {
    padding: 8,
  },

  titleContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
  },

  sectionHeader: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  sectionHeaderText: { color: "#666", fontWeight: "700", letterSpacing: 0.5 },

  row: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#eef6ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  rowIcon: { width: 28, height: 28 },

  rowTitle: { fontSize: 16, fontWeight: "700", color: COLORS.text },
  rowDesc: { marginTop: 6, color: COLORS.subtitle },

  sep: { height: 1, backgroundColor: "#eee", marginLeft: 80 },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  gridItem: {
    width: "25%",
    alignItems: "center",
    paddingVertical: 12,
  },
  gridText: {
    marginTop: 6,
    fontSize: 13,
    color: COLORS.text,
    textAlign: "center",
    paddingHorizontal: 4,
  },
});