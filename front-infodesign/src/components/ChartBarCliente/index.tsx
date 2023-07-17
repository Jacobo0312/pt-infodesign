import {Chart as ChartJS, registerables} from 'chart.js';
import {Bar} from 'react-chartjs-2';
ChartJS.register(...registerables);
import {Cliente} from '../../models/cliente.interface';
import './index.css';

interface Props {
  jsonData: Cliente[] | undefined;
}

const ChartBarTramos = ({jsonData}: Props) => {
  if (!jsonData || jsonData.length === 0) {
    return null;
  }

  const tiposConsumo = ['Residencial', 'Comercial', 'Industrial'];

  const dataPorTipo = tiposConsumo.map(tipo => {
    return {
      label: tipo,
      consumo: jsonData.map(tramo => tramo[`consumo_${tipo.toLowerCase()}`]),
      perdidas: jsonData.map(tramo => tramo[`perdidas_${tipo.toLowerCase()}`]),
      costo: jsonData.map(tramo => tramo[`costo_${tipo.toLowerCase()}`]),
    };
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
  };

  return (
    <div className="charts-container ">
      {dataPorTipo.map((data, index) => (
        <div key={index} className="chartCliente-container">
          <Bar
            data={{
              labels: jsonData.map(tramo => tramo.Linea),
              datasets: [
                {
                  label: 'Consumo',
                  data: data.consumo,
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(255, 99, 132, 1)',
                  borderWidth: 1,
                },
                {
                  label: 'Pérdidas',
                  data: data.perdidas,
                  backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  borderColor: 'rgba(54, 162, 235, 1)',
                  borderWidth: 1,
                },
                {
                  label: 'Costo',
                  data: data.costo,
                  backgroundColor: 'rgba(255, 206, 86, 0.2)',
                  borderColor: 'rgba(255, 206, 86, 1)',
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              ...options,
              plugins: {
                ...options.plugins,
                title: {
                  display: true,
                  text: `Comparación de ${data.label} en cada tramo`,
                },
              },
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ChartBarTramos;
