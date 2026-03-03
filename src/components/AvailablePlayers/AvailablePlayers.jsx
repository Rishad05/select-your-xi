import React, { use } from 'react';

const AvailablePlayers = ({ playersPromise }) => {
 const playerData = use(playersPromise)

 return (
  <div className="max-w-[1280px] mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
   {
    playerData.map(player => (
     <div className="card bg-base-100 w-96 shadow-sm p-4">
      <figure>
       <img
        src={player.playerimage}
        alt={player.name} />
      </figure>
      <div className="card-body">
       <h2 className="card-title">{player.name}</h2>
       <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
       <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
       </div>
      </div>
     </div>

    ))
   }
  </div>
 );
};

export default AvailablePlayers;