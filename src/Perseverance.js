import React from 'react'
import useFetch from './useFetch';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ImageList, ImageListItem } from '@material-ui/core';
import PerseveranceStats from './PerseveranceStats';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden'
    },
    gridList: {
      width: '100%',
      height: 'auto'
    },
  }));
  

const Perseverance = () => {
    const classes = useStyles();
    const [sol, setSol] = useState('113');
    const [camera, setCamera] = useState('NAVCAM_LEFT')
    const { data, isPending, error } = useFetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=${sol}&camera=${camera}&page=1&api_key=qQ3X7Uk2HHs4IDxWimSn50yxS6vAq87frJe5Dluy`);
    
    
    return ( 
        <div>
            <h1 className="title">This is Perseverance page</h1>
            <PerseveranceStats />

            
            {error && <div>{ error }</div>}
            {isPending && <div className="title">Getting photos from Mars, please be patient...</div> }

            <div className="search">
            <h3 className="title">Search photos by number of SOL (Martian rotation) and camera type, gallery will load automatically</h3>

                <form>
                    <label className="label">Sol number</label>
                    <input 
                    className="input"
                    type="text"
                    maxLength='4'
                    value={sol}
                    onChange={(e) => setSol(e.target.value)}
                    />
                    
                    <label className="label">Camera type</label>
                    <select
                        className="input"
                        value={camera}
                        onChange={(e) => setCamera(e.target.value)}
                    >
                        <option style={{color: 'black'}} value="NAVCAM_LEFT">Navigation Camera - Left</option>
                        <option style={{color: 'black'}} value="MCZ_RIGHT">Mast Camera Zoom - Right</option>
                        <option style={{color: 'black'}} value="FRONT_HAZCAM_RIGHT_A">Front Hazard Avoidance Camera - Right</option>
                    </select>
                </form>
            </div>
            
            {data &&  <div className={classes.root}>
                            <h3 className="title"> 
                            <small>*If it's loading no photos, choose another camera or SOL</small> 

                            <br/>Here are Perseverance photos on SOL {sol} taken with {camera} camera 
                                
                            </h3>
                            
                            <ImageList cellHeight={700} className={classes.gridList} cols={2}>
                                {data.photos.map(photo=> 
                                    <ImageListItem key={photo.img_src} cols={photo.cols || 1}>
                                        <img src={photo.img_src} alt={photo.camera.full_name} className="image" />
                                    </ImageListItem>
                                )}
                            </ImageList>
                        </div>
            }
            </div>
    )}
 
export default Perseverance;