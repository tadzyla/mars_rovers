import useFetch from './useFetch';

const Home = () => {
   const {data, isPending, error } = useFetch('https://mars-photos.herokuapp.com/api/v1/rovers')
   console.log(data)

    return ( 
      <>
           <h1 style={{padding: '25px', textAlign: 'center', color: 'ivory'}}>This is home page for Mars Rovers</h1>

      <table style={{width: '100%', padding: '5px', boxShadow: '3px 3px 10px 5px rgb(221, 100, 73)', margin: '30px'}}>
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

        <div>
            {error && <div>{ error }</div>}
            {isPending && <div style={{color: 'white', font: 'caption'}} >Getting information from Mars, please be patient...</div> }
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
        </>
     );
}
 
export default Home;