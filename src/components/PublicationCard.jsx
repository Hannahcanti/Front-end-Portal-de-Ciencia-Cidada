const PublicationsCard = () => {
  return (
    <div>
      <hr className="block m-auto border-light-gray w-full" />
      <div className="flex justify-between gap-4 items-center mt-2 mb-6">
        <p className="">
          AUTOR. <strong>Título: subtítulo.</strong> Edição. Local (cidade) de
          publicação: Editora, data. Número de páginas ou volumes. (nome e
          número da série).
        </p>
        <button className="bg-dark-blue rounded-lg p-2 w-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="size-5 m-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export { PublicationsCard };
