import { useEffect } from "react"
import { AUTH_TOKEN_CHECK } from "../common"
import { postApi } from "./axios"
export const useConfig=(setIsLoading,setLogin)=>{
    useEffect(() => {
        postApi(setIsLoading,AUTH_TOKEN_CHECK,(res)=>{
            if(res.data.status){
              if(res.data.isLogin){
                setLogin(res.data.userData)
              }
              // setCategory({category:res.data.category})
            }
          },sessionStorage.getItem('token'))
        return () => {
           
        }
      }, [ setIsLoading, setLogin])
    
}