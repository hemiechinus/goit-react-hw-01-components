import PropTypes from 'prop-types';
import style from './statistics.module.css';

export default function Statistics ({title,stats}){
    return <section className={style.statistics}> { title && <h2 className={style.title}>{title}</h2> }
        <ul className={style.statList}>
        {           
        stats.map(stat=> {
            return (
         <li className = {style.item} key={stat.id}>
             <span className={style.label}>{stat.label}</span> 
             <span className={style.percentage}>{stat.percentage}%</span>
        </li>
            )})} 
        </ul>  
    </section>;
}   

Statistics.propTypes = {
    title: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
  };