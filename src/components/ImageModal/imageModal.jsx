import ImageCard from "../imageCard/imageCard"

export default function ImageModal(urls, alt_description, closeModal) {
    return (
        <div >
            <div  onClick={closeModal}>
                    <ImageCard
                     src={urls.regular}
                    alt={alt_description }/>
            </div>
   </div>
)
}