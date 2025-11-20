import PropTypes from 'prop-types';
import { Link, useLocation, useParams } from 'react-router-dom';

const Sidebar = ({ sections }) => {
  const location = useLocation();
  const { section } = useParams();
  const basePath = location.pathname.split('/').slice(0, -1).join('/');

  return (
    <div className="flex flex-col items-center w-full md:w-auto bg-white shadow-sidebar p-4">
      {sections.map((el) => (
        <Link
          key={el}
          to={`${basePath}/${el.split(' ').join('').toLowerCase()}`}
          className={`p-3 text-center rounded-md font-semibold w-full md:w-auto ${
            section === el.split(' ').join('').toLowerCase()
              ? 'bg-dark-blue text-white'
              : 'hover:bg-gray-100'
          }`}
        >
          {el}
        </Link>
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  sections: PropTypes.array.isRequired,
};

export { Sidebar };
