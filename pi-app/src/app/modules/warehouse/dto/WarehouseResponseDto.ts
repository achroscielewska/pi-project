import { Warehouse } from '../model/Warehouse';

export interface WarehouseResponseDto {
  code: string;
  elements: Warehouse;
}
