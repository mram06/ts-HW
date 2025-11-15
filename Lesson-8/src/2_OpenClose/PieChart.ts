import IChartType from "./ChartType";

export default class PieChart implements IChartType {
  render(data: number[]) {
    console.log("Rendering pie chart with", data);
  }
}
