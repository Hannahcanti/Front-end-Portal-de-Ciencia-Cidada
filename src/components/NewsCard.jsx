import { Link } from 'react-router-dom';

const NewsCard = () => {
  return (
    <div className="flex flex-col items-center w-full sm:w-80 md:w-72 rounded-3xl bg-light-gray shadow-md overflow-hidden">
      <img
        className="h-48 w-full object-cover rounded-t-3xl"
        src="https://placehold.co/600x400"
        alt="News Thumbnail"
      />
      <div className="p-4 flex flex-col justify-between h-full">
        <Link to="/noticias/:NewsId">
          <h1 className="font-bold text-lg sm:text-xl mb-2 text-center sm:text-left">
            Lorem ipsum dolor sit amet
          </h1>
        </Link>
        <p className="text-sm sm:text-base text-gray-700">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
    </div>
  );
};

export { NewsCard };
