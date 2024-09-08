import React from 'react'

const Regions = () => {
  return (
    <>
      <section id='regions'>
        <h1>OUR REGIONS</h1>
<p>
Explore the finest properties in some of the most sought-after regions. From vibrant cityscapes to peaceful suburban neighborhoods and serene countryside retreats, we offer real estate opportunities in diverse locations that cater to your unique lifestyle. 
</p>       
 <div className="region_container">
        <div className="card">
         <img src="/region1.jpg" alt="mountains" />
         <h2>Mountains</h2>
         <p><span>90</span> Properties</p> 
        </div>
        <div className="card">
        <img src="/region2.jpg" alt="coastline" />
         <h2>Coastline</h2>
         <p><span>52</span> Properties</p> 
        </div>
        </div>
        </section> 
    </>
  )
}

export default Regions
