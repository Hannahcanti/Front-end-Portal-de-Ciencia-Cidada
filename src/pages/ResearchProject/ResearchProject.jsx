import { useParams } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import genericLogo from '../../assets/images/atom.svg';
import { Publications } from './components/Publications';
import { ResearchNews } from './components/ResearchNews';
import { Gallery } from './components/Gallery';
import { ResearchMembers } from './components/ResearchMembers';
import { Crowdfunding } from './components/Crowdfunding';
import { ProjectDescription } from './components/ProjectDescription';
import { LeyDescription } from './components/LeyDescription';
import { ProjectContact } from './components/ProjectContact';
import { Volunteering } from './components/Volunteering';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: '1',
    name: 'Quantum Horizon: Exploring Quantum Computing for Secure Communications',
    description:
      'Este projeto explora o uso de computação quântica para desenvolver novas formas de comunicação segura, aproveitando o entrelaçamento quântico e a criptografia avançada.',
    descriptionTitle:
      'Explorando a Computação Quântica para Comunicações Seguras',
    laymanDescription:
      'Imagine poder enviar uma mensagem que ninguém mais pode interceptar. Com a computação quântica, estamos criando uma forma de comunicação tão segura que mesmo os hackers mais habilidosos não conseguiriam quebrar.',
    laymanTitle: 'Comunicação Segura com Computação Quântica',
    image:
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    sections: [
      'Projeto de Pesquisa',
      'Para Leigos',
      'Publicações',
      'Notícias',
      'Galeria',
      'Pesquisadores',
      'Contato',
      'Voluntariado',
      'Financiamento',
    ],
  },
  {
    id: '2',
    name: 'EcoSynth: Integrating Synthetic Biology for Sustainable Agriculture',
    description:
      'EcoSynth busca integrar biologia sintética com práticas agrícolas sustentáveis, criando plantas geneticamente modificadas que aumentam a eficiência e reduzem o impacto ambiental.',
    descriptionTitle:
      'Integrando Biologia Sintética para Agricultura Sustentável',
    laymanDescription:
      'Estamos usando ciência avançada para criar plantas que podem crescer mais rápido e de forma mais eficiente, usando menos recursos naturais. Isso significa mais comida para todos, com menos danos ao meio ambiente.',
    laymanTitle: 'Agricultura Sustentável com Biologia Sintética',
    image:
      'https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],

    sections: [
      'Projeto de Pesquisa',
      'Para Leigos',
      'Publicações',
      'Notícias',
      'Galeria',
      'Pesquisadores',
      'Contato',
      'Voluntariado',
      'Financiamento',
    ],
  },
  {
    id: '3',
    name: 'NeuroLink: Advancing Brain-Computer Interfaces for Cognitive Enhancement',
    description:
      'O projeto NeuroLink foca no desenvolvimento de interfaces cérebro-computador para melhorar as capacidades cognitivas humanas, explorando a interação direta entre mente e máquina.',
    descriptionTitle:
      'Avanços em Interfaces Cérebro-Computador para Melhoria Cognitiva',
    laymanDescription:
      'Imagine controlar um computador ou uma máquina apenas com o pensamento. Nosso projeto está desenvolvendo tecnologias que permitem que o cérebro humano se conecte diretamente a dispositivos eletrônicos para melhorar nossas habilidades mentais.',
    laymanTitle: 'Controlando Máquinas com o Pensamento',
    image:
      'https://images.pexels.com/photos/26545224/pexels-photo-26545224/free-photo-of-a-3d-model-of-a-ball-on-ice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    sections: [
      'Projeto de Pesquisa',
      'Para Leigos',
      'Publicações',
      'Notícias',
      'Galeria',
      'Pesquisadores',
      'Contato',
      'Voluntariado',
      'Financiamento',
    ],
  },
  {
    id: '4',
    name: 'AquaRenew: Developing Technologies for Ocean Water Desalination',
    description:
      'AquaRenew desenvolve tecnologias avançadas para dessalinização da água do oceano, buscando soluções sustentáveis para a crise global de água potável.',
    descriptionTitle:
      'Desenvolvimento de Tecnologias para Dessalinização da Água do Oceano',
    laymanDescription:
      'Estamos criando maneiras de transformar água do mar em água potável, ajudando a resolver o problema da falta de água em várias partes do mundo. Assim, mais pessoas terão acesso a água limpa e segura.',
    laymanTitle: 'Transformando Água do Mar em Água Potável',
    image:
      'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    sections: [
      'Projeto de Pesquisa',
      'Para Leigos',
      'Publicações',
      'Notícias',
      'Galeria',
      'Pesquisadores',
      'Contato',
      'Voluntariado',
      'Financiamento',
    ],
  },
  {
    id: '5',
    name: 'BioGrid: Creating a Smart Energy Grid with Bio-Inspired Algorithms',
    description:
      'BioGrid utiliza algoritmos inspirados na natureza para criar uma grade energética inteligente, promovendo a eficiência energética e a sustentabilidade em ambientes urbanos.',
    descriptionTitle:
      'Criando uma Rede Elétrica Inteligente com Algoritmos Bio-Inspirados',
    laymanDescription:
      'Nosso projeto está desenvolvendo uma rede elétrica inteligente que funciona como os sistemas naturais, como o cérebro humano. Isso significa que a energia será distribuída de forma mais eficiente, economizando recursos e ajudando o meio ambiente.',
    laymanTitle: 'Rede Elétrica Inteligente Inspirada na Natureza',
    image:
      'https://images.pexels.com/photos/27130326/pexels-photo-27130326/free-photo-of-a-close-up-of-a-blue-building-with-white-windows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    sections: [
      'Projeto de Pesquisa',
      'Para Leigos',
      'Publicações',
      'Notícias',
      'Galeria',
      'Pesquisadores',
      'Contato',
      'Voluntariado',
      'Financiamento',
    ],
  },
];

