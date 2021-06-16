import React from 'react'
import useFetch from './useFetch';
import { useState } from 'react';

const Spirit = () => {
    const [sol, setSol] = useState('1');
    const [camera, setCamera] = useState('fhaz')
    const { data, isPending, error } = useFetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${sol}&camera=${camera}&page=1&api_key=qQ3X7Uk2HHs4IDxWimSn50yxS6vAq87frJe5Dluy`);
    console.log(data);
    
    return ( 
        <div className="curiosity">
            <h1 style={{color: 'white', textAlign: 'center', marginBottom: '100px'}} >This is Spirit page</h1>

            
            {error && <div>{ error }</div>}
            {isPending && <div style={{color: 'white', font: 'caption'}} >Getting photos from Mars, please be patient...</div> }

            <div className="search">
                <h2>Search photos by number of SOL (Martian rotation) and camera type, gallery will load automatically</h2>
                <form>
                    <label>Write sol number here</label>
                    <input 
                    type="text"
                    maxLength='4'
                    value={sol}
                    onChange={(e) => setSol(e.target.value)}
                    />
                    
                    <label>Select camera type</label>
                    <select
                        value={camera}
                        onChange={(e) => setCamera(e.target.value)}
                    >
                        <option value="fhaz">Front Hazard Avoindance Camera</option>
                        <option value="rhaz">Rear Hazard Avoindance Camera</option>
                        <option value="navcam">Navigation Camera</option>
                    </select>
                </form>
            </div>
            
            {data && <p style={{padding: '30px', textAlign: 'center', color: 'white'}} >Here are Spirit photos on sol {sol} taken with {camera} camera, if it's loading no photos, choose another camera or sol</p>}

            {data &&  data.photos.map((photo, index)=> 
                        <div> 
                            <p style={{color: 'white'}}>Photo {index+1}</p>
                            <img src={photo.img_src} alt={photo.camera.full_name} />
                        </div>
                )}

        </div>
     );
}
 
export default Spirit;