import React, { useState} from 'react';
import { useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import 'primeicons/primeicons.css';
import logo from "../../Icons/logo.svg" 
import './BarSide.css';

export default function BarSide() {
    const [visible, setVisible] = useState(false);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);

    return (
        <div>
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <div className="sidebar">
                    <div className="logo-container">
                        <img src="" alt="Logo de iNFiNiTiX " />
                        <img src={logo} className='logo'/>
                        <h2>iNFiNiTiX</h2>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <div ref={btnRef1} className='submenu-container'>
                                        <span className='dropdown-menu'>FAVORITES</span>
                                        <i className="pi pi-chevron-down dropdown-menu"></i>
                                        <Ripple />
                                    </div>
                                </StyleClass>
                                <ul>
                                    <li>
                                        <a href='/'>
                                            <i className="pi pi-home"></i>
                                            <span>Dashboard</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i className="pi pi-bookmark"></i>
                                            <span>Bookmarks</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <a ref={btnRef2}>
                                                <i className="pi pi-chart-line"></i>
                                                <span>Reports</span>
                                                <i className="pi pi-chevron-down"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul>
                                            <li>
                                                <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                    <a ref={btnRef3}>
                                                        <i className="pi pi-chart-line"></i>
                                                        <span>Revenue</span>
                                                        <i className="pi pi-chevron-down"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul>
                                                    <li>
                                                        <a href='/'>
                                                            <i className="pi pi-table"></i>
                                                            <span>View</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='/'>
                                                            <i className="pi pi-search"></i>
                                                            <span>Search</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href='/'>
                                                    <i className="pi pi-chart-line"></i>
                                                    <span>Expenses</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i className="pi pi-users"></i>
                                            <span>Team</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i className="pi pi-comments"></i>
                                            <span>Messages</span>
                                            <span>3</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i className="pi pi-calendar"></i>
                                            <span>Calendar</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i className="pi pi-cog"></i>
                                            <span>Settings</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <div ref={btnRef4} className='submenu-container'>
                                        <span className='dropdown-menu'>APPLICATION</span>
                                        <i className="pi pi-chevron-down dropdown-menu"></i>
                                        <Ripple />
                                    </div>
                                </StyleClass>
                                <ul>
                                    <li>
                                        <a href='/'>
                                            <i className="pi pi-folder"></i>
                                            <span>Projects</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i className="pi pi-chart-bar"></i>
                                            <span>Performance</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i className="pi pi-cog"></i>
                                            <span>Settings</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </Sidebar>
            {/* Botón para desplegar la barra lateral  */}
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} className="button"></Button>
        </div>
    )
}