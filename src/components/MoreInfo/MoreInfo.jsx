import css from "./MoreInfo.module.css";
import icons from "/symbol-defs.svg";

const MoreInfo = ({teacher}) => {

    return (
        <div>
            <div className={css.wrapper}>
                {teacher.reviews.map((record, index) => (
                    <li key={index} className={css.item}>
                        <div className={css.flex}>
                            <div className={css.round}>
                                <p className={css.text}>{record.reviewer_name.charAt(0)}</p>
                            </div>
                            <div className={css.title}>
                                <h3 className={css.name}>{record.reviewer_name}</h3>
                                <div className={css.stars}>
                                    {[...Array(5)].map((_, index) => (
                                        <svg key={index} className={`${css.star} ${index < record.reviewer_rating ? css.rated : ''}`}>
                                            <use href={`${icons}#icon-star`} />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className={css.comment}>{record.comment}</p>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default MoreInfo