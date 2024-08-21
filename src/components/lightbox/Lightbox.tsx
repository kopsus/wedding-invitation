import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export const NextLightbox = ({ index, visible, onClose, slides = [] }) => {
  return (
    <Lightbox
      index={index}
      open={visible}
      close={onClose}
      slides={slides}
      plugins={[Zoom]}
    />
  );
};
