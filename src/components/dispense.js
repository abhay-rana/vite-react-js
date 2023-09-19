import { useRef, useState } from 'react';

import TextAreaWithLineNumbers from '~/components/textarea-lines';

function combineBalancesForDuplicateAddresses(inputArray) {
    const addressMap = new Map();

    for (const item of inputArray) {
        const [address, balance] = item.split(' ');
        if (addressMap.has(address)) {
            addressMap.set(
                address,
                addressMap.get(address) + parseInt(balance)
            );
        } else {
            addressMap.set(address, parseInt(balance));
        }
    }

    const combinedItems = [];
    for (const [address, balance] of addressMap.entries()) {
        combinedItems.push(`${address} ${balance}`);
    }

    return combinedItems;
}

const inputArray = [
    '0x8B3392483BA26D65E331dB86D4F430E9B3814E5e 10',
    '0xEb0D38c92deB969b689acA94D962A07515CC5204 20',
    '0xF4aDE8368DDd835B70b625CF7E3E1Bc5791D18C1 30',
    '0xEb0D38c92deB969b689acA94D962A07515CC5204 40',
    '0x8B3392483BA26D65E331dB86D4F430E9B3814E5e 50',
    '0xEb0D38c92deB969b689acA94D962A07515CC5204 60', // Duplicate address
];

function findUniqueDuplicateAddressIndexes(inputArray) {
    const addressMap = new Map();
    const duplicateIndexes = [];

    for (let i = 0; i < inputArray.length; i++) {
        const item = inputArray[i];
        const [address] = item.split(' ');

        if (addressMap.has(address)) {
            const firstIndex = addressMap.get(address);
            if (!duplicateIndexes.includes(firstIndex)) {
                duplicateIndexes.push(firstIndex);
            }
            duplicateIndexes.push(i);
        } else {
            addressMap.set(address, i);
        }
    }

    return duplicateIndexes;
}

const duplicateIndexes = findUniqueDuplicateAddressIndexes(inputArray);
if (duplicateIndexes.length > 0) {
    console.log(
        `Unique duplicate address indexes: ${duplicateIndexes.join(', ')}`
    );
} else {
    console.log('No duplicate addresses found.');
}

const combinedItems = combineBalancesForDuplicateAddresses(inputArray);
console.log(combinedItems);

function _checkValidAmount(array) {
    const isNumeric = (string_) => !isNaN(Number(string_));

    const indexesOfNonNumericAmounts = array
        .map((item, index) => (isNumeric(item.split(' ')[1]) ? -1 : index))
        .filter((index) => index !== -1);

    console.log(indexesOfNonNumericAmounts);
    if (indexesOfNonNumericAmounts.length > 0) {
        const error_string = indexesOfNonNumericAmounts.map(
            (item) => `Line ${item + 1} wrong Amount`
        );
        console.log(error_string);
        return error_string;
    } else {
        return '';
    }
}

function _checkValidations(array) {
    const error_valid_amount = _checkValidAmount(array);
    if (error_valid_amount) return error_valid_amount;
}

const Dispense = () => {
    const textarea_reference = useRef('');
    const [address, setAddress] = useState('');

    function onSubmit() {
        const address_array =
            textarea_reference.current.innerHTML.split(/\n/gm);
        console.log(address_array);
        const validation_data = _checkValidations(address_array);
    }

    return (
        <>
            <div>
                <TextAreaWithLineNumbers
                    onChange={setAddress}
                    value={address}
                    ref={textarea_reference}
                />
                <button onClick={onSubmit}>Submit</button>
            </div>
        </>
    );
};

export default Dispense;
