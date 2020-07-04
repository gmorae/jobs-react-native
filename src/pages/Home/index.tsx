import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  Linking,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import SvgUri from "react-native-svg-uri";
import { Feather as Icon } from "@expo/vector-icons";
import axios from "axios";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";
import { Category } from "../../models/category.model";
import { Jobs } from "../../models/jobs.model";

const Home: React.FC = () => {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<any[]>([]);
  const categories: Category[] = [
    {
      id: 1,
      name: "Node",
      image: require("../../assets/nodejs.svg"),
    },
    {
      id: 2,
      name: "React",
      image: require("../../assets/react.svg"),
    },
    {
      id: 3,
      name: "Angular",
      image: require("../../assets/angular.svg"),
    },
    {
      id: 4,
      name: "Vue",
      image: require("../../assets/vue.svg"),
    },
    {
      id: 5,
      name: "Laravel",
      image: require("../../assets/laravel.svg"),
    },
  ];

  useEffect(() => {
    axios
      .get(
        `https://jobs.github.com/positions.json?description=${selectedCategory}`
      )
      .then((res) => {
        setJobs(res.data);
      });
  }, [selectedCategory]);

  function handleSelectedCategory(name: string) {
    const alreadySelected = selectedCategory.findIndex((item) => item === name);

    if (alreadySelected >= 0) {
      const filteredItems = selectedCategory.filter((item) => item !== name);
      setSelectedCategory(filteredItems);
    } else {
      setSelectedCategory([...selectedCategory, name]);
    }
  }

  function navigateToDetails(idJob: string) {
    Linking.openURL(`https://jobs.github.com/positions/${idJob}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hello dev</Text>
        <Text style={styles.description}>Find your Dream job vacancy</Text>
        <View style={styles.itemsContainer}>
          <Text style={styles.searchTitle}>Select the category</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.item,
                  selectedCategory.includes(category.name)
                    ? styles.selectedItem
                    : {},
                ]}
                onPress={() => handleSelectedCategory(category.name)}
                activeOpacity={0.6}
              >
                <SvgUri width="64" height="64" source={category.image} />
                <Text style={styles.itemTitle}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.titleJob}>All jobs</Text>
        <FlatList
          data={jobs}
          keyExtractor={(id) => String(id.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: job }) => (
            <View style={styles.card}>
              <Text style={styles.cardCompany}>{job.company}</Text>
              <Text style={styles.cardTitle}>{job.title}</Text>
              <View style={styles.cardIcons}>
                <View style={styles.cardIconsItem}>
                  <Icon name="map-pin" style={{ marginRight: 5 }} />
                  <Text>{job.location}</Text>
                </View>
                <View style={styles.cardIconsItem}>
                  <Icon name="briefcase" style={{ marginRight: 5 }} />
                  <Text>{job.type}</Text>
                </View>
              </View>
              <RectButton
                onPress={() => navigateToDetails(job.id)}
                style={styles.button}
              >
                <View style={styles.buttonIcon}>
                  <Icon name="arrow-right" color="#FFF" size={24} />
                </View>
                <Text style={styles.buttonText}>Details</Text>
              </RectButton>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
