import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from 'react-icons/lu';
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"



const Card = ({data,reference}) => {
  return (
 <>
 <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white py-10 px-8 overflow-hidden'>
 <FaRegFileAlt />
 <p className='text-sm leading-tight mt-5 font-semibold'>{data.des}.</p>
 <div className='absolute bottom-0 w-full left-0'>
    <div className='footer flex items-center justify-between mb-3  py-3 px-8'>
        <h5>{data.fileSize}</h5>
        <span className='w-7 h-7 bg-zinc-600 rounded-full flex justify-center items-center'>
            {data.closeIcon ? <IoClose /> : <LuDownload />}
        </span>
    </div>
    {
        data.tag.tagStatus ? (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600" } flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagText}</h3>
         </div>
        ) : null
    }
    
    
 </div>
 </motion.div>
 </>
  )
}

export default Card