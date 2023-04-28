import "./App.css";
import ReactImageZoom from "./components/ReactImageZoom";

function App() {
  const props = {
    width: 400,
    offset: { vertical: 0, horizontal: 50 },
    height: 600,
    zoomWidth: 400,
    img: "/images/Product1.jpg",
    alt: "Product Image to Be Zoomed",
  };
  return (
    <div className="imagecontainer">
      <h1>React Side Image Zoom</h1>
      <ReactImageZoom {...props} />
    </div>
  );
}

export default App;
