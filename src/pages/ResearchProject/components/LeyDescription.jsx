const LeyDescription = ({ desc, title, image }) => {
  return (
    <div className="flex flex-col col-start-2 col-end-7 items-center">
      <img src={image} alt="" className="h-80" />
      <div className="flex flex-col items-start p-24">
        <p className="font-bold text-xl">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export { LeyDescription };
