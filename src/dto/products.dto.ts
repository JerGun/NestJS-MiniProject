export class ProductDto {
  readonly title: String;
  readonly description: String;
  readonly price: Number;
}

export class EditProductDto {
  readonly id: String;
  readonly title: String;
  readonly description: String;
  readonly price: Number;
}