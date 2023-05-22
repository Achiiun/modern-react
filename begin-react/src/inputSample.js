import React, {useRef, useState} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        id: '',
        nickname: ''
    });

    const nameInput = useRef();
    const {id, nickname} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            id: '',
            nickname: '',
        })
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="id" placeholder="아이디" onChange={onChange} value={id} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {id} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;