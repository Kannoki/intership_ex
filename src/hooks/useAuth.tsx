import { UserType } from "../types"
import { getStorage } from "../utils"

const useAuth = () => {
    const user = getStorage('user') as UserType
    return user
}
export default useAuth