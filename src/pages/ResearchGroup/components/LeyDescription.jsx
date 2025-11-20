const LeyDescription = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <img
        src="https://placehold.co/600x400"
        alt="Ley"
        className="h-64 w-auto object-cover md:h-80"
      />
      <div className="flex flex-col items-start gap-4">
        <h2 className="font-bold text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus est
          id qui expedita quod quae. Incidunt, velit aspernatur omnis eius
          inventore maiores, impedit distinctio itaque odio reiciendis ipsum
          assumenda deserunt!
        </p>
      </div>
    </div>
  );
};

export { LeyDescription };
