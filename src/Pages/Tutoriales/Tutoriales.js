import React from 'react'
import './Tutoriales.css'; // Asegúrate de importar tu archivo CSS

export default function Tutoriales() {
  return (
    <div className='mt-3'>
        <h1 className='titulo text-start p-3'>Tutoriales <span><i className="pi pi-video"></i></span> </h1>
        <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />

        <div className='video-grid'>
            <div className='video-wrapper'>
                <h2 className='titulo-video text-center p-3'>Login</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/DSapUITOXm4?si=eHaseKDHqgiMRcKm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='video-wrapper'>
                <h2 className='titulo-video text-center p-3'>Menú | Configuración de Usuario</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tX1uhw5QEXY?si=t2lKyaNijFFBqMVr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='video-wrapper'>
                <h2 className='titulo-video text-center p-3'>SideBar (Barra Lateral)</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/agxSdRJLZhA?si=vKH3lrrfojCFgPka" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}