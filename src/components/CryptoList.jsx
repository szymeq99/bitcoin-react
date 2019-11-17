import React from 'react';


const CryptoList = (props) => {
    // console.log(props.cryptoArray)

    let CryptoList = props.cryptoArray.map(arrayElement => {
        return (
    <li className="list" key={arrayElement.currency}>Last rate: <span className={arrayElement.class}>{arrayElement.last}</span> {arrayElement.currency} {arrayElement.symbol}</li>
        )
    }) 

    return (
        <ul className="crypto-list">
            {CryptoList}

        </ul>
    );

}

export default CryptoList;