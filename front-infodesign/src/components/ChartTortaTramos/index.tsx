import {Chart as ChartJS, registerables} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
ChartJS.register(...registerables);
import {Cliente} from '../../models/cliente.interface';

interface Props {
  jsonData: Cliente[] | undefined;
}

const ChartTortaTramos = ({jsonData}: Props) => {
  if (!jsonData || jsonData.length === 0) {
    return null;
  }

  const tiposConsumo = ['Residencial', 'Comercial', 'Industrial'];

  const dataPorTramo = jsonData.map(tramo => {
    return {
      label: tramo.Linea,
      consumo: tiposConsumo.map(tipo => tramo[`consumo_${tipo.toLowerCase()}`]),
      perdidas: tiposConsumo.map(
        tipo => tramo[`perdidas_${tipo.toLowerCase()}`],
      ),
      costo: tiposConsumo.map(tipo => tramo[`costo_${tipo.toLowerCase()}`]),
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
  };

  return (
    <div>
      {dataPorTramo.map((data, index) => (
        <div key={index} className="chart-container">
          <h3>Consumo, Pérdidas y Costo en {data.label}</h3>
          <Doughnut
            data={{
              labels: tiposConsumo,
              datasets: [
                {
                  label: 'Consumo',
                  data: data.consumo,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                  ],
                  borderWidth: 2,
                },
                {
                  label: 'Pérdidas',
                  data: data.perdidas,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                  ],
                  borderWidth: 2,
                },
                {
                  label: 'Costo',
                  data: data.costo,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                  ],
                  borderWidth: 2,
                },
              ],
            }}
            options={options}
          />
        </div>
      ))}
    </div>
  );
};

export default ChartTortaTramos;
