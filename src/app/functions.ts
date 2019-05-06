export function flip() {
    return Math.random() >= 0.5;
}

export function randomNumber(n: number): number {

    if (!n || n < 1) {
        throw '𝑛 must be greater than 0';
    }
    
    if (n >= 1000000) {
        throw '𝑛 must be less than 1,000,000';
    }

    let min = 0;
    let max = n;

    while (true) {
        let _min = Math.floor(min);
        let _max = Math.floor(max);

        if (Number.isInteger(max)) {
            _max--;
        }

        if (_max === _min) {
            return _max;
        }

        const mid = (min + max) / 2;

        if (flip()) {
            min = mid;
        } else {
            max = mid;
        }
    }
    
}