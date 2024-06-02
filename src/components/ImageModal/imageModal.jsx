import ImageCard from "../imageCard/imageCard"

export default function ImageModal(urls, alt_description, closeModal) {
    return (
        <div >
            <div  onClick={closeModal}>
                    <ImageCard
                     src={urls}
                    alt={alt_description }/>
            </div>
   </div>
)
}