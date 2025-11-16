export default interface ITransformer<T, U> {
  _transform(value: T): U;
}
