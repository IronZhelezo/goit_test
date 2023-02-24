import clsx from 'clsx';
import styles from './Item.module.css';

import logo from '../assets/react.svg';
import stars from '../assets/star.svg';
import watchers from '../assets/user.svg';

const icons = { stars, watchers };

const Item = ({ data }) =>  {
    console.log(data);
    const renderLine = (name) => (
        <div className={clsx(styles.line, styles[`line___${name}`])}>
            {icons[name] && (
                <div className={styles.line_iconWrapper}>
                    <img src={icons[name]} alt={name} />
                </div>      
            )}
            {data[name]}
            {icons[name] && (
                <span className={styles[`line_${name}`]}>
                    &nbsp;
                    {name}
                </span>
            )}
        </div>
    );

    return (
        <a
            href={data.html_url}
            className={styles.item}
            target="_blank"
            rel="noreferrer"
        >
            <img src={logo} alt="logo" />
            <div className={styles.item_left}>
                {renderLine('name')}
                {renderLine('author')}
                {renderLine('language')}
                {renderLine('description')}
            </div>
            <div className={styles.item_right}>
                {renderLine('stars')}
                {renderLine('watchers')}
            </div>
        </a>    
    );
};

export default Item;
