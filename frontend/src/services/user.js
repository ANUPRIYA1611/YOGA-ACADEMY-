import instance from "./axios";


const api_uri = "http://localhost:8181";

export const userList = () => instance.get(`${api_uri}/api/v1/user/list`);
export const courseList = () => instance.get(`${api_uri}/api/v1/user/course`);
export const userCourseList = () => instance.get(`${api_uri}/api/v1/user/usercourselist`);
export const  deleteuser= (user_id) => instance.delete(`${api_uri}/api/v1/user/deleteuser/${user_id}`);
export const  unenrollUserCourse = (userCourse_id) => instance.delete(`${api_uri}/api/v1/user/deleteusercourse/${userCourse_id}`);
export const paymentList= (data) => instance.post(`${api_uri}/api/v1/pay/paymentlist`,data);