export default function debounce(fn: any, ms: number) {
    let timer: number;
    return function (this: any, ...args: any[]) {
        clearTimeout(timer);
        timer = window.setTimeout(() => {
            fn.apply(this, args);
        }, ms);
    };
}
