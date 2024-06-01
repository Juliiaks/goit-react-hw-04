import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar/searchBar'
import ImageGallery from './components/imageGallery/imageGallery'
import { getImagesApi } from './components/unsplashAPI/unsplash'
import { DNA } from 'react-loader-spinner'
import LoadMoreBtn from './components/LoadmoreBtn/loadMoreBtn'


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")


  useEffect(() => {
    async function fetchImages() {
      try {
        setIsLoading(true)
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