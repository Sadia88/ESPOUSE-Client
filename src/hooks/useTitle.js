import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} - ESPOUSE`;
    },[title])

};
export default useTitle;