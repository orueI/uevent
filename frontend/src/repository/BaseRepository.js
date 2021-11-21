export function processingRequest(response) {
    try {
        if (response?.code % 100 === 4) {
            const errors: Array = response?.errors
            errors.forEach((error) => {
                alert(error)
            })
        }
        return response
    } catch (e) {
        alert(e)
    }
}