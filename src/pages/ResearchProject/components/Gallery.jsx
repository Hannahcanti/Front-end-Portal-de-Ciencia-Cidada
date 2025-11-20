import { PictureCard } from '../../../components/PictureCard';

const Gallery = ({ images }) => {
  return (
    <div className="col-start-2 col-end-7 pl-12 pr-16 flex flex-wrap gap-8">
      {images.map((image, index) => (
        <PictureCard key={index} image={image} />
      ))}
    </div>
  );
};

export { Gallery };
