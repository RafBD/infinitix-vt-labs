import React from 'react';
import { Link } from 'react-router-dom';

export const SettingsButton = () => {
    return(
            <button className='flex items-center justify-center'>
                <Link to='/Settings' className="flex justify-center items-center gap-2">
                    <i className="pi pi-spin pi-cog"></i>
                    Configuración
                </Link>
            </button>  
    )
}