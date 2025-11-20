import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { App } from './App';
import { ResearchGroup } from './pages/ResearchGroup/ResearchGroup';
import { NewsDir } from './pages/NewsDir';
import { News } from './pages/News';
import { ResearchGroupsDir } from './pages/ResearchGroupsDir';
import { ProjectsDir } from './pages/ProjectsDir';
import { ResearchProject } from './pages/ResearchProject/ResearchProject';
import { MembersDir } from './pages/MembersDir';
import { Member } from './pages/Member';
import { Login } from './pages/Login';
import { HowToHelp } from './pages/HowToHelp';
import { CreateAccount } from './pages/CreateAccount';
import { Crowdfunding } from './pages/Crowdfunding';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/grupos-de-pesquisa/:groupId/:section',
        element: <ResearchGroup />,
      },
      {
        path: '/projeto-de-pesquisa/:projectId/:section',
        element: <ResearchProject />,
      },
      {
        path: '/noticias-dir',
        element: <NewsDir />,
      },
      {
        path: '/noticias/:NewsId',
        element: <News />,
      },
      {
        path: '/grupos-de-pesquisa-dir',
        element: <ResearchGroupsDir />,
      },
      {
        path: '/projetos-dir',
        element: <ProjectsDir />,
      },
      {
        path: '/pesquisadores-dir',
        element: <MembersDir />,
      },
      {
        path: '/pesquisadores/:MemberId',
        element: <Member />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/createAccount',
        element: <CreateAccount />,
      },
      {
        path: '/como-ajudar',
        element: <HowToHelp />,
      },
      {
        path: '/financiamento/:FinanciamentoId',
        element: <Crowdfunding />,
      },
    ],
  },
]);

export { router };
