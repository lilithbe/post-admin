import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'
import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AUTH_SIGNIN } from '../../common'
import { postApi } from '../../lib/axios'
import { setLogin } from '../../redux'

const Login = ({setLogin}) => {
    const [authState, setAuthState] = useState({
        userId:'',
        password:'',
        remember:false,
    })
    const [isLoading, setIsLoading] = useState(false)
    const submitHandler = (e) => { 
        e.preventDefault()
        postApi(setIsLoading,AUTH_SIGNIN,(res)=>{
            setLogin(res.data)
            sessionStorage.setItem('token',res.data.token)
        },authState)
     }
  return (
      <div className=" p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
              <img src="images/blocks/logos/hyper.svg" alt="hyper" height="50" className="mb-3" />
              <div className="text-900 text-3xl font-medium mb-3">Welcome Admin</div>
              <span className="text-600 font-medium line-height-3">Don't have an account?</span>
          </div>
         

          <form onSubmit={submitHandler}>
              <label htmlFor="email1" className="block text-900 font-medium mb-2">Email</label>
              <InputText id="email1" type="text" className="w-full mb-3" value={authState.userId} onChange={(e)=>{
             
                  setAuthState({...authState,userId:e.target.value})
              }}/>

              <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
              <InputText id="password" type="password" className="w-full mb-3" value={authState.password} onChange={(e)=>{
                
                  setAuthState({...authState,password:e.target.value})
              }}/>

              <div className="flex align-items-center justify-content-between mb-6">
                  <div className="flex align-items-center">
                      <Checkbox inputId="rememberme1" binary className="mr-2" onChange={e => setAuthState({ ...authState, remember: e.checked })} checked={authState.remember} />
                      <label htmlFor="rememberme1">Remember me</label>
                  </div>
                 
              </div>

              <Button type="submit" label="Sign In" icon="pi pi-user" className="w-full" />
          </form>
      </div>
  )
}
const mapStateToProps = (state) => { 
    return{

    }
 }
 const mapDispatchToProps = (dispatch) => { 
     return{
        setLogin:(data)=>dispatch(setLogin(data))
     }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Login)