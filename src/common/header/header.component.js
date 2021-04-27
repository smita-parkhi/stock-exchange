import { BRAND_LOGO, TELEGRAM_LOGO } from '../../constants/images.constants'

import Switch from '../switch/index.component'

import './header.component.scss'

export default function Header(props) {
    // props
    const { switchChangeCallback } = props

    const handleSwitchChange = () => {
        switchChangeCallback()
    }

    return (
        <div className='header-wrapper'>

            <div className='left-section'>
                <img
                    src={BRAND_LOGO}
                    alt='Brand logo'
                    className='brand-logo'
                />
                <div className='powered-by-wrapper'>
                    <p className='powered-by-text'>Powered By </p>
                    <a href='#' target='_blank' className='powered-by-link'>
                        Finstreet
                    </a>
                </div>
            </div>

            <div className='middle-section'>
                <div className='btn-group'>
                   <button className='dropdown-btn'>INR <i class="fa fa-caret-down"></i></button>
                </div>
                <div className='btn-group'>
                    <button className='dropdown-btn'>BTC <i class="fa fa-caret-down"></i></button>
                </div>
                <div className='btn-group'>
                <button className='secondary-btn'>BUY BTC</button>
                </div>
            </div>
            <div className='right-section'>
            
                <div className='connect-telegram-wrapper'>
                    <button className='telegram-text'>
                        {/* <img
                            src={TELEGRAM_LOGO}
                            alt='telegram-img'
                            className='telegram-text'
                        /> */}
                        Connect Telegram
                </button>
                </div>
                <Switch {...props} switchChangeCallback={handleSwitchChange} />
            </div>
        </div>
    )
}

