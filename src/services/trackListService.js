// This allows us to use axios instead of fetch. This willow us t pull directly from .json api call
// Typed out the BASE_URL with axios to start. We still have to create and export the track list ID to display each track individually
import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

export const gettracks = async () => {
    try {
        const res = await axios.get(BASE_URL);
        // This will allow us to grab the data from the db using JSON
        return res.data;
    } catch (error) {
        console.log("Error cannot obtain tracks:", error);
        // returning an [] upon error will allow us to handle error 
        return [];
    }
};