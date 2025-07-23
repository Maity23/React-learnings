import { useState } from 'react';

export default function Amount() {
    const [amount, setAmount] = useState(0);

    const handleDeposit = () => {
        setAmount(amount + 100);
        console.log(`The amount deposited in ${amount}`);
    };

    const handleWithdrawal = () => {
        setAmount(amount - 100);
    };
    return (
        <>
            <h1> Current: {amount} </h1>
            <button onClick={handleDeposit}> Deposit 100</button>
            <button onClick={handleWithdrawal}> Wit hdrawal 100</button>
        </>
    );
}