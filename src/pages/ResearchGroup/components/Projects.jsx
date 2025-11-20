import { ProjectCard } from '../../../components/ProjectCard';

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectCard
        image="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        projectId="1"
        projectName="Quantum Horizon: Exploring Quantum Computing..."
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
    </div>
  );
};

export { Projects };
