import { ZeroEx } from '0x.js';
import * as Web3 from 'web3';

const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const zeroEx = new ZeroEx(provider);

const logAddresses = async () => {
    try {
        const addresses = await zeroEx.getAvailableAddressesAsync();
        console.group(`PASS: There are ${addresses.length} addresses.`, )

        addresses.forEach(address => {
            console.log(address);
        });

        console.groupEnd();
    } catch (err) {
        console.log(`FAIL: ${err}`);
    }
};

const logTokenAddresses = async () => {
    try {
        const tokens = await zeroEx.tokenRegistry.getTokensAsync();
        console.group(`PASS: There are ${tokens.length} tokens.`, )

        tokens.forEach(token => {
            console.log(token);
        });

        console.groupEnd();
    } catch(err) {
        console.log(`FAIL: ${err}`);
    }
}

logAddresses();
logTokenAddresses();
