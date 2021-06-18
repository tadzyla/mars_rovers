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
      overflow: 'hidden',
      backgroundColor: 'black',
    
    },
    gridList: {
      width: 1000,
      height: 1000,
    },
  }));
  

const Opportunity = () => {
    const classes = useStyles();
    const [sol, setSol] = useState('15');
    const [camera, setCamera] = useState('fhaz')
    const { data, isPending, error } = useFetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=${sol}&camera=${camera}&page=1&api_key=qQ3X7Uk2HHs4IDxWimSn50yxS6vAq87frJe5Dluy`);
    console.log(data);
    
    return ( 
        <div>
            <h1 style={{color: 'white', textAlign: 'center', marginBottom: '50px'}} >This is Opportunity page</h1>

            
            {error && <div>{ error }</div>}
            {isPending && <div style={{color: 'white', font: 'caption'}} >Getting photos from Mars, please be patient...</div> }

            <div className="search">
                <h2>Search photos by number of SOL (Martian rotation) and camera type, gallery will load automatically</h2>
                <form>
                    <label style={{marginTop: '30px'}}>Write sol number here</label>
                    <input 
                    type="text"
                    maxLength='4'
                    value={sol}
                    onChange={(e) => setSol(e.target.value)}
                    style={{boxShadow: '3px 3px 20px 2px rgb(221, 100, 73)', padding: '10px', color: 'black', fontSize: '15px'}}
                    />
                    
                    <label style={{marginTop: '30px'}}>Select camera type</label>
                    <select
                        value={camera}
                        onChange={(e) => setCamera(e.target.value)}
                        style={{boxShadow: '3px 3px 20px 2px rgb(221, 100, 73)', padding: '10px', color: 'black', fontSize: '15px'}}
                        >
                        <option style={{color: 'black'}} value="fhaz">Front Hazard Avoindance Camera</option>
                        <option style={{color: 'black'}} value="rhaz">Rear Hazard Avoindance Camera</option>
                        <option style={{color: 'black'}} value="navcam">Navigation Camera</option>
                    </select>
                </form>
            </div>
            
            {data && <p style={{padding: '30px', textAlign: 'center', color: 'white'}} >
                        Here are Opportunity photos on sol {sol} taken with {camera} camera, if it's loading no photos, choose another camera or sol
                    </p>
            }

            {data &&  <div className={classes.root}>
                            <GridList cellHeight={460} className={classes.gridList} cols={2}>
                                {data.photos.map(photo=> 
                                    <GridListTile key={photo.img_src} cols={photo.cols || 1}>
                                        <img src={photo.img_src} alt={photo.camera.full_name} 
                                        style={{width: '85%', heigth: '85%',  margin: '10px', boxShadow: '2px 2px 30px 5px rgb(221, 100, 73)', borderRadius: '10px'}}/>
                                    </GridListTile>
                                )}
                            </GridList>
                        </div>
            }
            </div>
    )}
 
export default Opportunity;