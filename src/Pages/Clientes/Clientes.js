import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './Clientes.css';

const Clientes = () => {
  const clientes = [
    { id: 1, nombre: 'Oso de Peluche', email: 'oso.peluce@example.com', estado: 'nose' },
    { id: 2, nombre: 'Oso negro', email: 'ositonegro.ositos@example.com', estatus_cliente: 'Activo' },
  ];

  const compras = [
    { id: 1, ncompra: '4029', fecha: '03-05-1995', productos: 'VT2060' },
    { id: 2, ncompra: '4029', fecha: '03-05-1995', productos: 'VT2060' },
  ];

  const datos = [
    { id: 1, nombre_completo: 'Antonio Banderas', fnacimiento: '10/04/1990', telefono: '+5529764490'},
    { id: 2, nombre_completo: 'Antonio Banderas', fnacimiento: '10/04/1990', telefono: '+5529764490'},
  ];

  const verDetalleCliente = () => {
  };

  const verDetalleCompras = () => {
  };

  const verDetalleDatos = () => {
  };

  return (
    <div className="contenedor-principal">
      <h2 className='clientes'>Clientes</h2>
      <hr className="linea-divisoria" />

      <div className="seccion-tabview">
        <TabView>
          <TabPanel header="Información general">
            <InformacionGeneral clientes={clientes} verDetalleCliente={verDetalleCliente} />
          </TabPanel>
          <TabPanel header="Historial compras">
            <HistorialCompras compras={compras} verDetalleCompras={verDetalleCompras}/>
          </TabPanel>
          <TabPanel header="Datos de contacto">
            <DatosContacto datos={datos} verDetalleDatos={verDetalleDatos}/>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

const InformacionGeneral = ({ clientes, verDetalleCliente }) => {
  return (
    <div className="contenido-tab">
      <DataTable
        value={clientes}
        className="p-datatable-responsive"
        aria-label="Tabla de clientes"
        role="table"
        onRowClick={(e) => verDetalleCliente(e.data.id)}
      >
        <Column field="id" header="ID" />
        <Column field="nombre" header="Nombre" />
        <Column field="email" header="Email" />
        <Column field="estatus_cliente" header="Estado" />
      </DataTable>
    </div>
  );
};


const HistorialCompras = ({ compras, verDetalleCompras }) => {
  // Implementar componente para mostrar historial de compras
  return (
    <div className="contenido-tab">
      <DataTable
        value={compras}
        className="p.datatable-responsive"
        aria-label="Tabla de clientes"
        role="table"
        onRowClick={(e) => verDetalleCompras(e.data.id)}
        >
          <Column field="id" header="ID" />
          <Column field="ncompra" header="NCompra" />
          <Column field="fecha" header="Fecha" />
          <Column field="productos" header="Productos" />
        </DataTable>
    </div>
  );
};

const DatosContacto = ({ datos, verDetalleDatos}) => {
  // Implementar componente para mostrar datos de contacto
  return (
    <div className="contenido-tab">
      <DataTable
        value={datos}
        className="p.datatable-responsive"
        aria-label="Tabla de Datos de contacto"
        role="table"
        onRowClick={(e) => verDetalleDatos(e.data.id)}
        >
          <Column field="id" header="ID" />
          <Column field="nombre_completo" header="Nombre Completo" />
          <Column field="fnacimiento" header="Fecha de nacimiento" />
          <Column field="telefono" header="N.Telefono" />
        </DataTable>
    </div>
  );
};

export default Clientes;