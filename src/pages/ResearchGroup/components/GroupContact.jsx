import { ContactCard } from '../../../components/ContactCard';

const GroupContact = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <ContactCard
        researcherName="Prof. Dra. Mariana Silva Ferreira"
        position="Discente"
        email="mariana@unesp.br"
        number="(19)99999-9999"
        className="w-full md:w-4/5"
      />
      <ContactCard
        researcherName="Thiago Albuquerque Gomes"
        position="Aluno"
        email="thiago@unesp.br"
        number="(19)99999-5555"
        className="w-full md:w-4/5"
      />
    </div>
  );
};

export { GroupContact };
