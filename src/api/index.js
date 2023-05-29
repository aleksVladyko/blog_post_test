import axios from "axios";

export const getPosts = async () => {
    try {
        const request = await axios.get(
            "https://jsonplaceholder.typicode.com/posts/"
        );
        return request;
    } catch (error) {
        console.error(error);
    }
};
// export async function getUsers() {
//     console.log("Now calling getUsers API");
//     return await axios
//         .get("https://jsonplaceholder.typicode.com/users")
//         .then((res) => {
//             return res.data;
//         })
//         .catch((err) => {
//             throw err;
//         });
// }
