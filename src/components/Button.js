import React from 'react'
import classNames from "classnames"

function Button({children,variant = "default"}) {
  return (
    <button className={classNames({
        "flex rounded px-10 py-1 m-5 " : true,
        "bg-gray-300": variant === "default",
        "bg-red-500": variant === "danger",
        "bg-green-500": variant === "success",
        "bg-yellow-400": variant === "warning"
    })}>{children}</button>
  )
}

export default Button