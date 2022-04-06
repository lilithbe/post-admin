// import React, { useState } from 'react'
// import { connect } from 'react-redux'

// import Layout from './layout/Layout'
// import { useConfig } from './lib/useConfig'
// import { setConfig, setLogin } from './redux'


// const App = ({setConfig,setLogin}) => {
//   const [isLoading, setIsLoading] = useState(false)
//    useConfig(setIsLoading ,setLogin )
//   return (isLoading?'loading...':<Layout/>)
// }
// const mapStateToProps = (state) => { 
//   return{
//       auth:state.auth,
//       config:state.config,
//   }
// }
// const mapDipatchToprops = (dispatch) => { 
//    return{
//     setLogin:(data)=>dispatch(setLogin(data)),
//       setConfig:(data)=>dispatch(setConfig(data)),
//    }
// }
// export default connect(mapStateToProps, mapDipatchToprops)(App)


import React from 'react'

const App = () => {
  return (
    <h1>010-5050-2783</h1>
  )
}

export default App