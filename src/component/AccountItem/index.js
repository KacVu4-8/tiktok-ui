import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img 
                className={cx('avatar')} 
                src="https://avatars.githubusercontent.com/u/107038301?v=4" 
                alt="Hoa" 
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Khac Vu</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>nguyenkhacvu</span>
            </div>
        </div>
    );
}

export default AccountItem;
