import { FC, ReactNode } from 'react';
import styles from './container.module.scss'

interface ContainerI {
    type?: string,
    children: ReactNode
}

const Container:FC<ContainerI> = ({ type, children }) => {
    const  styleName = () => {
        switch(type) {
            case 'wide':   
                return styles.containerWide
            
            case 'medium':  
                return styles.containerMedium
            
            default:
                return styles.container
        }
    };
    
    return <div className={styleName()}>{children}</div>
}

export default Container
