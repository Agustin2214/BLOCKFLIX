import { FaSpinner }from 'react-icons/fa'
import style from './Spinner.module.css'

export function Spinner() {
    return (
        <div className={style.Spinner}>
            <FaSpinner className={style.spinning}  size={100}/>
        </div>
    )
}
