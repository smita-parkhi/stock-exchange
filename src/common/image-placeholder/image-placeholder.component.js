import './image-placeholder.component.scss'

export default function ImagePlaceholder(props) {
    const { image } = props
    return (
        <div className='image-placeholder-wrapper'>
            <img
                src={image}
                alt=''
                className='banner-image'
            />
        </div>
    )
}

