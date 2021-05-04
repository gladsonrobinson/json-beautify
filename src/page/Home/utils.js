export const beautifyJson = (inputJson) => {
    try {
        return JSON.stringify(JSON.parse(inputJson), undefined, 4); 
    } catch {
        return '';
    }
}