import { ContactCard } from '../../../components/ContactCard';

const ProjectContact = () => {
  return (
    <div className="flex flex-col col-start-2 col-end-7 items-center gap-4">
      <ContactCard className="mx-12 w-11/12" 
      researcherName="Prof. Dra. Mariana Silva Ferreira"
      position="Discente"
      email="mariana@unesp.br"
      number="(19)99999-9999"/>
      <ContactCard className="mx-12 w-11/12" 
      researcherName="Thiago Albuquerque Gomes"
      position="Aluno"
      email="thiago@unesp.br"
      number="(19)99999-5555"/>
    </div>
  );
};

export { ProjectContact };
