import { BITBNS, COINDCX, COLODAX, GIOTUS, WAZIRX, ZEBPAY } from "../../constants/images.constants";

import './crypto-table.component.scss'

export default function CryptoTable({isDarkMode}) {
  return (
    <table className='crypto-table'>
        <thead className='table-header'>
            <tr className='table-row'>
                <th className='table-head' style={{color: isDarkMode ? '#FFFFFF' : '#0C0F48'}}>#</th>
                <th className='table-head' style={{color: isDarkMode ? '#FFFFFF' : '#0C0F48'}}>Platform</th>
                <th className='table-head' style={{color: isDarkMode ? '#FFFFFF' : '#0C0F48'}}>Last Traded Price</th>
                <th className='table-head' style={{color: isDarkMode ? '#FFFFFF' : '#0C0F48'}}>Buy/Sell Price</th>
                <th className='table-head' style={{color: isDarkMode ? '#FFFFFF' : '#0C0F48'}}>Diffrence</th>
                <th className='table-head' style={{color: isDarkMode ? '#FFFFFF' : '#0C0F48'}}>Savings</th>
            </tr>
        </thead>
        <tbody className='table-body'>
            <tr className='table-row' style={{backgroundColor: isDarkMode ? '#2e3241' : '#f8f9fa'}}>
                <td className='table-data'style={{color: isDarkMode ? 'white' : 'black'}}>1</td>
                <td className='table-data platform-details'>
                    <img className='platform-icon' src={WAZIRX} alt='wazirx'></img>
                    <span className='platform-name' style={{color: isDarkMode ? 'white' : 'black'}}>WazirX</span>
                </td>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>&#8377;42,96,000</td>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>&#8377;42,96,000 / &#8377;43,04,000</td>
                <td className='table-data color-green' style={{color: isDarkMode ? 'white' : 'black'}}>0.43%</td>
                <td className='table-data color-green' style={{color: isDarkMode ? 'white' : 'black'}}>&#9650; &#8377;18,418</td>
            </tr>
            <tr className='table-row' style={{backgroundColor: isDarkMode ? '#2e3241' : '#f8f9fa'}}>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>2</td>
                <td className='table-data platform-details'>
                    <img className='platform-icon' src={BITBNS} alt='wazirx'></img>
                    <span className='platform-name' style={{color: isDarkMode ? 'white' : 'black'}}>Bitbus</span>
                </td>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>&#8377;42,75,896</td>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>&#8377;42,75,896 / &#8377;42,87,342</td>
                <td className='table-data color-red' style={{color: isDarkMode ? 'white' : 'black'}}>-0.04%</td>
                <td className='table-data color-red' style={{color: isDarkMode ? 'white' : 'black'}}>&#9660; &#8377;1,685</td>
            </tr>
            <tr className='table-row' style={{backgroundColor: isDarkMode ? '#2e3241' : '#f8f9fa'}}>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>3</td>
                <td className='table-data platform-details'>
                    <img className='platform-icon' src={GIOTUS} alt='wazirx'></img>
                    <span className='platform-name' style={{color: isDarkMode ? 'white' : 'black'}}>Giotus</span>
                </td>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>&#8377;42,00,063</td>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>&#8377;42,00,063 / &#8377;42,99,999</td>
                <td className='table-data color-red' style={{color: isDarkMode ? 'white' : 'black'}}>-1.81%</td>
                <td className='table-data color-red' style={{color: isDarkMode ? 'white' : 'black'}}>&#9660; &#8377;77,518</td>
            </tr>
            <tr className='table-row' 
            style={{backgroundColor: isDarkMode ? '#2e3241' : '#f8f9fa'}}>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>4</td>
                <td className='table-data platform-details'>
                    <img className='platform-icon' src={COLODAX} alt='wazirx'></img>
                    <span className='platform-name' style={{color: isDarkMode ? 'white' : 'black'}}>Colodax</span>
                </td>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>&#8377;42,72,532</td>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>&#8377;42,72,532 / &#8377;43,15,473</td>
                <td className='table-data color-red' style={{color: isDarkMode ? 'white' : 'black'}}>-0.12%</td>
                <td className='table-data color-red' style={{color: isDarkMode ? 'white' : 'black'}}>&#9660; &#8377;5,049</td>
            </tr>
            <tr className='table-row' style={{backgroundColor: isDarkMode ? '#2e3241' : '#f8f9fa'}}>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>5</td>
                <td className='table-data platform-details'>
                    <img className='platform-icon' src={ZEBPAY} alt='wazirx'></img>
                    <span className='platform-name' style={{color: isDarkMode ? 'white' : 'black'}}>Zebpay</span>
                </td>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>&#8377;43,15,000</td>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>&#8377;43,15,000 / &#8377;43,10,000</td>
                <td className='table-data color-green' style={{color: isDarkMode ? 'white' : 'black'}}>0.87%</td>
                <td className='table-data color-green' style={{color: isDarkMode ? 'white' : 'black'}}>&#9650; &#8377;37,418</td>
            </tr>
            <tr className='table-row'style={{backgroundColor: isDarkMode ? '#2e3241' : '#f8f9fa'}}>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>6</td>
                <td className='table-data platform-details'>
                    <img className='platform-icon' src={COINDCX} alt='wazirx'></img>
                    <span className='platform-name' style={{color: isDarkMode ? 'white' : 'black'}}>CoinDCX</span>
                </td>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>&#8377;43,06,000</td>
                <td className='table-data' style={{color: isDarkMode ? 'white' : 'black'}}>&#8377;43,06,000 / &#8377;43,25,000</td>
                <td className='table-data color-green' style={{color: isDarkMode ? 'white' : 'black'}}>0.66%</td>
                <td className='table-data color-green' style={{color: isDarkMode ? 'white' : 'black'}}>&#9650; &#8377;28,418</td>
            </tr>
        </tbody>
    </table>
  );
}
