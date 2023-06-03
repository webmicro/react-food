import { useState, useEffect } from "react";

const useOffline = () =>{
    const [ isOffline, setIsOffline] = useState ( false );
    useEffect( ()=>{ 
        console.log('in online offline ====== ')
        const onlineHandler = ()=>{
            console.log('in online function ====== ')
            setIsOffline( false )
        };
        const offlineHandler = ()=>{
            console.log('in offline function ====== ')
            setIsOffline( true )
        }
        window.addEventListener( "online", onlineHandler );
        window.addEventListener( "offline", offlineHandler)
        return () => {
            console.log('in unmount online/offline ====== ')
            window.removeEventListener("online", onlineHandler )
            window.removeEventListener("offline", offlineHandler )
        }
    }, []);
    return isOffline;
}
export default useOffline;