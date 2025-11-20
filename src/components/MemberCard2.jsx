import { Link } from 'react-router-dom';

const MemberCard2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-light-gray rounded-lg shadow-md overflow-hidden p-4 gap-4">
      <img
        className="h-36 w-36 md:h-44 md:w-44 rounded-lg object-cover"
        src="https://placehold.co/400x400"
        alt="Profile"
      />
      <div className="flex flex-col justify-between h-full">
        <div>
          <Link to="/pesquisadores/:MemberId">
            <h1 className="text-dark-blue font-bold text-xl md:text-2xl mb-1">
              Nome do Pesquisador
            </h1>
          </Link>
          <p className="font-semibold text-sm md:text-base">
            Posição dentro da Instituição
          </p>
        </div>
        <p className="font-semibold text-sm md:text-base">Área de Pesquisa</p>
        <div className="mt-2">
          <p className="text-dark-blue font-bold text-sm md:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="inline-block w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            email@exemplo.com.br
          </p>
          <p className="text-dark-blue font-semibold text-sm md:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="inline-block w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            (99)99999-9999
          </p>
        </div>
      </div>
    </div>
  );
};

export { MemberCard2 };
