import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import leftNavMenuItem from "./LeftNavMenuItems"
import { categories } from "../utils/constants"
import { Context } from '../context/contextApi'

const LeftNav = () => {
  const {selectedCategory, setSelectedCategory, mobileMenu } = useContext(Context);
  return (
    <div className="md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all">
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment>
              <leftNavMenuItem 
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {}}
                className={`${selectedCategory === item.name ? "bg-white/[0.15]" : ""}`}
              />
              {item.divider && (
                <hr className='my-5 border-white/[0.2]' />
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default LeftNav