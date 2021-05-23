import React, {useState} from "react";
import s from "./Paginator.module.css";
import cn from 'classnames'

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 20}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        // Варианты как добавить несколько css классов
        // 1. {s.someClass + ' ' + s.someAnotherClass}
        // 2. {`${someClass} ${s.someAnotherClass}`}
        // 3. cn (s.someClass, s.someAnotherClass) <- подключается через import cn from 'classnames'
        <div className={s.paginator}>
            {
                portionNumber > 1
                && <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={ cn({[s.selectedPage]: currentPage === p}, s.pageNumber) }
                        key={p}
                        onClick={() => {
                            onPageChanged(p)
                        }}
                    >{p}</span>
                })}
            {
                portionCount > portionNumber
                && <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>
            }
        </div>
    )
}

export default Paginator

