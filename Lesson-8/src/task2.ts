document.write(
  ` <br>
    <div>Задача 2. Побудова графіків</div>
    <br>`
);
// Клас ChartRenderer створює різні типи графіків: лінійний, стовпчиковий, круговий.
// Якщо потрібно додати новий тип графіка, код доведеться змінювати.
// ❌ Неправильна реалізація — порушення принципу відкритості/закритості
// class ChartRendererBad {
//   renderChart(type: string, data: number[]) {
//     if (type === "line") {
//       console.log("Rendering line chart with", data);
//     } else if (type === "bar") {
//       console.log("Rendering bar chart with", data);
//     } else if (type === "pie") {
//       console.log("Rendering pie chart with", data);
//     } else {
//       console.log("Unknown chart type");
//     }
//   }
import IChartType from "./2_OpenClose/ChartType.js";
import LineChart from "./2_OpenClose/LineChart.js";
import BarChart from "./2_OpenClose/BarChart.js";
import PieChart from "./2_OpenClose/PieChart.js";

class ChartRenderer {
  constructor(private chartType: IChartType) {}

  renderChart(data: number[]) {
    this.chartType.render(data);
  }
}

const chart = new ChartRenderer(new LineChart ());

chart.renderChart([1, 4, 6, 2, 6, 7]);
