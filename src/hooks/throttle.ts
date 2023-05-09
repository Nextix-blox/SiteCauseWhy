export function throttle(cb: Function, ms: number) {
    let wait: boolean = false;
    return () => {
        if (wait) return;
        wait = true;
        cb();

        setTimeout(() => {
            wait = false;
        }, ms);
    };
}
