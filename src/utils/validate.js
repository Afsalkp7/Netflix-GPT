export const checkValidData = (email,password,name) => {
    let isNameValid = true
    if (name != null){
        isNameValid = /^[A-Za-z][A-Za-z0-9_]{2,8}$/.test(name)
    }
    
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if (!isNameValid) return 'User name is not valid';
    if (!isEmailValid) return 'Email is not valid';
    if (!isPasswordValid) return 'Password is not valid';
    return null
}
