
import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// saveVideoAPI - post http request, add.jsx component

export const saveVideoAPI = async (videoDetails)=>{
    return await commonAPI(`POST`,`${SERVERURL}/uploadVideos`,videoDetails)
}

// getAllVideosAPI - get method, called by view component, when component displays in browser inside its useEffect Hook
export const getAllVideosAPI = async ()=>{
    return await commonAPI(`GET`,`${SERVERURL}/uploadVideos`,"")
}

// saveHistoryAPI - post http method to http://localhost:3000/history called by videocard when we click on video
export const saveHistoryAPI = async (historyDetails)=>{
    return await commonAPI(`POST`,`${SERVERURL}/history`,historyDetails)
}

// getAllHistoryAPI - get http request from http://localhost:3000/history called by history component when it open in browser
export const getAllHistoryAPI = async ()=>{
    return await commonAPI(`GET`,`${SERVERURL}/history`,"")
}

// deleteHistoryAPI - delete method to http://localhost:3000/history/id called by history when clicked on delete button
export const deleteHistoryAPI = async (id)=>{
    return await commonAPI(`DELETE`,`${SERVERURL}/history/${id}`,{})
}

// removeVideoAPI - delete method to http://localhost:3000/uploadVideos/id called by videoCard when clicked on delete button
export const removeVideoAPI = async (id)=>{
    return await commonAPI(`DELETE`,`${SERVERURL}/uploadVideos/${id}`,{})
}

// saveCategoryAPI - post request http://localhost:3000/categories called by category component when clicked on add button
// categoryDetails = {categoryName,allVideos}
export const saveCategoryAPI = async (categoryDetails)=>{
    return await commonAPI(`POST`,`${SERVERURL}/categories`,categoryDetails)
}

// getAllCategoryAPI - get http request from http://localhost:3000/categories called by category component when component is loaded in browser.
export const getAllCategoryAPI = async ()=>{
    return await commonAPI(`GET`,`${SERVERURL}/categories`,{})
}

// deleteCategoryAPI - delete method to http://localhost:3000/categories/id called by videoCard when clicked on delete button
export const deleteCategoryAPI = async (id)=>{
    return await commonAPI(`DELETE`,`${SERVERURL}/categories/${id}`,{})
}

// updateCategoryAPI - put method to http://localhost:3000/categories/id called by category when video drop over the category
export const updateCategoryAPI = async (categoryDetails)=>{
    return await commonAPI(`PUT`,`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}