const ResearchProject = () => {
  const { projectId, section } = useParams();
  const project = projects.find((p) => p.id === projectId);

  console.log(project);
  return (
    <div>
      <div className="ml-4 mt-4 inline-block">
        <div className="text-gray text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="gray"
            className="size-4 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <Link to="/grupos-de-pesquisa/:groupId/pesquisas">
            <span className="ml-4">Grupo de Pesquisa</span>
          </Link>
        </div>
      </div>
      <div className="m-4">
        <img src={genericLogo} alt="Logo da Pesquisa" className="h-10 inline" />
        <h1 className="text-dark-blue font-bold text-3xl m-5 inline">
          {project.name}
        </h1>
      </div>

      <div className="grid grid-cols-6 gap-10">
        <Sidebar
          sections={[
            'Projeto de Pesquisa',
            'Para Leigos',
            'Publicações',
            'Notícias',
            'Galeria',
            'Pesquisadores',
            'Contato',
            'Voluntariado',
            'Financiamento',
          ]}
        />
        {section === 'publicações' ? (
          <Publications />
        ) : section === 'projetodepesquisa' ? (
          <ProjectDescription
            desc={project.description}
            title={project.descriptionTitle}
            image={project.image}
          />
        ) : section === 'paraleigos' ? (
          <LeyDescription
            desc={project.laymanDescription}
            title={project.laymanTitle}
            image={project.image}
          />
        ) : section === 'notícias' ? (
          <ResearchNews />
        ) : section === 'galeria' ? (
          <Gallery images={project.galleryImages} />
        ) : section === 'contato' ? (
          <ProjectContact />
        ) : section === 'pesquisadores' ? (
          <ResearchMembers />
        ) : section === 'voluntariado' ? (
          <Volunteering />
        ) : section === 'financiamento' ? (
          <Crowdfunding />
        ) : null}
      </div>
    </div>
  );
};

export { ResearchProject };
