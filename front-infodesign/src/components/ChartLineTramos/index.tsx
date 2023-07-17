import {Chart as ChartJS, registerables} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {Tramos} from '../../models/tramos.interface';
ChartJS.register(...registerables);
import './index.css';

interface Props {
  jsonData: Tramos[] | undefined;
}

const ChartLineTramos = ({jsonData}: Props) => {
  const data = {
    labels: ['Tramo 1', 'Tramo 2', 'Tramo 3', 'Tramo 4', 'Tramo 5'],
    datasets: [
      {
        label: 'Consumo',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
      },
      {
        label: 'Pérdidas',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Costo',
        data: [],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  jsonData.forEach(item => {
    data.datasets[0].data.push(item.consumo);
    data.datasets[1].data.push(item.perdidas);
    data.datasets[2].data.push(item.costo);
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Comparación del consumo, pérdidas y costo en cada tramo',
      },
    },
  };
  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartLineTramos;
