import { NewsCard } from '../components/NewsCard';
import { SearchByResearchArea } from '../components/SearchByResearchArea';

const NewsDir = () => {
  return (
    <div className="">
      <h1 className="text-black font-bold text-3xl mt-8 ml-16">Notícias</h1>
      <div className="flex md:flex-row flex-col gap-16 m-4 ml-16 font-semibold">
        <div>
          <SearchByResearchArea />
        </div>
        <div>
          <p>Filtros selecionados:</p>
          <form action="">
            {/* <input
              type="text"
              className="border border-light-gray rounded-md shadow-md w-60 p-1 focus:outline-none"
            /> */}
          </form>
        </div>
      </div>
      <hr className="block w-11/12 m-auto text-gray" />
      <div className="flex flex-wrap gap-8 items-center m-16 justify-between">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export { NewsDir };
