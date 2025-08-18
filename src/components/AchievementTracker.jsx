import React from 'react'

const AchievementTracker = () => {
  return (
    <div className='w-full flex flex-wrap mb-4'>
    <div className="w-1/2 p-2 md:w-1/4">

        <div className='card-achievement flex items-center p-2 gap-2 '>
          <span><img src="trophy.png" alt="Trophy" className="w-10 h-10" /></span>
          <div>
        <h4 className='text-lg font-bold'>Achievements</h4>
            
            <p className='text-sm'>3 earned</p>
          </div>
        </div>
        </div>
        <div className="w-1/2 p-2 md:w-1/4">
        <div className='card-streak flex items-center gap-4 p-2'>
          <span><img src="fire.png" alt="Fire" className="w-10 h-10" /></span>
          <div>
            <h4 className='text-lg font-bold'>Streak</h4>
            <p className='text-sm'>12 days</p>
          </div>
        </div>
        </div>
        <div className="w-1/2 p-2 md:w-1/4">
        <div className='card-goals flex items-center gap-4 p-2'>
          <span><img src="goal.png" alt="Goal" className="w-10 h-10" /></span>
          <div>
            <h4 className='text-lg font-bold'>Goals</h4>
            <p className='text-sm'>75% avg</p>
          </div>
        </div>
        </div>
        <div className="w-1/2 p-2 md:w-1/4">
        <div className='card-buddies flex items-center gap-4 p-2'>
          <span><img src="together.png" alt="Buddies" className="w-10 h-10" /></span>
          <div>
            <h4 className='text-lg font-bold'>Buddies</h4>
            <p className='text-sm'>3 online</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default AchievementTracker