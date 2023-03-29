export const textChangeFun = (text) => {
    const getCountry = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const checkCurrency = getCountry === "Asia/Calcutta" ? "₹" : "$";
    if (text.includes("₹")) {
        return text.replace("₹", checkCurrency)
    } else if (text.includes("$")) {
        return text.replace("$", checkCurrency).replace(0.02, 1.3)
    }

    if (text.includes("$") && text.includes("1.3") && getCountry !== "Asia/Calcutta") {
        return text.replace("$", checkCurrency).replace(1.3, 0.02)
    } else if (text.includes("$") && text.includes("0.02") && getCountry !== "Asia/Calcutta") {
        return text.replace("$", checkCurrency)
    }
}