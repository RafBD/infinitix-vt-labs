import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./Clientes.css";

const Clientes = () => {
  const clientes = [
    {
      id: 1,
      nombre: "Oso de Peluche",
      email: "oso.peluche@example.com",
      estado: "Inactivo",
    },
    {
      id: 2,
      nombre: "Oso negro",
      email: "ositonegro.ositos@example.com",
      estado: "Activo",
    },
  ];

  const compras = [
    { id: 1, ncompra: "4029", fecha: "03-05-1995", productos: "VT2060" },
    { id: 2, ncompra: "4030", fecha: "04-06-1996", productos: "VT2061" },
  ];

  const datos = [
    {
      id: 1,
      nombre_completo: "Antonio Banderas",
      fnacimiento: "10/04/1990",
      telefono: "+5529764490",
    },
    {
      id: 2,
      nombre_completo: "Salma Hayek",
      fnacimiento: "02/09/1966",
      telefono: "+5529764491",
    },
  ];

  const handleRowClick = (type, id) => {
    switch (type) {
      case "cliente":
        console.log(`Ver detalle del cliente ${id}`);
        break;
      case "compra":
        console.log(`Ver detalle de la compra ${id}`);
        break;
      case "dato":
        console.log(`Ver detalle del dato de contacto ${id}`);
        break;
      default:
        break;
    }
  };

  return (
    <div className="contenedor-principal">
      <h2 className="clientes">Clientes</h2>
      <hr className="linea-divisoria" />

      <div className="seccion-tabview">
        <TabView>
          <TabPanel header="Información general">
            <InformacionGeneral
              clientes={clientes}
              onRowClick={handleRowClick}
            />
          </TabPanel>
          <TabPanel header="Historial compras">
            <HistorialCompras compras={compras} onRowClick={handleRowClick} />
          </TabPanel>
          <TabPanel header="Datos de contacto">
            <DatosContacto datos={datos} onRowClick={handleRowClick} />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

const InformacionGeneral = ({ clientes, onRowClick }) => (
  <div className="contenido-tab">
    <DataTable
      value={clientes}
      className="p-datatable-responsive"
      aria-label="Tabla de clientes"
      role="table"
      onRowClick={(e) => onRowClick("cliente", e.data.id)}
    >
      <Column field="id" header="ID" />
      <Column field="nombre" header="Nombre" />
      <Column field="email" header="Email" />
      <Column field="estado" header="Estado" />
    </DataTable>
  </div>
);

const HistorialCompras = ({ compras, onRowClick }) => (
  <div className="contenido-tab">
    <DataTable
      value={compras}
      className="p-datatable-responsive"
      aria-label="Tabla de compras"
      role="table"
      onRowClick={(e) => onRowClick("compra", e.data.id)}
    >
      <Column field="id" header="ID" />
      <Column field="ncompra" header="NCompra" />
      <Column field="fecha" header="Fecha" />
      <Column field="productos" header="Productos" />
    </DataTable>
  </div>
);

const DatosContacto = ({ datos, onRowClick }) => (
  <div className="contenido-tab">
    <DataTable
      value={datos}
      className="p-datatable-responsive"
      aria-label="Tabla de datos de contacto"
      role="table"
      onRowClick={(e) => onRowClick("dato", e.data.id)}
    >
      <Column field="id" header="ID" />
      <Column field="nombre_completo" header="Nombre Completo" />
      <Column field="fnacimiento" header="Fecha de Nacimiento" />
      <Column field="telefono" header="Teléfono" />
    </DataTable>
  </div>
);

export default Clientes;
