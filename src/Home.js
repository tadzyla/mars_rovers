import useFetch from './useFetch';

const Home = () => {
   const {data, isPending, error } = useFetch('https://mars-photos.herokuapp.com/api/v1/rovers')
   console.log(data)

    return ( 
        <div>
            {error && <div>{ error }</div>}
            {isPending && <div style={{color: 'white', font: 'caption'}} >Getting information from Mars, please be patient...</div> }
           <h1 style={{padding: '10px'}}>This is home page for Mars Rovers</h1>
           <h3 style={{padding: '10px'}} >Choose any rover from the top menu to look at the photo gallery</h3>


           {data &&  data.rovers.map((rover, index)=> 
                        <div>
                            <h3 style={{color: 'white', padding: '5px'}} > 
                              <big style={{padding: '5px'}}>{rover.name}</big>  : 
                              (Launch date - {rover.launch_date}, 
                              Landing date - {rover.landing_date}, 
                              Max Sol - {rover.max_sol},
                              Status - {rover.status},
                              Total photos - {rover.total_photos}
                           </h3>
                        </div>
                )}

        </div>
     );
}
 
export default Home;