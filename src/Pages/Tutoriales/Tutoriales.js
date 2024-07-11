import React from 'react'
import './Tutoriales.css'; // Asegúrate de importar tu archivo CSS

export default function Tutoriales() {
  return (
    <div className='mt-3'>
        <h1 className='titulo text-start p-3'>Tutoriales</h1>
        <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />

        <div className='video-grid'>
            <div className='video-wrapper'>
                <iframe src="https://www.youtube.com/embed/RB5tR_nqUEw?si=bhnAwdL8HefJtqKM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className='video-wrapper'>
                <iframe src="https://www.youtube.com/embed/RB5tR_nqUEw?si=bhnAwdL8HefJtqKM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className='video-wrapper'>
                <iframe src="https://www.youtube.com/embed/RB5tR_nqUEw?si=bhnAwdL8HefJtqKM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    </div>
  )
}