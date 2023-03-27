export const textChangeFun = (text) => {
    const getCountry = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const checkCurrency = getCountry == "Asia/Calcutta" ? "₹" : "$";
    if (text.includes("₹")) {
        return text.replace("₹", checkCurrency)
    } else if (text.includes("$")) {
        return text.replace("$", checkCurrency)
    }
}