import React, { useState, useRef, useEffect } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useAuth0 } from '@auth0/auth0-react';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-dark-purple/theme.css'; // Tema de PrimeReact
import 'primereact/resources/primereact.min.css'; // Estilos principales de PrimeReact
import 'primeflex/primeflex.css'; // PrimeFlex para layout
import './BarSide.css';
import { Link } from 'react-router-dom';
import logo from "../../Icons/logo.svg" 

export default function Sidebar1() {
    const { user } = useAuth0();
    const [visible, setVisible] = useState(false);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);

    useEffect(() => {
        if (visible) {
            document.body.classList.add('sidebar-open');
        } else {
            document.body.classList.remove('sidebar-open');
        }
    }, [visible]);

    return (
        <div className="sidebar flex justify-content-center">
        <Sidebar visible={visible} onHide={() => setVisible(false)} className="sidebar-lat">
                <div className=' flex align-items-center justify-content-center flex-shrink-0'>
                    <img src={logo} alt="Logo de BDS" className="logo" />
                    <span className='nombre'>iNFiNiTiX</span>
                </div>
                <div className="overflow-y-auto">
                    <ul className="list-none p-3 m-0">
                        <li>
                            <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                <div ref={btnRef1} className="submenu sidebar-option p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                    <span className="font-medium submenu">General</span>
                                    <i className="pi pi-chevron-down"></i>
                                    <Ripple />
                                </div>
                            </StyleClass>
                            <ul className="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <Link to='/Dashboard' className="sidebar-option p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-home mr-2"></i>
                                        <span className="font-medium">Dashboard</span>
                                        <Ripple />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Clientes' className="sidebar-option p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="font-medium">Clientes</span>
                                        <Ripple />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Facturas' className="sidebar-option p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-bookmark mr-2"></i>
                                        <span className="font-medium">Facturas</span>
                                        <Ripple />
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="list-none p-3 m-0">
                        <Link to='/Tutoriales' className="sidebar-option p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-youtube mr-2"></i>
                            <span className="font-medium">Tutoriales</span>
                            <Ripple />
                        </Link>
                    </ul>
                </div>
                <div className='usuario-container'>
                        <img src={user.picture} alt={user.name} className='imagen_usuario'/>
                    <div className='pic-name-user'>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                    
                </div>
        </Sidebar>
            <Button icon="pi pi-bars" onClick={() => setVisible(true)} />
        </div>
    );
}