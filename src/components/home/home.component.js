import { useState } from 'react'
import { CRYPTO_NEWS_BANNER, FTX_NEWS_BANNER } from '../../constants/images.constants'

import Header from '../../common/header/header.component'
import Footer from '../../common/footer/footer.component'
import StatsInfo from '../../common/stats-info/stats-info.component'
import CryptoTable from '../../common/crypto-table/crypto-table.component'
import ImagePlaceholder from '../../common/image-placeholder/image-placeholder.component'

import './home.component.scss'


export default function Home(props) {
    const [isDarkMode, setAppTheme] = useState(false)

    const handleSwitchChange = () => {
        setAppTheme(!isDarkMode)
    }

    return (
        <div className='home-wrapper' style={{
            backgroundColor: isDarkMode ? '#191D28' : '#FFFFFF'
        }}>
            <Header isDarkMode={isDarkMode} switchChangeCallback={handleSwitchChange} />

            <StatsInfo isDarkMode={isDarkMode} />
            
            <ImagePlaceholder
                image={CRYPTO_NEWS_BANNER}
            />

            <CryptoTable isDarkMode={isDarkMode} />

            <ImagePlaceholder
                image={FTX_NEWS_BANNER}
            />

            <Footer isDarkMode={isDarkMode} />
        </div>
    )
}

