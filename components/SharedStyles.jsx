import { StyleSheet } from "react-native";

export const sharedStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  

  bar: {
    backgroundColor: "#363E8D",
    height: 100,
    width: "100%",
    position: "absolute",
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 25,
    paddingRight: 16,
  },

  Icon: {
    width: 30,
    height: 30,
    top: 20,
    borderRadius: 12,
    tintColor: "white",
  },

  logo: {
    marginTop: 20,
    width: 200,
    top: 20,
    height: 200,
    resizeMode: "contain",
  },
  

  title: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    top: 20,
    flex: 1,
    left: -15,
  },
  

  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8E3E3",
    width: 300,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 0,
    marginVertical: 15,
    height: 50,
  },
  
  buttonText: {
    textAlign: "center",
    color: "#4953AA",
    fontSize: 20,
  },
  

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8E3E3",
    width: "70%",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    height: 50,
  },
  

  input: {
    flex: 1,
    textAlign: "center",
    height: "100%",
    color: "#363E8D",
  },
  

  square: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginHorizontal: -20,
    backgroundColor: "#4953AA",
    justifyContent: "center",
    alignItems: "center",
  },
  

  game: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8E3E3",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 0,
    marginVertical: 15,
    height: 70,
  },
  
  gameText: {
    textAlign: "center",
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
  },
  

  leftImage: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 50,
  },
  
  rightImage: {
    width: 50,
    height: 50,
    position: "absolute",
    right: 50,
  },

  favoriteIcon: {
    width: 30,
    height: 30,
    position: "absolute",
  },

  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  

  text: {
    color: "#363E8D",
    fontSize: 16,
    textAlign: "center",
  },
  

  actionButton: {
    backgroundColor: "#4953AA",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "45%",
    borderRadius: 12,
    marginHorizontal: 10,
  },
  
  actionButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  }
});