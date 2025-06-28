import "./App.css";
import ParagraphComponent from "./components/ParagraphsComponent.jsx";
import ListsComponent from "./components/ListsComponent.jsx";
import VideoComponent from "./components/VideoComponent.jsx";
import ImageComponent from "./components/ImageComponent.jsx";

function App() {
  return (
    <div className="App">
      <ParagraphComponent />
      <ListsComponent />
      <VideoComponent />
      <ImageComponent />
    </div>
  );
}

export default App;
