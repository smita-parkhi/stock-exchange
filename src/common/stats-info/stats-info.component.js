import './stats-info.component.scss';

export default function StatsInfo({isDarkMode}) {
    return (
        <div className='container-fluid'>
            <div className='text-center'>
                <div className='text-heading'>
                  0.3%
                </div>
                <div className='text-sub-heading'>
                    5 Min
                </div>
            </div>
        
            <div className='text-center'>
                <div className='text-heading'>
                  0.8%
                </div>
                <div className='text-sub-heading'>
                    1 Hour
                </div>
            </div>
            
            <div className='text-center'>
                <div className='price-trade-text'>
                  <p className='heading-para' style={{color: isDarkMode ? '#FFFFFF' : '#0C0F48'}}>Best Price to Trade</p>
                </div>
                <div className='trade-price' style={{color: isDarkMode ? '#FFFFFF' : '#0C0F48'}}>
                &#8377; 25,56,000
                </div>
                <div className='avarge-price-text'>
                   <p className='heading-para-sub' style={{color: isDarkMode ? '#FFFFFF' : '#0c0f48'}}>Avagre BTC/INR net Price Including Commission</p> 
                </div>
            </div>
            
            <div className='text-center'>
                <div className='text-heading'>
                  6.5%
                </div>
                <div className='text-sub-heading'>
                    1 Day
                </div>
            </div>
            
            <div className='text-center'>
                <div className='text-heading'>
                  16.2%
                </div>
                <div className='text-sub-heading'>
                    7 Day
                </div>
            </div>
        </div>
    )
}