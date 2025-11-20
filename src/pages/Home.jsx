const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-homeBackgroundImage bg-cover bg-center h-96 text-center flex flex-col items-center justify-center">
        <h1 className="font-bold text-darker-blue text-4xl md:text-6xl lg:text-7xl drop-shadow-md">
          Portal de Ciência Cidadã
        </h1>
        <h2 className="font-semibold text-white text-lg md:text-2xl lg:text-4xl drop-shadow-md mt-4">
          Sabia que qualquer cidadão pode contribuir com a ciência!?
        </h2>
      </div>

      {/* Explanation Section */}
      <div className="text-center px-6 md:px-16 lg:px-32 xl:px-80">
        <h3 className="mt-6 font-semibold text-darker-blue text-lg">
          O que é ciência cidadã?
        </h3>
        <p className="mt-4 font-bold text-lg md:text-xl">
          A ciência cidadã é uma forma de pesquisa científica conduzida, no todo
          ou em parte, por cidadãos amadores ou não especializados.
        </p>
        <p className="mt-4 text-base md:text-lg">
          Este movimento permite que qualquer pessoa, independentemente de sua
          formação acadêmica, participe ativamente em projetos de pesquisa,
          contribuindo com a coleta de dados, análise e até mesmo formulação de
          hipóteses.
        </p>
      </div>

      {/* Objectives Section */}
      <div className="flex flex-col md:flex-row mx-auto w-full md:w-11/12 lg:w-9/12 mt-12 px-6 md:px-12 gap-8">
        <div className="basis-full md:basis-1/2">
          <h3 className="text-lg md:text-xl font-bold text-darker-blue">
            Nossos objetivos
          </h3>
          <ol className="mt-4 text-sm md:text-base">
            <li className="mt-4">
              <span className="font-bold text-darker-blue">
                Engajar a comunidade:{' '}
              </span>
              Fomentar o interesse pela ciência e engajar a comunidade em
              atividades científicas.
            </li>
            <li className="mt-4">
              <span className="font-bold text-darker-blue">
                Promover a Educação Científica:{' '}
              </span>
              Fornecer recursos educativos e experiências práticas para
              enriquecer o conhecimento científico de todos.
            </li>
            <li className="mt-4">
              <span className="font-bold text-darker-blue">
                Apoiar a Pesquisa:{' '}
              </span>
              Coletar e analisar dados em larga escala, contribuindo para a
              solução de problemas científicos e sociais.
            </li>
            <li className="mt-4">
              <span className="font-bold text-darker-blue">
                Fomentar a Colaboração:{' '}
              </span>
              Estabelecer uma rede colaborativa entre cidadãos, pesquisadores e
              instituições para fortalecer a pesquisa científica.
            </li>
          </ol>
        </div>
        <div className="basis-full md:basis-1/2 flex items-center justify-center">
          <img
            src="https://placehold.co/500x300"
            className="w-full h-auto max-w-md"
            alt="Objetivos ilustrados"
          />
        </div>
      </div>

      {/* Recent News Section */}
      <div className="text-center mt-12 px-6 md:px-16 lg:px-32">
        <h3 className="text-lg md:text-xl font-bold text-darker-blue">
          Notícias recentes
        </h3>
        <img
          src="https://placehold.co/600x400"
          className="mx-auto mt-4 w-full max-w-lg h-auto"
          alt="Notícia"
        />
      </div>

      {/* Call to Action */}
      <div className="text-center px-6 md:px-16 lg:px-32 xl:px-80 my-12">
        <h3 className="font-semibold text-darker-blue text-lg">
          Quer fazer parte dessa jornada?
        </h3>
        <p className="mt-4 font-bold text-lg md:text-xl">
          Nosso portal é um ponto de encontro para entusiastas da ciência,
          pesquisadores e a comunidade em geral, que desejam contribuir
          ativamente para a pesquisa científica.
        </p>
        <p className="mt-4 text-base md:text-lg">
          Junte-se a nós e faça parte dessa jornada emocionante de descoberta e
          inovação! Explore nossos projetos, participe ativamente e contribua
          para o avanço da ciência de forma significativa. Juntos, podemos fazer
          a diferença!
        </p>
      </div>
    </div>
  );
};

export { Home };
