document.write(` <br>
    <div>Задача 2. Побудова графіків</div>
    <br>`);
import LineChart from "./2_OpenClose/LineChart.js";
class ChartRenderer {
    constructor(chartType) {
        this.chartType = chartType;
    }
    renderChart(data) {
        this.chartType.render(data);
    }
}
const chart = new ChartRenderer(new LineChart());
chart.renderChart([1, 4, 6, 2, 6, 7]);
