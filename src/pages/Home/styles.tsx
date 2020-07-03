import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: "#333",
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 16,
    marginTop: 64,
    fontWeight: "100",
    color: "#fff",
  },

  description: {
    color: "#fff",
    fontSize: 24,
    marginTop: 2,
    fontWeight: "bold",
  },

  itemsContainer: {
    marginTop: 32,
    marginBottom: 32,
  },

  searchTitle: {
    fontSize: 16,
    fontWeight: "100",
    color: "#FFF",
    marginBottom: 16,
  },

  item: {
    backgroundColor: "#fff",
    height: 128,
    width: 128,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 16,
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },

  selectedItem: {
    backgroundColor: "#aaaaaa40",
  },

  itemTitle: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  itemImage: {
    width: 64,
    height: 64,
    alignItems: "center",
  },

  content: {
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 16,
    flex: 1
  },

  titleJob: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24
  },

  card: {
    padding: 32,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
    shadowColor: "#555",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 4,
    shadowRadius: 4,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: 16
  },

  cardCompany: {
    fontSize: 16,
    color: '#999'
  },

  cardIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  cardIconsItem: {
    backgroundColor: '#ddd',
    padding: 16,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  button: {
    backgroundColor: "#156546",
    height: 45,
    flexDirection: "row",
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 16,
  },

  buttonIcon: {
    height: 45,
    width: 45,
    borderRadius: 8,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
  },
});
