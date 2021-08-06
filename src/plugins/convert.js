
export function convert(val) {
    let formatter = new Intl.DateTimeFormat("en-GB", {
        year: "2-digit",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
    return formatter.format(val);
}