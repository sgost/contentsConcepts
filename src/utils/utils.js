export const textChangeFun = (text) => {
    const getCountry = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const checkCurrency = getCountry === "Asia/Calcutta" ? "₹" : "$";
    if (text.includes("₹")) {
        return text.replace("₹", checkCurrency)
    } else if (text.includes("$")) {
        return text.replace("$", checkCurrency)
    }
}

export const amountChangeFun = (text) => {
    const getCountry = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (getCountry === "Asia/Calcutta") {
        return text.replace(0.02, 1.3)
    } else {
        return text
    }
}


export const desktopPix = (num) => {
    let sample = num * 13.8;
    return sample + 'vw'
}