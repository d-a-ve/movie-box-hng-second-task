import PersonList from "@components/List/PersonList";
import { ProductionCompany } from "@customTypes/IMovieResponse";
import getProductionCompany from "@utils/getProductionCompany";

const MovieDetailsFooter = ({
  companies,
}: {
  companies: ProductionCompany[];
}) => {
  const { stringVersion } = getProductionCompany(companies);
  return (
    <div className="grid grid-flow-row gap-6">
      <PersonList type="Production Companies" people={stringVersion} />
    </div>
  );
};

export default MovieDetailsFooter;
