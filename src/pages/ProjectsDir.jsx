import { ProjectCard } from '../components/ProjectCard';
import { SearchByName } from '../components/SearchByName';
import { SearchByResearchArea } from '../components/SearchByResearchArea';

const ProjectsDir = () => {
  return (
    <div className="p-4">
      <h1 className="text-black font-bold text-2xl md:text-3xl mt-8 text-center md:text-left md:ml-8">
        Projetos
      </h1>
      <div className="flex flex-col md:flex-row md:gap-8 gap-4 mt-4 md:ml-8 font-semibold items-center md:items-start">
        <div className="w-full md:w-auto">
          <SearchByName />
        </div>
        <div className="w-full md:w-auto">
          <SearchByResearchArea />
        </div>
      </div>
      <p className="m-4 md:ml-8 ml-4 font-semibold">Filtros selecionados: </p>
      <hr className="block w-full md:w-11/12 m-auto text-gray" />
      <div className="flex flex-wrap justify-center gap-8 items-center m-4 md:m-16">
        <ProjectCard
          image="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          projectId="1"
          projectName="Quantum Horizon: Exploring Quantum Computing for Secure Communications"
        />
        <ProjectCard
          image="https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          projectId="2"
          projectName="EcoSynth: Integrating Synthetic Biology for Sustainable Agriculture"
        />
        <ProjectCard
          image="https://images.pexels.com/photos/26545224/pexels-photo-26545224/free-photo-of-a-3d-model-of-a-ball-on-ice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          projectId="3"
          projectName="NeuroLink: Advancing Brain-Computer Interfaces for Cognitive Enhancement"
        />
        <ProjectCard
          image="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          projectId="4"
          projectName="AquaRenew: Developing Technologies for Ocean Water Desalination"
        />
        <ProjectCard
          image="https://images.pexels.com/photos/27130326/pexels-photo-27130326/free-photo-of-a-close-up-of-a-blue-building-with-white-windows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          projectId="5"
          projectName="BioGrid: Creating a mdart Energy Grid with Bio-Inspired Algorithms"
        />
      </div>
    </div>
  );
};

export { ProjectsDir };
