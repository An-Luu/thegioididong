import propTypes from "prop-types"
import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import style from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"


const cx = classNames.bind(style)


function SearchItem({ data, click }){
    return (
        <Link onClick={click} to={`/${data.type}/${data.slug}`} className={cx('wrapper')}>
          <img className={cx('avatar')} src={data.avatar} alt="" />
          <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>{data.nickname}</span>
                {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </h4>
            <span className={cx('username')}>{data.full_name}</span>
          </div>
       </Link>
    )
}

SearchItem.propTypes = {
  data:propTypes.object.isRequired,
}

export default SearchItem

