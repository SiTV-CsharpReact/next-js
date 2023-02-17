export function formatNumber(number:any) {
    if (!number || number == 0 || number =="0")
        return 0; // hoac ''
    else
        return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}