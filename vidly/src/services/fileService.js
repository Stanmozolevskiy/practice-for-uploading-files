import http from "./httpService";
import { apiUploads } from "../config.json";

function fileUrl(id) {
    return `${apiUploads}${id}`
}

export function getFiles() {
    return http.get(apiUploads);
}

export function getFile(fileId) {
    return http.get(fileUrl(fileId));
}

export function saveFile(file) {
    
    return http.post(apiUploads,file);

}
