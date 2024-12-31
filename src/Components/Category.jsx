//rafce
import React, { useEffect, useState } from 'react'
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap';
import { deleteCategoryAPI, getAllCategoryAPI, getAllVideosAPI, removeVideoAPI, saveCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


const Category = ({ setDeleteResponseFromCategory, deleteResponseFromView }) => {

  const [allCategories, setAllCategories] = useState([])

  const [categoryName, setCategoryName] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllCategories()
  }, [deleteResponseFromView])

  const handleSaveCategory = async () => {
    if (categoryName) {
      const categorydetails = { categoryName, allVideos: [] }
      try {
        const result = await saveCategoryAPI(categorydetails)
        alert("Category Created")
        getAllCategories()
        handleClose()
      } catch (err) {
        console.log(err);

      }
    } else {
      alert("Please provide a category name!!!")
    }
  }

  const getAllCategories = async () => {
    try {
      const result = await getAllCategoryAPI()
      if (result.status >= 200 && result.status < 300) {
        setAllCategories(result.data)
      }

    } catch (err) {
      console.log(err);

    }
  }

  const removeCategory = async (id) => {
    try {
      await deleteCategoryAPI(id)
      getAllCategories()
    } catch (err) {
      console.log(err);

    }
  }

  const dragOverCategory = (e) => {
    e.preventDefault()
  }

  const videoCardDropOverCategory = async (e, categorydetails) => {
    console.log("Inside videoCardDropOverCategory");
    //console.log(categorydetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);

    // update category by add video to its allVideos
    categorydetails.allVideos.push(videoDetails)
    console.log(categorydetails);

    //API call to update the category
    await updateCategoryAPI(categorydetails)
    getAllCategories()
    const result = await removeVideoAPI(videoDetails?.id)
    setDeleteResponseFromCategory(result)

  }

  const categoryVideoDragStarted = (e,dragVideoDetails,categorydetails)=>{
    console.log("Inside categoryVideoDragStarted");
    let dragData = {video:dragVideoDetails,categorydetails}
    e.dataTransfer.setData("dragData",JSON.stringify(dragData))
    
  }

  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>

      {/* displaying all categories */}
      <div className='container-fluid mb-3'>
        {/* single category view */}
        {
          allCategories?.length > 0 ?
            allCategories?.map(categorydetails => (
              <div droppable="true" onDragOver={dragOverCategory} onDrop={e => videoCardDropOverCategory(e, categorydetails)} key={categorydetails?.id} className='border rounded p-3 mb-3'>
                <div className='d-flex justify-content-between'>
                  <h5>{categorydetails?.categoryName}</h5>
                  <button onClick={() => removeCategory(categorydetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
                </div>

                {/* Display category videos */}
                <div className='row mt-2'>
                  {
                    categorydetails?.allVideos?.length > 0 && categorydetails?.allVideos?.map(video => (
                    <div key={video?.id} className='col-lg-4' draggable={true} onDragStart={e=>categoryVideoDragStarted(e,video,categorydetails)}>
                        {/* video cards */}
                        <VideoCard insideCategory={true} displayData={video} />
                      </div>
                    ))

                  }



                </div>
              </div>
            ))
            :
            <div className='fw-bolder text-danger fs-5'>No categories are added yet!!</div>
        }

      </div>

      {/* modal */}
      <Modal centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingCategoryName" label="Category Name">
            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>




  )
}

export default Category
