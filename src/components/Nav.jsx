import React from 'react'

const Nav = ({theme, toggleTheme}) => {
  return (
   
    <div className="w-full h-20 md:h-24 card  rounded-none flex justify-between items-center px-4">
      <img src={theme === 'dark' ? '/fitMates_Logo_black.png' : '/fitMates_Logo_white.png'} className="w-20 h-20 md:w-24 md:h-24" alt="fitMates logo" />
      <div className="flex items-center gap-2 md:gap-4">
        {/* Dark Mode Toggle Button */}
      <button className="btn-trans" onClick={toggleTheme}><span className="material-symbols-outlined">
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
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
        <button className="btn flex items-center gap-2">
          <span className="md:hidden material-symbols-outlined">logout</span>
          <span className="hidden md:block">Logout</span>
        </button>
      </div>
    </div>
   
  )
}

export default Nav
