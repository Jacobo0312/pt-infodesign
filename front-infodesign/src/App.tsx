import './App.css';
import {DateRangePicker} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import {Api} from './api/api';
import {Request} from './models/request.interface';
import {useEffect, useState} from 'react';
import {DateRange} from 'rsuite/esm/DateRangePicker/types';
import TableID from './components/TableID';
import {Perdidas, perdidasColumns} from './models/perdidas.interface';
import {Cliente, clienteColumns} from './models/cliente.interface';
import {Tramos, tramosColumns} from './models/tramos.interface';
import ChartBarTramos from './components/ChartBarTramos';
import ChartLineTramos from './components/ChartLineTramos';
import ChartBarCliente from './components/ChartBarCliente';
import TramoCharts from './components/ChartTortaTramos';
import ChartTortaTramos from './components/ChartTortaTramos';

const App = () => {
  const [dateRange, setDateRange] = useState<Request>({
    fechainicial: '2010-01-01',
    fechafinal: '2010-01-31',
  });
  const [dataPerdidas, setDataPerdidas] = useState<Perdidas[] | undefined>([]);
  const [dataClientes, setDataClientes] = useState<Cliente[] | undefined>([]);
  const [dataTramos, setDataTramos] = useState<Tramos[] | undefined>([]);

  const handleDateRangeChange = (dates: DateRange | null) => {
    if (!dates) return;
    const fechainicial = dates[0].toISOString().split('T')[0];
    const fechafinal = dates[1].toISOString().split('T')[0];
    setDateRange({
      fechainicial,
      fechafinal,
    });
  };

  useEffect(() => {
    Api.getPeoresTramosCliente(dateRange)
      .then(data => {
        setDataPerdidas(data);
      })
      .catch(err => {
        console.log(err);
      });
    Api.getClientesData(dateRange)
      .then(data => {
        setDataClientes(data);
      })
      .catch(err => {
        console.log(err);
      });
    Api.getTramosData(dateRange)
      .then(data => {
        setDataTramos(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [dateRange]);
  return (
    <>
      <h1>PRUEBA TECNICA INFO-DESIGN</h1>
      <div className="dataPicker-container">
        <h4>Selecciona el rango de fechas:</h4>
        <DateRangePicker onChange={handleDateRangeChange} />
      </div>
      <div className="main-container">
        <TableID
          data={dataPerdidas}
          defaultColumns={perdidasColumns}
          title="Top 20 peores Tramos/Cliente"
        />
        <TableID
          data={dataTramos}
          defaultColumns={tramosColumns}
          title="Tabla de Tramos"
        />
      </div>
      <div className="main-container">
        <ChartBarTramos jsonData={dataTramos} />
        <ChartLineTramos jsonData={dataTramos} />
      </div>
      <TableID
        data={dataClientes}
        defaultColumns={clienteColumns}
        title="Tabla de clientes"
      />
      <ChartBarCliente jsonData={dataClientes} />
      <ChartTortaTramos jsonData={dataClientes} />
    </>
  );
};

export default App;
