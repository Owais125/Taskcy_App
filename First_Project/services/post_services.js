import { apiHandle } from "../Config/apiHandle/apiHandle"

export const post_get_service = () => {

    return apiHandle.get('/post')
 }
export const project_get_service = () => {

    return apiHandle.get('/project')
 }
export const project_service = (data) => {

    return apiHandle.post('/project',data)
 }
 export const post_service = (data) => {

    return apiHandle.post('/post',data)
 }
 export const message_service = (data) => {

    return apiHandle.post('/message',data)
 }
 export const message_get_service = () => {

    return apiHandle.get('/message')
 }