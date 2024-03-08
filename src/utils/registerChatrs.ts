import {
  ArcElement,
  BarElement,
  Chart,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  RadialLinearScale,
  TimeScale,
  Title,
  Tooltip,
} from 'chart.js';

export const registerCharts = () => {
  Chart.register(
    ArcElement,
    BarElement,
    TimeScale,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    RadialLinearScale,
    Filler
  );
};
