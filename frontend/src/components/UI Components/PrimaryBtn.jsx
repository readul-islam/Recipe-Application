

const PrimaryBtn = ({style,children}) => {
  return (
    <button className={`${style} bg-primary-default px-2 py-1.5`}>
        {children}
    </button>
  )
}

export default PrimaryBtn