import Loader from './Loader'

export default function FormBtn({isLoading, className, children, ...props}) {
  return (
    <button className="button-dark" {...props}>
      {isLoading ? <Loader /> : children}
    </button>
  )
}
