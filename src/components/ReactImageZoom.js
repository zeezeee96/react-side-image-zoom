import React, { useRef, useEffect } from "react";
import ImageZoom from "./jszoom";

function ReactImageZoom(props) {
  const containerRef = useRef(null);
  let imageZoom;
  const rerenderImageZoom = () => {
    imageZoom = new ImageZoom(
      containerRef.current,
      JSON.parse(JSON.stringify(props))
    );
  };
  const kill = () => {
    imageZoom.kill();
  };
  useEffect(() => {
    rerenderImageZoom();
    return () => {
      kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    <div
      style={{ width: "fit-content", margin: "0 auto" }}
      ref={containerRef}
    />
  );
}

export default ReactImageZoom;
