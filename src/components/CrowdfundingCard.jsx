const CrowdfundingCard = ({
  fundingID,
  image,
  title,
  description,
  goal,
  currentValue,
}) => {
  return (
    <div className="flex flex-col items-center w-64 h-80 rounded-3xl bg-light-gray">
      <img
        className="object-fill rounded-t-3xl"
        src=/* "https://placehold.co/600x400" */{image}
      />
      <div className="w-full p-4">
        <h2 className="font-bold">
          {/* <Link
            to={`/projeto-de-pesquisa/${fundingID}`}>
          </Link>  */}
            {title}
        </h2>
        <p>{description}</p>
        <hr className="m-2 border-gray" />
        <p className="text-gray">Meta: R${goal}</p>
        <p>Arrecadado: R${currentValue}</p>
      </div>
    </div>
  );
};

export { CrowdfundingCard };
