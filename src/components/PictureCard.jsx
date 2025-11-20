const PictureCard = ({ image }) => {
  return (
    <div className="flex flex-col items-center w-64">
      <img className="object-fill rounded-3xl " src={image} />
      <p className="font-bold p-2">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
};

export { PictureCard };
