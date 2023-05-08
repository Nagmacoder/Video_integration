import "./App.css";
import forward from "public/images/forward_button.png";

function App() {
  let link =
    "https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4";
  return (
    <div className="container">
      <video
        className="video"
        style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
        controls
        alt="All the devices"
        src={link}
      />
      <img src={forward} />
    </div>
  );
}

export default App;
