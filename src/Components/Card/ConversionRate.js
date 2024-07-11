import React from 'react'
import { Card, ProgressBar } from '@tremor/react';

export function ConversionRate () {
    return (
        <div>
            <Card className="mx-auto max-w-xs" decoration="top" decorationColor="red">
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Tasa de Conversión</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$10,000</p>
                <ProgressBar value={72} color='red'/>
            </Card>
        </div>
      );
}