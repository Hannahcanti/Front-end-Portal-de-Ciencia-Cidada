import { Link } from 'react-router-dom';

const ProjectCard = ({ image, projectName, projectId }) => {
  return (
    <div className="flex flex-col w-full sm:w-80 md:w-72 lg:w-68 rounded-3xl bg-light-gray shadow-md overflow-hidden h-80">
      <img className="object-cover w-auto h-52" src={image} alt={projectName} />
      <div className="p-4 flex flex-col justify-between flex-1">
        <Link
          to={`/projeto-de-pesquisa/${projectId}/projetodepesquisa`}
          className="font-bold text-lg sm:text-xl mb-2 text-center sm:text-left line-clamp-3 hover:underline"
        >
          {projectName}
        </Link>
      </div>
    </div>
  );
};

export { ProjectCard };
