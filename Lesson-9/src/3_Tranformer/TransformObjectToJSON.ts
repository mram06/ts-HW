import ITransformer from "./ITransformer";

export default class TransformObjectToJSON
  implements ITransformer<object, string>
{
  _transform(value: object): string {
    return JSON.stringify(value);
  }
}
