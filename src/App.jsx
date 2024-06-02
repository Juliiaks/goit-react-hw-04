import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar/searchBar'
import ImageGallery from './components/imageGallery/imageGallery'
import { getImagesApi } from './components/unsplashAPI/unsplash'
import { DNA } from 'react-loader-spinner'
import LoadMoreBtn from './components/LoadmoreBtn/loadMoreBtn'
import ImageModal from './components/ImageModal/imageModal'
import ErrorMessage from './components/errorMessage/errorMessage'
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null)


  useEffect(() => {
    async function fetchImages() {
      try {
        setIsLoading(true)
        setError(false)
        const response = await getImagesApi(search, page)
        console.log(response)
        setImages((prev) => [...prev, ...response.data.results])
      }
      catch (error) {
        setError(true)
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }

    search && fetchImages()
  }, [ page, search])
  
  
  const handleSubmit = async (searchQuery) => {
    setSearch(searchQuery)
    setImages([])
      setPage(1)
    
  }

  const handleLoadMore = async () => {
    setPage((prevPage) => prevPage + 1);
  }

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
}
  
  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
  }
  
  return (
    <>
      
      <SearchBar
      submit={handleSubmit}/>
      
      {images.length > 0 &&(
      <ImageGallery
          images={images}
          onImageClick={openModal} 
        />
      )}
      {isLoading && (
        <DNA/>
      )}

      {error && (<ErrorMessage />)}

      {selectedImage && (
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={true}>
        <ImageModal
          
        urls={selectedImage.urls.regular}
          alt_description={selectedImage.alt_description}
        closeModal={closeModal}/>
        </Modal >
      )}

      {images.length > 0 &&
        (<LoadMoreBtn handleLoadMore={handleLoadMore } />)}
    </>
  )
}

export default App


   // try {
    // setImages([])
    //   setIsLoading(true)
    //   setError(false)
    //     const response = await getImagesApi(search, page)
    //     setImages(response.data.results) 
    //   }
    //   catch (error) {
    //     setError(true)
    //   } finally {
    //     setIsLoading(false)
    //   }