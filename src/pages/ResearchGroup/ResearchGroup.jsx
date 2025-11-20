import { useParams } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { Projects } from './components/Projects';
import { Members } from './components/Members';
import { GroupDescription } from './components/GroupDescription';
import { LeyDescription } from './components/LeyDescription';
import { GroupContact } from './components/GroupContact';
import genericLogo from '../../assets/images/atom.svg';

const ResearchGroup = () => {
  const { section } = useParams();
  return (
    <div className="p-4">
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
        <img src={genericLogo} alt="Logo da Pesquisa" className="h-10" />
        <h1 className="text-dark-blue font-bold text-2xl md:text-3xl">
          Nome Grupo de Pesquisa
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-10">
        {/* Sidebar */}
        <div className="flex justify-center md:block col-span-1">
          <Sidebar
            sections={[
              'Grupo de Pesquisa',
              'Para Leigos',
              'Pesquisas',
              'Membros',
              'Contatos',
            ]}
          />
        </div>

        {/* Main Content */}
        <div className="col-span-5">
          {section === 'grupodepesquisa' ? (
            <GroupDescription />
          ) : section === 'paraleigos' ? (
            <LeyDescription />
          ) : section === 'pesquisas' ? (
            <Projects />
          ) : section === 'membros' ? (
            <Members />
          ) : section === 'contatos' ? (
            <GroupContact />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { ResearchGroup };
