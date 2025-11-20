import { Link } from 'react-router-dom';

const GroupCard = ({ image, groupName, groupId }) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-80 rounded-3xl bg-light-gray shadow-md overflow-hidden">
      <img
        className="object-cover w-full h-48 sm:h-52 rounded-t-3xl"
        src={image}
        alt={groupName}
      />
      <div className="p-4 text-center">
        <Link
          to={`/grupos-de-pesquisa/${groupId}/grupodepesquisa`}
          className="font-bold text-lg sm:text-xl hover:underline"
        >
          {groupName}
        </Link>
      </div>
    </div>
  );
};

export { GroupCard };
