export const useAuth = () => {
    return !!sessionStorage.getItem('token')
}