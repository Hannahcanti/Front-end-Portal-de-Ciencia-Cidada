import { NewsCard } from '../../../components/NewsCard';

const ResearchNews = () => {
    return (
        <div className="col-start-2 col-end-7 pl-12 pr-16 flex flex-wrap space-between gap-16">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    );
};

export { ResearchNews };
