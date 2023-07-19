// This card is used in homepage second section in home ( HowItWorks.js )
const MobileHowWorks = ({icon, title, description}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-4 rounded-lg '>
      {/* icon */}
      <div>
        
        <div className='w-full'> 

        <i className=''>
          <img className="w-8 h-8 " src={icon} alt="icon" />
        </i>
        </div>
        
      </div>

      {/* title and description */}
      <div className='flex flex-col gap-4 text-center'>
          <h4 className='text-[#525252] font-normal text-xs'>{title}</h4>
      </div>
    </div>
  )
}

export default MobileHowWorks