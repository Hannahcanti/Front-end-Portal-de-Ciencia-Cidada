import { GroupCard } from '../components/GroupCard';
import { SearchByName } from '../components/SearchByName';
import { SearchByResearchArea } from '../components/SearchByResearchArea';

const ResearchGroupsDir = () => {
  return (
    <div className="p-4">
      <h1 className="text-black font-bold text-2xl md:text-3xl mt-8 text-center md:text-left md:ml-8">
        Grupos de Pesquisa
      </h1>
      <div className="flex flex-col md:flex-row md:gap-8 gap-4 mt-4 md:ml-8 font-semibold items-center md:items-start">
        <div className="w-full md:w-auto">
          <SearchByName />
        </div>
        <div className="w-full md:w-auto">
          <SearchByResearchArea />
        </div>
      </div>
      <p className="mt-4 font-semibold text-center md:text-left md:ml-8">
        Filtros selecionados:
      </p>
      <hr className="block w-full md:w-11/12 m-auto text-gray" />
      <div className="flex flex-wrap gap-4 md:gap-8 items-center justify-center mt-8">
        <GroupCard
          image="https://www.liverpool.ac.uk/media/livacuk/neuroscience/nerve-cell-1920-1280.jpg"
          groupName="Infection Neuroscience Lab"
          groupId="1"
        />
        <GroupCard
          image="https://www.biust.ac.bw/wp-content/uploads/2022/06/Data-Science.jpg"
          groupName="InfoTech"
          groupId="2"
        />
        <GroupCard
          image="https://www.waterrf.org/themes/custom/themekit/images/default-wrf-logo.jpg"
          groupName="WRG"
          groupId="3"
        />
      </div>
    </div>
  );
};

export { ResearchGroupsDir };
