import ITransformer from "./ITransformer";

export default class TransformNumberToString
  implements ITransformer<number, string>
{
  _transform(value: number): string {
    return value.toString();
  }
}
