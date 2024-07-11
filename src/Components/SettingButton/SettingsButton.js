import React from 'react';
import { Link } from 'react-router-dom';
import { Ripple } from 'primereact/ripple';

export const SettingsButton = () => {
    return(
        <div>
            <button className='flex items-center justify-center'>
                <Link to='/Settings' className="flex justify-center items-center gap-2">
                    <i className="pi pi-spin pi-cog"></i>
                    <span>Configuración</span>
                </Link>
            </button>
        </div>
        
    )
}