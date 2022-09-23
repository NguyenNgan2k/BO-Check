import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
    const saveCallback = useRef(null);

    useEffect(() => {
        saveCallback.current = callback;
    }, [])

    useEffect(() => {
        function tick() {
            if (typeof saveCallback?.current !== 'undefined') {
                return saveCallback?.current();
            }
        }

        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

// Hook
export function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();

    // Store current value in ref
    useEffect(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes

    // Return previous value (happens before update in useEffect above)
    return ref.current;
}
