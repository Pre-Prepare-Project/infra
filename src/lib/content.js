import { SERVICES, getServiceBySlug, getAllServiceSlugs, getRelatedServices } from "@/data/services";
import { PRODUCTS, getProductBySlug, getAllProductSlugs, getRelatedProducts } from "@/data/products";
import { getTechnologyCategories, getAllTechnologyNames } from "@/data/technologies";
import {
  getPortfolioBySlug,
  getAllPortfolioSlugs,
  getRelatedPortfolio,
} from "@/data/portfolio";
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
  getRelatedCaseStudies,
} from "@/data/caseStudies";
import {
  getJobBySlug,
  getAllJobSlugs,
  getRelatedJobs,
} from "@/data/careers";
import { getServiceIcon } from "@/lib/service-icons";

export function getServicesWithIcons() {
  return SERVICES.map((service) => ({
    ...service,
    label: service.title,
    icon: getServiceIcon(service.iconKey),
  }));
}

export function getServiceWithIcon(slug) {
  const service = getServiceBySlug(slug);
  if (!service) {
    return null;
  }
  return {
    ...service,
    label: service.title,
    icon: getServiceIcon(service.iconKey),
  };
}

export function getProductsForNav() {
  return PRODUCTS.map((product) => ({
    ...product,
    label: product.title,
  }));
}

export function getProductForDisplay(slug) {
  const product = getProductBySlug(slug);
  if (!product) {
    return null;
  }
  return {
    ...product,
    label: product.title,
  };
}

export {
  getServiceBySlug,
  getProductBySlug,
  getAllServiceSlugs,
  getRelatedServices,
  getAllProductSlugs,
  getRelatedProducts,
  getTechnologyCategories,
  getAllTechnologyNames,
  getPortfolioBySlug,
  getAllPortfolioSlugs,
  getRelatedPortfolio,
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
  getRelatedCaseStudies,
  getJobBySlug,
  getAllJobSlugs,
  getRelatedJobs,
};
