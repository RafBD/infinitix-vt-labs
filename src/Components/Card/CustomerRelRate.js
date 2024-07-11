import React from 'react'
import { Card, ProgressBar } from '@tremor/react';

export function CustomerRelationRate () {
    return (
        <div>
            <Card className="mx-auto max-w-xs" decoration="top" decorationColor="green">
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Retención de Clientes</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
                <ProgressBar value={50} color='green'/>
            </Card>
        </div>
      );
}