import { ProductionCompany } from "@customTypes/IMovieResponse";

const getProductionCompany = (companies: ProductionCompany[]) => {
  const companyText = companies.map((company) => {
    return company.name;
  });

  return { companyText, stringVersion: companyText.join(", ") };
};

export default getProductionCompany;
