import IChartType from "./ChartType";

export default class BarChart implements IChartType {
  render(data: number[]) {
    console.log("Rendering bar chart with", data);
  }
}
