import type {ChartOptions, ChartData} from 'chart.js';
import {
  Chart as ChartJS, CategoryScale, LinearScale,
  PointElement, LineElement, Title,
  Tooltip, Filler
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {FC} from 'react';
import {line} from '@/types/ui';
import {Container} from '@/components/UI/Chart/Chart.styled'; 

interface IChart {
  options: ChartOptions<line>;
  data: ChartData<line> | null;
}

const Chart: FC<IChart> = (props) => {
  const {options, data} = props;
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
  );
  const errorMessage: string = 'Error. No data';
  return (
    <Container hasData={Boolean(data)}>
      {data ?
        <Line options={options} data={data}/>
        :
        <div>{errorMessage}</div>
      }
    </Container>
  );
}

export default Chart;