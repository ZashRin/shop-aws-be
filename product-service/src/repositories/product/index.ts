import { MockProductRepository } from "./MockProductRepository";
import { ProductRepository } from "./types";

let productRepository: ProductRepository;

export function getProductRepository(): ProductRepository {
  if(!productRepository) {
    productRepository = new MockProductRepository();
  }

  return productRepository;
}
