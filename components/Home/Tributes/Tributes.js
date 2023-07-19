import React from 'react'

const Tributes = () => {
  // people who tributed
  const Peoples = [
    {
      person_profile:"",
      person_title:"",
      person_name:"",
      date:""
    }
  ]
  return (
    <div className=" bg-[#FAF7F0] h-[60vh] flex items-center justify-center">
    <div className="  w-full sm:px-12 px-4  pb-12 items-start justify-between">
       <div className='flex items-center justify-between'>
        {/* section title */}
          <h4>Tributes of the day</h4>

        {/* View all tributes button */}
        <button className='px-4 py-2 rounded-full bg-[#D09770, #C68E69, #A67354, #8E5F44, #80533B, #7C4F38]'>
          View all
        </button>
        </div>
      </div>
    </div>
  )
}

export default Tributes