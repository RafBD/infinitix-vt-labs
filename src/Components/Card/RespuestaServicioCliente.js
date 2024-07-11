import React from 'react'
import { Card, ProgressBar } from '@tremor/react';

export function RespuestaServicioCliente () {
    return (
        <div>
            <Card className="mx-auto max-w-xs" decoration="top" decorationColor="purple">
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Respuesta del Servicio al Cliente</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">10%</p>
                <ProgressBar value={72} color='purple'/>
            </Card>
        </div>
      );
}