import { useState, useCallback } from 'react';
// useCallback take a function and a dependency array and return a memoized value.

export default function useLocalStorage(key, initialValue) {
	const [ storedValue, setStoredValue ] = useState(() => {
		// Get from local storage by key
		const item = localStorage.getItem(key);
		// Parse and return stored json or, if undefined, return initialValue
		return item ? JSON.parse(item) : initialValue;
	});

	const setValue = useCallback((newValue) => {
		setStoredValue(value);
		localStorage.setItem(key, JSON.stringify(value));
	});

	return [ storedValue, setValue ];
}
