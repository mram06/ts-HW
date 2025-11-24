interface IEngine {
  include(volume: number): void;
}
interface IBody {
  include(type: string): void;
}
interface IWheels {
  include(count: number): void;
}

export { IEngine, IBody, IWheels };
