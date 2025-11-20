import { ContactCard } from '../components/ContactCard';

const Crowdfunding = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl m-6 text-center">
        Compra de Material para Laboratório
      </h1>
      <div className="flex justify-center gap-7">
        <img
          className="object-fill rounded-s"
          src="https://placehold.co/600x400"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl">Arrecadado:</h3>
          <h2 className="font-bold text-4xl">R$ 245,00</h2>
          <h3 className="text-3xl">Meta:</h3>
          <h3 className="text-3xl">R$300,00</h3>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold w-full max-w-screen-lg m-2">
          Sobre o projeto
        </h3>
        <p className="max-w-screen-lg text-justify">
          Estamos arrecadando fundos para equipar o laboratório de Biologia da
          UNESP com microscópios, reagentes, computadores e instrumentos de
          precisão essenciais para a educação e pesquisa dos nossos estudantes.
          Sua doação apoia a formação de profissionais capacitados, promove
          inovações científicas e soluções sustentáveis, e impacta positivamente
          a sociedade. Cada contribuição, independentemente do valor, faz uma
          grande diferença. Agradecemos pelo seu apoio!
        </p>
        <ContactCard className="max-w-screen-lg w-full m-4" />
      </div>
      <hr className="max-w-screen-lg mx-auto" />
    </div>
  );
};

export { Crowdfunding };
