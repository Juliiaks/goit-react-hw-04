import ImageCard from "../imageCard/imageCard";

export default function ImageGallery({images}) {
    return (
        <ul>
            {images.map(({ id, urls, alt_description }, index) => (
                
            <li key={`${id}-${index}`}>
                <ImageCard
                    src={urls.small}
                    alt={alt_description } />
                </li>
            ))}
        </ul>
    )
    
}