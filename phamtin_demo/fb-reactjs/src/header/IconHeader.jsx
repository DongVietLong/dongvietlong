function IconHeader(Props) {
    
  
    return (
        <li>
            <button data-toggle="tooltip" title={Props.title}>
                <i className={Props.className}></i>
            </button>
        </li>
    )
  }
  
  export default IconHeader
  