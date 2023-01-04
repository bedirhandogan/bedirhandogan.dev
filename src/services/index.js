const username = "bedirhandogan";

const getRepositoriesDetail = () => {
    return fetch(`https://api.github.com/users/${username}/repos`).then(response => response.json()).catch(error => console.error(error));
}

export default getRepositoriesDetail;