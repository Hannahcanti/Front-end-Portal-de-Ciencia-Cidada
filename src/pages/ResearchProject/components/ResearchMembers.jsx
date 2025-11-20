import { MemberCard } from '../../../components/MemberCard';

const ResearchMembers = () => {
  return (
    <div className="col-start-2 col-end-7 pl-12 pr-16">
      <MemberCard
        image="https://us.images.westend61.de/0001579163pw/young-female-scientist-holding-research-document-in-laboratory-DLTSF01978.jpg"
        researcherName="Prof. Dra. Mariana Silva Ferreira"
        memberId="1"
        position="Discente"
        description="Sou especialista em biotecnologia ambiental, focada em desenvolver soluções sustentáveis para remediação de áreas contaminadas. Trabalho com microorganismos para degradar poluentes e ajudar a indústria a adotar práticas mais verdes. Além de lecionar na UFRJ, minhas pesquisas resultaram em patentes e artigos científicos internacionais."
      />
      <MemberCard
        image="https://images.pexels.com/photos/3727474/pexels-photo-3727474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        researcherName="Dra. Carolina Rezende Nogueira"
        memberId="2"
        position="Aluno"
        description="Sou pesquisadora em nanotecnologia, explorando materiais com propriedades únicas para aplicações em eletrônica e sensores. Meu foco é o desenvolvimento de novos materiais em escala nanométrica. Na USP, além de orientar alunos, lidero projetos em colaboração com laboratórios internacionais."
      />
      <MemberCard
        image="https://media.sciencephoto.com/f0/27/46/58/f0274658-800px-wm.jpg"
        researcherName="Thiago Albuquerque Gomes"
        memberId="3"
        position="Aluno"
        description="Minha área de atuação é inteligência artificial, especialmente no desenvolvimento de algoritmos de machine learning para otimização de processos industriais. Como professor no ITA, ensino e aplico IA para resolver problemas complexos em grandes corporações. Tenho paixão por transformar dados em soluções inovadoras."
      />
    </div>
  );
};

export { ResearchMembers };
