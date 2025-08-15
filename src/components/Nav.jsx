import React from 'react'

const Nav = () => {
  return (
    <div className="w-full fixed h-20 md:h-24 card rounded-none flex justify-between items-center px-4">
      <img src="/fitMates_Logo_white.png" className="w-20 h-20 md:w-24 md:h-24" alt="fitMates logo" />
      <div className="flex items-center gap-2 md:gap-4">
      <button className="btn-trans"><span className="material-symbols-outlined">
dark_mode
</span></button>
        <button className="btn-trans">
          <span className="material-symbols-outlined">
            account_circle
          </span>{" "}
        
        </button>
        <button className="btn-trans">
          <span className="material-symbols-outlined">
            settings
          </span>
        </button>
        <button className="btn">
          <span className="material-symbols-outlined md:hidden">logout</span>
          <span className="hidden md:block">Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Nav
