import { Link } from 'react-router-dom';

const MemberCard = ({
  image,
  researcherName,
  memberId,
  position,
  description,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 shadow-md border rounded-lg">
      <img
        className="h-48 w-full md:w-48 rounded-lg object-cover"
        src={image}
        alt={`${researcherName}`}
      />
      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap items-center">
          <Link to={`/pesquisadores/${memberId}`}>
            <h2 className="text-dark-blue font-bold text-xl md:text-2xl">
              {researcherName}
            </h2>
          </Link>
          <span className="font-light text-gray text-sm md:text-xl ml-2">
            - Currículo Lattes
          </span>
        </div>
        <h3 className="font-bold text-lg md:text-xl">{position}</h3>
        <p className="text-sm md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export { MemberCard };
