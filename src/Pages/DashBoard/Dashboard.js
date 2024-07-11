import React, { useEffect } from 'react';
import './Dashboard.css';
import { CustomerRetentionRate } from '../../Components/Card/CustomerRetentionRate';
import { ConversionRate } from '../../Components/Card/ConversionRate';
import { CustomerSatisfactionScore } from '../../Components/Card/CSAT';
import { RespuestaServicioCliente } from '../../Components/Card/RespuestaServicioCliente';
import PolarArea from '../../Components/Charts/PolarArea';
import HorizontalChart from '../../Components/Charts/HorizontalChart';

export default function Dashboard() {
  useEffect(() => {}, []);

  console.log('Rendering Dashboard');
  return (
    <div className='graficos'>
      <h2 className='titulo text-start p-3'>DashBoard</h2>
      <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />
      
      <div className='container mx-auto pt-10'>
        <div className='grid gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
          <CustomerRetentionRate />
          <ConversionRate />
          <CustomerSatisfactionScore />
          <RespuestaServicioCliente />
        </div>
        <div className='grid gap-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-9'>
          <PolarArea />
          <HorizontalChart />
        </div>
      </div>
    </div>
  );
}
