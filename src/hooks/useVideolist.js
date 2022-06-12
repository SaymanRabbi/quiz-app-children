import { useEffect, useState } from "react";
import {get, getDatabase, orderByKey, query, ref} from 'firebase/database'
export default function useVideolist() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [videos,setVideos] = useState([])
    useEffect(() => {
        async function fetchVideos() {
            //database related works
            const db = getDatabase()
            const videosRef = ref(db, "videos");
            const videoQuery = query(
                videosRef,
                orderByKey(),
            );
            try {
                setError(false)
                setLoading(true)
                const snapshot = await get(videoQuery)
                setLoading(false)
                if (snapshot.exists()) {
                    setVideos((prev) => {
                        return [...prev,...Object.values(snapshot.val())]
                    })
                }
                else {
                    
                }
            }
            catch (err) {
                console.log(err);
                setLoading(false)
                setError(true)
            }

        }
        fetchVideos()
    }, [])
    return [videos,loading,error]
}