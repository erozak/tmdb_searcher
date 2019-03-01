import { schema } from 'normalizr';

import { ObjectRecord, Integer } from '../../../globals';

export const PRODUCTION_COMPANY_SCHEMA_NAME = 'productionCompanies';

export interface IProductionCompany {
  id: Integer;
  name: string;
  origin_country: string;
  logo_path?: string | null;
}

export type ProductionCompanyEntities = ObjectRecord<IProductionCompany>;

interface IProductionCompanyEntityPack {
  productionCompanies: ProductionCompanyEntities;
};
export type ProductionCompanyEntityPack = IProductionCompanyEntityPack;

export const productionCompanySchema = new schema.Entity(PRODUCTION_COMPANY_SCHEMA_NAME);
