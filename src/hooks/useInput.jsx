import {useState} from 'react';

function useInput(dafaultValue= ''){
    const [value,setValue] = useState(dafaultValue);

    const onValueChangeHandler = (event) => {
        setValue(event.target.value);
    };
    return [value,onValueChangeHandler];
}
export default useInput;