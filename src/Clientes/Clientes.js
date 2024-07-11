import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './Clientes.css'

export default function Clientes() {

    const cliente = [
        { id: 1, nombre: 'Juan Sánchez', email: 'juan.sa@gmail.com', estatus_cliente: 'Activo' },
        { id: 2, nombre: 'Cecilia Butrón', email: 'cecilia.bu@gmail.com', estatus_cliente: 'Active' },
        { id: 3, nombre: 'Rodrigo Hernández', email: 'rodrigo.he@gmail.com', estatus_cliente: 'Inactivo' },
        { id: 4, nombre: 'Rafael Benítez', email: 'rafael.be@gmail.com', estatus_cliente: 'Inactivo' },
    ]

    return (
        <div className='clientes-container'>
            <h2>Clientes</h2>
            <hr />
            <div className='tabla'>
                <TabView>
                <TabPanel header="Header I">
                        <div>
                            <DataTable value={cliente} className="p-datatable-responsive">
                                <Column field="id" header="ID" />
                                <Column field="nombre" header="Nombre" />
                                <Column field="email" header="Email" />
                                <Column field="estatus_cliente" header="Estatus" />
                            </DataTable>
                        </div>
                    </TabPanel>
                    <TabPanel header="Header II">
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </TabPanel>
                    <TabPanel header="Header III">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    )
}
