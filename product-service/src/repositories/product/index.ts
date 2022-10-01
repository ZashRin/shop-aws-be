import { DatabaseProductRepository } from './DatabaseProductRepository';
import { getDataSource } from '@repositories/dataSource';
import { ProductRepository } from "./types";

let productRepository: ProductRepository;

export function getProductRepository(): ProductRepository {
  if(!productRepository) {
    productRepository = new DatabaseProductRepository(getDataSource);
  }

  return productRepository;
}
