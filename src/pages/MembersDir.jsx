import { SearchByName } from '../components/SearchByName';
import { SearchByResearchArea } from '../components/SearchByResearchArea';
import { MemberCard2 } from '../components/MemberCard2';

const MembersDir = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-40 mt-12 mb-12 px-4">
        <div className="flex flex-col gap-8 w-full lg:w-auto">
          <SearchByName />
          <SearchByResearchArea />
          <p className="font-bold text-center lg:text-left">
            Filtros selecionados:
          </p>
        </div>
        <img
          className="object-fill rounded-sm w-full max-w-sm lg:max-w-md h-auto"
          src="https://placehold.co/600x400"
          alt="Placeholder"
        />
      </div>
      <hr className="block w-11/12 m-auto text-gray" />
      <div className="m-6 lg:m-20">
        <p className="font-bold text-lg lg:text-xl">Resultado das Buscas:</p>
        <p className="font-semibold">
          <span className="font-bold text-lg lg:text-xl">2</span> resultados
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-6 mt-8">
          <MemberCard2 />
          <MemberCard2 />
          <MemberCard2 />
          <MemberCard2 />
        </div>
      </div>
    </div>
  );
};

export { MembersDir };
