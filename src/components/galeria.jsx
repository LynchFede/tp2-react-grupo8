import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Galeria.css";

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
    <div>
      <h1>Galería</h1>

      <div className="gallery">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt=""
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />
    </div>
  );
}

export default Galeria;