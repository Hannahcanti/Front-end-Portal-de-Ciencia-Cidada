import { CrowdfundingCard } from '../../../components/CrowdfundingCard';

const Crowdfunding = () => {
  return (
    <div className="col-start-2 col-end-7 pl-12 pr-16 flex flex-wrap gap-8">
      <CrowdfundingCard fundingID="1" image="https://blogsaude.volkdobrasil.com.br/wp-content/uploads/2020/07/volkdobrasil_volkprojetosaude_image_658.jpeg" title="Compra de equipamentos" description="" goal="100,00" currentValue="50,00" />
      <CrowdfundingCard fundingID="2" image="https://www.energy.gov/sites/default/files/styles/full_article_width/public/2024-07/doe-explains-quantum-computing.png?itok=vYEOMpMS" title="Aluguel de máquinas especializadas" description="" goal="100,00" currentValue="50,00"/>
      {/* <CrowdfundingCard fundingID="3" image="" title="" description="" goal="" currentValue=""/>
      <CrowdfundingCard fundingID="4" image="" title="" description="" goal="" currentValue=""/>
      <CrowdfundingCard fundingID="5" image="" title="" description="" goal="" currentValue=""/>
      <CrowdfundingCard fundingID="6" image="" title="" description="" goal="" currentValue=""/> */}
    </div>
  );
};

export { Crowdfunding };
