import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar/searchBar'
import ImageGallery from './components/imageGallery/imageGallery'
import { getImagesApi } from './components/unsplashAPI/unsplash'
import {DNA} from 'react-loader-spinner'


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]= useState(false)

  
  const handleSubmit = async (topic) => {
    try {
    setImages([])
      setIsLoading(true)
      setError(false)
        const response = await getImagesApi(topic)
        setImages(response.data.results) 
      }
      catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
  }


  
  return (
    <>
      
      <SearchBar
      submit={handleSubmit}/>
      
      {images.length > 0 &&(
      <ImageGallery
        images={images}
        />
      )}
      {isLoading && (
        <DNA/>
      )}
    </>
  )
}

export default App
// useEffect(() => {
  //   async function fetchImages() {
  //     try {
  //       setIsLoading(true)
  //       const response = await getImagesApi()
  //       console.log(response)
  //       setImages(response.data.results)
  //     }
  //     catch (error) {
  //       setError(true)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //     fetchImages()
  //   }
  // }, [])
  