import { middyfy } from "@libs/lambda";
import { getProductRepository } from "@repositories/product";
import { getLogger } from "@libs/logger";
import { createHandler } from "./createHandler";

export const main = middyfy(createHandler(getProductRepository, getLogger));
