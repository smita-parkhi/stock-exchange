import './footer.component.scss';


export default function Footer({isDarkMode}) {
    return (
        <div className='footer-wrapper'>
            <div className='footer-container'>
                <div className='footer-text'  style={{color: isDarkMode ? 'white' : 'black'}}>
                    Copyright @ 2019
                </div>

                <div className='footer-text' style={{color: isDarkMode ? 'white' : 'black'}}>
                    Hodlinfo.com
                </div>

                <div className='footer-text' style={{color: isDarkMode ? 'white' : 'black'}}>
                    Develop By <a href='#' target='_blank' className='develop-by-link'>
                        QuadBTech.com
                    </a>
                </div>

                <div className='footer-text-end' style={{color: isDarkMode ? 'white' : 'black'}}>
                    Support
                </div>

            </div>

        </div>

    )
}