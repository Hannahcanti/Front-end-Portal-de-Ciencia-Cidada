const GroupDescription = ({ desc, title, image }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <img
        src={image}
        alt="Group"
        className="h-64 w-full object-cover md:h-80"
      />
      <div className="flex flex-col items-start gap-4">
        <p className="text-dark-blue font-bold underline">DIRETÓRIO CNPq</p>
        <h2 className="font-bold text-lg md:text-xl">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export { GroupDescription };
