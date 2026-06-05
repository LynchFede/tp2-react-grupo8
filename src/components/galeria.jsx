import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./galeria.css";

const images = [
{
    src: "https://picsum.photos/id/1015/600/400",
  },
  {
    src: "https://picsum.photos/id/1016/600/400",
  },
  {
    src: "https://picsum.photos/id/1018/600/400",
  },
  {
    src: "https://picsum.photos/id/1020/600/400",
  },
  {
    src: "https://picsum.photos/id/1024/600/400",
  },
  {
    src: "https://picsum.photos/id/1035/600/400",
  },
];

function Galeria() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>Galería de Imágenes</h1>
      </div>
      <div className="gallery">
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image.src}
            alt={`Imagen ${idx + 1}`}
            onClick={() => {
              setOpen(true);
              setIndex(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Galeria;
