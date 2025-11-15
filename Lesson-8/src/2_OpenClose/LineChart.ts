import IChartType from "./ChartType";

export default class LineChart implements IChartType {
  render(data: number[]) {
    console.log("Rendering line chart with", data);
  }
}
