import React from 'react';
import CryptoList from './CryptoList';
import axios from 'axios';


class Crypto extends React.Component {

    constructor(){
        super();

        this.state = {
            cryptoArray: [],
            filteredCrypto: [],
        }
    }
    

    getCryptoData = () => {
        axios.get(`https://blockchain.info/pl/ticker`)
          .then(res => {
            const crypto = res.data;
            let convertedCryptoArray = [];
            let i = 0

            // console.log(res)
            // console.log(crypto)

            for(let key in crypto){

                let newCryptoObj = crypto[key];
                let prevCryptoObj = this.state.cryptoArray[i];
                // console.log(prevCryptoObj)

                if(prevCryptoObj !== undefined){
                    if(prevCryptoObj.last > newCryptoObj.last){
                        newCryptoObj.class = "blue";
                    } else if (prevCryptoObj.last < newCryptoObj.last){
                        newCryptoObj.class = "green";
                    }
                    else {
                        newCryptoObj.class = "blue";

                    }
                } else  {
                    newCryptoObj.class = "blue";
                }


                newCryptoObj.currency = key;
                convertedCryptoArray.push(newCryptoObj);
                i++;
            }

            this.setState({cryptoArray:convertedCryptoArray, filteredCrypto: convertedCryptoArray})
            
          });
    }

    filter = (event) => {
        // console.log(event.target.value);
        let trimedValue = this.filterInput.value.trim().toUpperCase();
        let currentCrypto = this.state.cryptoArray;

        console.log(trimedValue)

        let filteredCryptoAPP = currentCrypto.filter(crypto => {
            return crypto.currency.includes(trimedValue);
        })
        

        this.setState({filteredCrypto: filteredCryptoAPP})
        
    }


    componentDidMount() {
        this.getCryptoData();

          setInterval(()=>{
              this.getCryptoData()
          }, 5000)
      }

    render(){
        // console.log(this.state)
        return(
            <div className="crypto">
                <input className="input" type="text" placeholder="Wpisz skrót" onChange={this.filter} ref={input=> this.filterInput = input}/>
                <CryptoList cryptoArray={this.state.filteredCrypto} />
            </div>
        )
    }
}

export default Crypto;