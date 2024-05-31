import ImageCard from "../imageCard/imageCard";

export default function ImageGallery({images}) {
    return (
        <ul>
            {images.map(({ id, urls, alt_description }) => (
                
            <li key={id}>
                <ImageCard
                    src={urls.small}
                    alt={alt_description } />
                </li>
            ))}
        </ul>
    )
    
}