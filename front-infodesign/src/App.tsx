import './App.css';
import {DateRangePicker} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import {Api} from './api/api';
import {Request} from './models/request.interface';
import {useEffect, useState} from 'react';

const App = () => {
  useEffect(() => {
    const request: Request = {
      fechainicial: '2010-01-01',
      fechafinal: '2010-01-31',
    };
    Api.getPeoresTramosCliente(request)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <DateRangePicker />
    </>
  );
};

export default App;
