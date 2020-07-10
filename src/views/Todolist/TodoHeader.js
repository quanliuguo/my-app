import React from 'react'
import PropTypes from 'prop-types'
console.log('PropTypes->',PropTypes)
export default function TodoHeader(props) {
    console.log('props', props)
    return (
        <div>
            <h2>{props.children}</h2>
            <p>{props.desc}</p>
        </div>
    )
}
/* 函数式组件的写法 */
TodoHeader.propTypes={
    desc:PropTypes.string
}
/* 函数式组件的写法 */
TodoHeader.defaultProps={
    desc:'今日事，今日毕'
}