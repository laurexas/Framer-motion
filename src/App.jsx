'use client'
import './App.css'
import { motion } from 'framer-motion'
import { useState } from 'react';
import boltIcon from './assets/bolt.svg';




const cards = [
  { label: "Card 1", color: "red" },
  { label: "Card 2", color: "green" },
  { label: "Card 3", color: "blue" },
];

const bodyVariants = {
  hidden: { opacity: 0, width: 0 },
  visible: { 
    opacity: 1, 
    width: 'auto',
    transition: { 
      opacity: { duration: 0.3, delay: 0.2 },
      width: { duration: 0.3, delay: 0.2 }  
    }
  },
  exit: { 
    opacity: 0, 
    width: 0,
    transition: { duration: 0.3 }
  }
};


const verticalVariants = {
  hidden: { opacity: 0},
  visible: { 
    opacity: 1, 
    transition: { 
      opacity: { duration: 0.2, delay: 0.2 },
    }
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 0.2 }
  }
};


function App() {


  const [hoveredCardIndex, setHoveredCardIndex] = useState(0)

  return (
     <div style={{display: 'flex', height: '500px', width: '100%'}}>
        {cards.map((card, index) => (
        <motion.div
          key={index}
          className={`h-full text-white flex items-center justify-center rounded-lg cursor-pointer card`}
          animate={{ width: hoveredCardIndex === index ? '62%' : '19%'}}
          onMouseEnter={() => setHoveredCardIndex(index)}
          onMouseLeave={() => setHoveredCardIndex(0)}
          transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className='card-body'>
              <motion.div className='icon-container' animate={{opacity: hoveredCardIndex === index ? 1: 0}}> 
                <img src={boltIcon} alt="icon" width={40} height={40} />
              </motion.div>
              <motion.div
                className="horizontal-body"
                variants={bodyVariants}
                initial="hidden"
                animate={hoveredCardIndex === index ? "visible" : "hidden"}
                exit="exit"
            
              >
                <h1>This is example Title {index} </h1>
                <p>This is example paragraph {index} </p>
              </motion.div>
              <motion.div          
                variants={verticalVariants}
                initial="hidden"
                animate={hoveredCardIndex === index ? "hidden" : "visible"}
                exit="exit" 
                className='horizontal-vertical'>
                  <p>Verical {index}</p>
              </motion.div>
        </div>
      </motion.div>
      ))}

     </div>
  )
}

export default App
