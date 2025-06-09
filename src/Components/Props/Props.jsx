

import { createContext } from 'react';
import Dad from './Dad/Dad';
import './Props.css'
import Uncle from './Uncle/Uncle';
import Unty from './Unty/Unty';

export const Data=createContext();

const Props = () => {
    return (
        
            <div className='grandpa text-center'>
                <h1 className='font-bold'>Grandpa</h1>
                 
                <div className='flex'>
                    <Data.Provider value="Gold">
                        <Dad></Dad>
                        <Uncle></Uncle>
                        <Unty></Unty>
                    </Data.Provider>
                        
                    
                    
                </div>
                
            </div>
      
    );
};

export default Props;