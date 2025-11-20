import { SocialMediaLinks } from '../components/SocialMediaLinks';
import { PublicationCard2 } from '../components/PublicationCard2';
import { Link } from 'react-router-dom';

const Member = () => {
  return (
    <div className="justify-center">
      <div className="ml-4 mt-4 inline-block">
        <a href="" className="text-gray text-sm">
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
          <Link to="/pesquisadores-dir">
            <span className="ml-4">Voltar para a pesquisa</span>
          </Link>
        </a>
      </div>
      <div className="flex w-4/5 m-auto mt-12 mb-12">
        <img className="object-fill w-56" src="https://placehold.co/400x500" />
        <div className="m-4 font-bold">
          <h1 className="text-2xl">Nome do Pesquisador</h1>
          <p className="text-sm">Posição dentro da Instituição</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-4/5 m-auto mb-12">
        <div>
          <h2 className="font-bold text-xl">Sobre</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            culpa repellendus deserunt. Totam nisi asperiores molestias possimus
            temporibus reprehenderit blanditiis accusantium, soluta,
            necessitatibus adipisci laboriosam quis officia velit? Tempora,
            facere. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium hic amet sed. Similique voluptatem ad quis vero,
            recusandae officia reiciendis deleniti ducimus, error cum nemo sunt
            eveniet neque dolor accusantium.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Contato</h2>
          <hr className="block my-4 text-light-gray" />
          <div className="ml-12 flex flex-col gap-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-5 inline mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <h3 className="inline font-bold">e-mail</h3>
              <p className="ml-8">email@exemplo.com.br</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-5 inline mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <h3 className="inline font-bold">celular</h3>
              <p className="ml-8">(99)99999-9999</p>
            </div>
            <div>
              <h3 className="inline font-bold">outros links</h3>
              <SocialMediaLinks />
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl">Pesquisa</h2>
          <hr className="block my-4 text-light-gray" />
          <div className="ml-12">
            <h3 className="font-bold">Publicações</h3>
            <div className="mt-4 ml-4">
              <PublicationCard2 />
            </div>
            <h3 className="font-bold mt-8">Grupos de Pesquisa</h3>
            <div className="mt-4 ml-4">
              <h4 className="font-bold text-blue underline">
                <Link to="/projeto-de-pesquisa/:groupId/:section">
                  Nome do Grupo de Pesquisa
                </Link>
              </h4>
              <p className="ml-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis laudantium magni numquam magnam nesciunt esse, ullam
                laborum incidunt a quia laboriosam dolor placeat iste eos maxime
                ut optio molestiae nisi?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Member };
