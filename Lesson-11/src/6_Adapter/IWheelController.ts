export default interface IWheelController {
  accelerate(pressure: number): void;
  turnLeftWheel(): void;
  turnRightWheel(): void;
}
