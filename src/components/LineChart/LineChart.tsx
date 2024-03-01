import React, { useEffect, useState } from 'react'
import './linechart.module.scss'
import fetchDataChart from '../../api/chartApi';
import 'chartjs-adapter-moment'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  defaults
} from 'chart.js';
import { Chart, Line } from 'react-chartjs-2';
import { colorList } from '../../models/ColorChart';
import { Radio } from 'antd';
import { Ri24HoursFill } from "react-icons/ri";
import { BsCalendarDay } from 'react-icons/bs';
import { SlCalender } from "react-icons/sl";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

defaults.maintainAspectRatio = false;
defaults.responsive = true;

interface ChartDataset {
  label: string,
  data: any,
  backgroundColor: string,
  borderColor: string,
  borderWidth: number
}

const LineChart = () => {

  const [chart, setChart] = useState<any>([]);
  const [view, setView] = useState<string>('')
  const [timeScale, setTimeScale] = useState<string>('month');

  useEffect(() => {
    const access_token: any = localStorage.getItem('access_token');
    fetchDataChart(access_token)
      .then((response) => {
        console.log(response);
        setChart(response)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const listChart: ChartDataset[] = []
  const timestamp = chart.total?.map((item: any) => {
    return item.ts
  });

  const data = {
    labels: timestamp,
    datasets: listChart,
  }

  const options = {
    scales: {
      x: {
        type: 'time' as const,
        time: {
          unit: timeScale as any
        }
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  }

  {
    let i: number = 0;
    for (const key in chart) {
      const indexItem = chart[key];
      const chartItem = {
        label: key,
        data: indexItem.map((item: any) => item.value),
        backgroundColor: colorList[i],
        borderColor: colorList[i],
        borderWidth: 1
      }
      listChart.push(chartItem)
      i += 1;
    }
  }

  const handleTimeScaleChange = (scale: string): void => {
    setTimeScale(scale);
  };

  return (
    <div>
      <div>
        <Radio.Group optionType="button" buttonStyle="solid">
          <Radio.Button value="hour" onChange={() => handleTimeScaleChange('hour')}>
            <Ri24HoursFill />
          </Radio.Button>
          <Radio.Button value="day" onChange={() => handleTimeScaleChange('day')}>
            <BsCalendarDay />
          </Radio.Button>
          <Radio.Button value="month" onChange={() => handleTimeScaleChange('month')}>
            <SlCalender />
          </Radio.Button>
        </Radio.Group>
      </div>
      <div>
        <Chart type='line' data={data} options={options} />
      </div>
    </div>
  );
}

export default LineChart