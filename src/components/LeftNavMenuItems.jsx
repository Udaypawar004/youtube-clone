import React from 'react'

// mr = margin right, mb = margin bottom
const LeftNavMenuItems = ({ text, icon, className, action}) => {
  return <div className={"text-white/[0.8] text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " + className }
  onClick={action}
  >
    <span className='text-xl mr-5'>{icon}</span>  
    {text}
  </div>;
};

export default LeftNavMenuItems