import useFetch from './useFetch';

const Home = () => {
   const {data, isPending, error } = useFetch('https://mars-photos.herokuapp.com/api/v1/rovers')  // destructing properties from url endpoint



    return ( 
      <div className='main'>

         <div className="mars-title">
            <h1 className="title mars">Welcome to Mars</h1>
            <div className="mars-image">
               <img src="./mars.svg" alt="mars-planet" />
            </div>
         </div>
       

      <table className="table">
            <tr>
               <td><img className='favorite-photo' src="./1.jpg" alt="photo1" /></td>
               <td><img className='favorite-photo' src="./1.jpeg" alt="photo2" /> </td>
               <td><img className='favorite-photo' src="./2.jpg" alt="photo3" /> </td>
               <td><img className='favorite-photo' src="./2.jpeg" alt="photo4" /> </td>
            </tr>
            <tr>
               <td><img className='favorite-photo' src="./7.jpg" alt="photo5" /> </td>
               <td><img className='favorite-photo' src="./8.jpeg" alt="photo6" /> </td>
               <td><img className='favorite-photo' src="./8.jpg" alt="photo7" /> </td>
               <td><img className='favorite-photo' src="./10.jpg" alt="photo8" /> </td>
            </tr>
      </table>

        <div className="rovers_stats">
            {error && <div>{ error }</div>}
            {isPending && <div className="title" >Getting information from Mars, please be patient...</div> }
            {data?.rovers.map(rover => 
                  <div>
                     <h3 style={{color: 'white', padding: '15px'}} > 
                        <big className='bigText'>{rover.name}</big>  : 
                           Launch date - {rover.launch_date}, 
                           Landing date - {rover.landing_date}, 
                           Max Sol - {rover.max_sol},
                           Status - <big className='active'>{rover.status}</big>,
                           Total photos - {rover.total_photos}
                     </h3>
                  </div>
                )}
        </div>
        </div>
     );
}
 
export default Home;