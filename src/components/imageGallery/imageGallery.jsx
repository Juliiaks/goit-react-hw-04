import ImageCard from "../imageCard/imageCard";

export default function ImageGallery({images, onImageClick}) {
    return (
        <ul>
            {images.map(({ id, urls, alt_description }, index) => (
                
            <li key={`${id}-${index}`} onClick={() => onImageClick({ urls, alt_description })}>
                <ImageCard
                    src={urls.small}
                    alt={alt_description } />
                </li>
            ))}
        </ul>
    )
    
}