import React from 'react'
import useFetch from './useFetch';
import { useState } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden'
    },
    gridList: {
      width: '100%',
      height: 1000,
    },
  }));
  

const Curiosity = () => {
    const classes = useStyles();
    const [sol, setSol] = useState('14');
    const [camera, setCamera] = useState('fhaz')
    const { data, isPending, error } = useFetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&page=1&api_key=qQ3X7Uk2HHs4IDxWimSn50yxS6vAq87frJe5Dluy`);
    
    return ( 
        <div>
            <h1 className="title">This is Curiosity page</h1>

            
            {error && <div>{ error }</div>}
            {isPending && <div className="title">Getting photos from Mars, please be patient...</div> }

            <div className="search">
                <h3 className="title">Search photos by number of SOL (Martian rotation) and camera type, gallery will load automatically</h3>

                <form>
                    <label className="label">Write sol number here</label>
                    <input 
                    className="input"
                    type="text"
                    maxLength='4'
                    value={sol}
                    onChange={(e) => setSol(e.target.value)}
                    />
                    
                    <label className="label">Select camera type</label>
                    <select
                        className="input"
                        value={camera}
                        onChange={(e) => setCamera(e.target.value)}
                    >
                        <option style={{color: 'black'}} value="fhaz">Front Hazard Avoindance Camera</option>
                        <option style={{color: 'black'}} value="rhaz">Rear Hazard Avoindance Camera</option>
                        <option style={{color: 'black'}} value="navcam">Navigation Camera</option>
                    </select>
                </form>
            </div>
            
            {data &&  <div className={classes.root}>
                            <h3 className="title">Here are Curiosity photos on SOL {sol} taken with {camera} camera <br/> 
                            <small className="title">*If it's loading no photos, choose another camera or SOL</small> </h3>
                            <GridList cellHeight={700} className={classes.gridList} cols={2}>
                                {data.photos.map(photo=> 
                                    <GridListTile key={photo.img_src} cols={photo.cols || 1}>
                                        <img src={photo.img_src} alt={photo.camera.full_name} className="image" />
                                    </GridListTile>
                                )}
                            </GridList>
                        </div>
            }
            </div>
    )}
 
export default Curiosity;