export const required = (value, error = 'Required') => {
    return !value || !String(value).trim() ? error : undefined
}
