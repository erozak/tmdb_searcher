import { schema } from 'normalizr';

import { Integer, ObjectRecord } from '../../../globals';

export type ProductionCompanySchemaName = 'productionCompanies';
export const PRODUCTION_COMPANY_SCHEMA_NAME: ProductionCompanySchemaName =
  'productionCompanies';

export interface IProductionCompany {
  id: Integer;
  name: string;
  origin_country: string;
  logo_path?: string | null;
}

export type ProductionCompanyEntities = ObjectRecord<IProductionCompany>;

interface IProductionCompanyEntityPack {
  productionCompanies: ProductionCompanyEntities;
}
export type ProductionCompanyEntityPack = IProductionCompanyEntityPack;

export const productionCompanySchema = new schema.Entity(
  PRODUCTION_COMPANY_SCHEMA_NAME,
);
