import { RotatingLines } from 'react-loader-spinner';
import styles from '../Loder/Loder.module.css';



export const  Loder = ()=> {
    return (
      <div className={styles.container}>
            <RotatingLines
                strokeColor="red"
                strokeWidth="3.5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
            </div>
      
    )
         
}

