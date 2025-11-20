import { PublicationsCard } from '../../../components/PublicationCard';

const Publications = () => {
    return (
        <div className="col-start-2 col-end-7 pl-12 pr-16">
            <PublicationsCard />
            <PublicationsCard />
            <PublicationsCard />
            <PublicationsCard />
        </div>
    );
};

export { Publications };
