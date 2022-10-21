import {ChartData, ChartOptions} from 'chart.js';
import {Colors} from 'styles/vars';
import {IHistoryItem} from 'types/api';
import {line} from 'types/ui';

export function getChartData(cryptoHistory: IHistoryItem[]): ChartData<line> {
  const historyChartData: ChartData<line> = {
    labels: cryptoHistory?.map((historyItem: IHistoryItem) => new Date(historyItem.time).getHours() + 'PM'),
    datasets: [{
      data: cryptoHistory?.map((historyItem: IHistoryItem) => Number(historyItem.priceUsd)),
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