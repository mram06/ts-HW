import ITransformer from "./ITransformer";

export default class TransformStringToNumber
  implements ITransformer<string, number>
{
  _transform(value: string): number {
    return parseInt(value);
  }
}
