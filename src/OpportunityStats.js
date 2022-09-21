import useFetch from "./useFetch"

const OpportunityStats = () => {

const {data, isPending, error } = useFetch('https://mars-photos.herokuapp.com/api/v1/rovers')

return (
<div className="rovers_stats">

            {error && <div>{ error }</div>}
            {isPending && <div className="title" >Getting information from Mars, please be patient...</div> }
            {data?.rovers.filter(roverSpirit => roverSpirit.name === 'Opportunity').map(rover => 
                  <div>
                     <h3 style={{color: 'white', padding: '15px'}} > 
                         
                           <big className="bigText">Launch date</big> - {rover.launch_date} <br/>
                           <big className="bigText"> Landing date</big> - {rover.landing_date} <br/>
                           <big className="bigText">Max Sol</big> - {rover.max_sol} <br/>
                           <big className="bigText">Status</big> - {rover.status} <br/>
                           <big className="bigText">Total photos</big> - {rover.total_photos} <br/>
                     </h3>
                  </div>
                )}
        </div>
)
}

export default OpportunityStats;