Promise.prototype.processingRequest = function processingRequest() {
    return this.catch((e) => {
        console.log(e)
        alert(e)
    }).then((response) => {
        console.log(response)
        if (response?.code % 100 === 4) {
            const errors: Array = response?.errors
            errors.forEach((error) => {
                alert(error)
            })
        }
        return response
    })
}

export function processingRequest(response) {
    try {
        console.log(response)
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