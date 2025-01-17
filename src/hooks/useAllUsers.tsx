
import useSWR from 'swr'
import { allUsers } from '../apis/authApi'


export const useAllUsers = () => {
    const { data, error, isLoading } = useSWR('/api/get-app', allUsers)
    console.log(data)
    return { data, error, isLoading }
}