import useFetch from './useFetch';

const Home = () => {
   const {data, isPending, error } = useFetch('https://mars-photos.herokuapp.com/api/v1/rovers')  // destructing properties from url endpoint
   console.log(data?.rovers[1].name);

    return ( 
      <>
       <h1 className="title">Welcome to Mars</h1>

      <table className="table">
            <tr>
               <td><img src="./1.jpg" alt="photo1" width="85%" /></td>
               <td><img src="./1.jpeg" alt="photo2" width="85%" /> </td>
               <td><img src="./2.jpg" alt="photo3" width="85%" /> </td>
               <td><img src="./2.jpeg" alt="photo4" width="85%" /> </td>
            </tr>
            <tr>
               <td><img src="./7.jpg" alt="photo5" width="85%" /> </td>
               <td><img src="./8.jpeg" alt="photo6" width="85%" /> </td>
               <td><img src="./8.jpg" alt="photo7" width="85%" /> </td>
               <td><img src="./10.jpg" alt="photo8" width="85%" /> </td>
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
        </>
     );
}
 
export default Home;