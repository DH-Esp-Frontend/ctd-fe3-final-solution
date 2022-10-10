export const getFavFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
};

export const setFavInStorage = (dentist) => {
    const storageFavs = getFavFromStorage();
    const isFavOnList = storageFavs.filter(fav => {
        return fav.id === dentist.id
    });
    if (isFavOnList.length === 0) {
        storageFavs.push(dentist)
        localStorage.setItem("favs", JSON.stringify(storageFavs));
        alert("Dentist added successfully")
    }
    else {
        alert("Dentist already on the list")
    }
}

export const removeFavInStorage = (id) => {
    let storageFavs = getFavFromStorage();
    const index = storageFavs.findIndex(fav => fav.id === id);
    if (index !== -1) {
        storageFavs.splice(index, 1);
        localStorage.setItem("favs", JSON.stringify(storageFavs));
        alert("Dentist removed successfully");
    }
    else {
        alert("An Error has ocurred");
    }
}

export const isFavorited = (id) => {
    const localData = getFavFromStorage();
    const isFavOnList = localData.filter(fav => {
        return fav.id === id
    });
    return isFavOnList.length === 1;
};