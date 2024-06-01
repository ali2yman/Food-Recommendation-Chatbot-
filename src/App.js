import "./App.css";
// import ChatList from "./Components/Chat/ChatList";
import ChatRoom from "./Components/Chat/ChatRoom";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div style={{ backgroundImage: "/Assets/bg2.jpeg" }} className="App">
      <NavBar />
      {/* <ChatList/> */}
      <div className="overlay">
        <ChatRoom />
      </div>
    </div>
  );
}

export default App;
