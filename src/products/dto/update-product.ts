export class UpdateProductDto {
  readonly name?: string;
  readonly price?: number;
  readonly currency?: string;
  readonly categories?: string[];
  readonly measurements?: {
    weight?: number;
    height?: number;
    width?: number;
  };
}
