import Facts from './facts/Facts';


const Home = () => {



    return ( 
      <div className='main'>

         <div className="mars-title">
            <h1 className="title mars">Welcome to Mars</h1>
            <div className="mars-image">
               <img src="./mars.svg" alt="mars-planet" />
            </div>
         </div>
       
         <h4>* random images taken by rovers</h4>

         <table className="table">
            
               <img className='favorite-photo' src="./1.jpg" alt="photo1" />
               <img className='favorite-photo' src="./1.jpeg" alt="photo2" />
               <img className='favorite-photo' src="./2.jpg" alt="photo3" />
               <img className='favorite-photo' src="./2.jpeg" alt="photo4" />
            
           
               <img className='favorite-photo' src="./7.jpg" alt="photo5" />
               <img className='favorite-photo' src="./8.jpeg" alt="photo6" />
               <img className='favorite-photo' src="./8.jpg" alt="photo7" />
               <img className='favorite-photo' src="./10.jpg" alt="photo8" />
            
         </table>
         <Facts />
         

      </div>
     );
}
 
export default Home;