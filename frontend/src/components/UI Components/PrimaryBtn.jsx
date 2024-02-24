

const PrimaryBtn = ({style, children , ...others}) => {
  return (
    <button
   {...others}
    className={`${style} bg-primary-default px-2 py-1.5`}>
        {children}
    </button>
  )
}

export default PrimaryBtn