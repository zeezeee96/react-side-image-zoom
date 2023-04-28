# react-side-image-zoom

React Package build over js zoom image.

## Usage
```javascript
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

```

## Demo
[Demo](https://react-side-image-zoom.vercel.app/)

## props 


It accepts following props:

- width (number) - width of the source image (required)
- height (number) - height of the source image. If not provided, browser calculated height is used (optional).
- zoomWidth (number) - width of the zoomed image. Zoomed image height equals source image height(optional if scale param is provided)
- img (string) - url of the source image. Provided if container does not contain img element as a tag(optional)
- alt (string) - alt text for source image.
- scale (number) - zoom scale. if not provided, scale is calculated as natural image size / image size, provided in params (optional if zoomWidth param is provided)
- offset (object) - {vertical: number, horizontal: number}. Zoomed image offset (optional)
- zoomStyle (string) - custom style applied to the zoomed image (i.e. 'opacity: 0.1;background-color: white;')(optional)
- zoomLensStyle (string) custom style applied to to zoom lents (i.e. 'opacity: 0.4;background-color: gray;')
- zoomPosition (string) - position of zoomed image. It can be: top, left, bottom, original or the default right.
