
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function PolarAreaDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = '#fff';
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            datasets: [
                {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--bluegray-500'),
                        documentStyle.getPropertyValue('--blue-500')
                    ],
                    label: 'My dataset'
                }
            ],
            labels: ['Tarjetas Gráficas', 'Procesadores', 'Memoria RAM', 'Fuentes de Poder', 'Discos Duros SSD']
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div> 
            <h1 className="text-xl text-center text-white">Productos más vendidos</h1>
            <div className="card flex items-center justify-center bg-slate-900 text-white mt-2 rounded-[0.5rem] w-auto">
            
            <Chart type="polarArea" data={chartData} options={chartOptions} className='w-[20rem] flex items-center justify-center' />
            </div>

        </div>
        
    )
}
        