export const URL: string = "http://localhost:8092";
// export const URL: string = "http://192.168.10.42:8080/ncollectorqc";
// export const URL: string = "http://192.168.20.73:8080/ncollectorqc";
// export const URL: string = "http://192.168.20.56:8092/";

export const LOGIN: string = URL + "/api/user/login";
export const GET_ALL_NOTES_LIST: string = URL + "/api/note/getAllNote";
export const UPDATE_NOTE: string = URL + "/api/note/updateNoteById/";
export const DELETE_NOTE: string = URL + "/api/note/deleteNoteById/";
export const ADD_NOTE: string = URL + "/api/note/addNote/";
export const GET_NOTE_BY_ID: string = URL + "/api/note/getNoteById/";
export const CREATE_USER: string = URL + "/api/user/createUser";
export const CHANGE_PASSWOD: string = URL + "/api/user/changePassword";
export const FORGOT_PASSWORD: string = URL + "/api/user/forgotPassword";





export const GET_TABLE_DATA: string = URL + "/editor/getSurveyCategoryData";
export const GET_QC_USERS: string = URL + "/editor/getQcUsers";
export const GET_ACCESS_DATA: string = URL + "/editor/getAccessbyDepartmentUser";
export const ACCEPT_DATA: string = URL + "/editor/accept";
export const INSERT_QC_LOG: string = URL + "/editor/insertQcLog";
export const GET_EXTENT: string = URL + "/editor/getExtent";
export const GET_IMAGE: string = URL + "/getByteArrayget";
export const GET_DASHBORD_DATA: string = URL + "/editor/getDashbordData";
export const GET_VIDEO: string = URL + "/editor/getByteArrayForVideo";
export const ZIP_FILE_DOWNLOAD: string = 'http://192.168.20.56:8092/api/layers/exportShapeFile'







export const API_AUTH_AUTHENTICATE: string =  URL + "/auth/login";
export const API_FORGET_PASSWORD: string = URL + "/forgotPassword";
export const API_AUTH_CHANGE_PASSWORD: string =URL + "/changePassword";
export const API_AUTH_AUTHENTICATE_RESET: string = URL + "/auth/resetPassword";
export const API_AUTH_CHECK_EXPIRATION: string = URL + "/auth/checkTokenExpiration";
