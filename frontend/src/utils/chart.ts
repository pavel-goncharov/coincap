import {ChartData, ChartOptions} from 'chart.js';
import {Colors} from '@/styles/vars';
import {IHistory} from '@/types/api';
import {line} from '@/types/ui';

export function getChartData(cryptoHistory: IHistory[]): ChartData<line> {
  const historyChartData: ChartData<line> = {
    labels: cryptoHistory?.map((historyItem: IHistory) => new Date(historyItem.time).getHours() + 'PM'),
    datasets: [{
      data: cryptoHistory?.map((historyItem: IHistory) => Number(historyItem.priceUsd)),
      fill: true,
      borderColor: Colors.PURPLE,
      backgroundColor: Colors.PURPLE_ALPHA,
      borderWidth: 4,
    }],
  };

  return historyChartData;
}

export const chartOptions: ChartOptions<line> = {
  responsive: true,
  interaction: {
    intersect: false,
  },
  maintainAspectRatio: false
};