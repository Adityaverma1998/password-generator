"use client"
import React, {useCallback, useEffect, useRef} from "react";


const PasswordGerneratorBox = () => {
    const [password, setPassword] = React.useState<string>('');
    const [isNumber, setIsNumber] = React.useState<boolean>(false);
    const [isCharacter, setIsCharacter] = React.useState(false);
    const passwordRef = useRef(null)
    const handleCheckboxChange = () => {
        setIsCharacter(!isCharacter);
    };

    const [value, setValue] = React.useState<number>(8);

    const handleSliderChange = (event) => {
        setValue(event.target.value);


    };

    const passwordGenerator = useCallback(() => {
        let passwordText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let passwordNumber = '0123456789';
        let passwordSpecial = '!@#$%^&*()_+-=[]{}|;:\',.<>/?`~"';
        let allCharacters = ''
        if (isCharacter) {
            allCharacters += passwordText + passwordSpecial;

        } else if (isNumber) {
            allCharacters += passwordNumber + passwordSpecial;
        } else if (isNumber && isCharacter) {
            allCharacters += passwordNumber + passwordText + passwordSpecial;

        } else {
            allCharacters += passwordSpecial;

        }


        let password = '';

        for (let i = 0; i < value; i++) {
            let randomIndex = Math.floor(Math.random() * allCharacters.length);
            password += allCharacters[randomIndex];
        }

        setPassword(password);

        // return password;


    }, [isNumber, isCharacter, value])

    useEffect(() => {
        passwordGenerator();
    }, [isNumber, isCharacter, value]);

    const handleCopy = () => {
        if (passwordRef.current) {
            passwordRef.current.select();
            document.execCommand('copy');
            alert('Text copied to clipboard');
        }    }


    return (
        <>
            <div className={' p-8 border rounded-lg backdrop-blur h-full bg-amber-300 container-second'}>
                <div className={'w-full'}>
                    <input
                        type="text"
                        placeholder="Enter text here"
                        value={password}
                        className="border border-gray-300 text-[#000] p-2 rounded-tl-lg  rounded-bl-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        ref={passwordRef}

                    />
                    <button onClick={handleCopy}
                            className="px-4 py-2 bg-blue-500 text-[#000] rounded-tr-lg  rounded-br-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:none focus:ring-opacity-50"

                    >
                        Copy Password
                    </button>
                </div>

                <div className={'flex gap-10 py-8'}>

                    <div className="flex flex-row  items-center  gap-2">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={value}
                            onChange={handleSliderChange}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        />
                        <div className="text-gray-700">{value}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="checkbox"
                            checked={isCharacter}
                            onChange={(prev) => setIsCharacter(!isCharacter)}
                            className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                        />
                        <label htmlFor="checkbox" className="text-gray-700">
                            Alphabats
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="checkbox-char"
                            checked={isNumber}
                            onChange={(prev) => setIsNumber(!isNumber)}
                            className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                        />
                        <label htmlFor="checkbox-char" className="text-gray-700">
                            Numbric
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGerneratorBox;