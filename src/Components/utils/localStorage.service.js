export const getFavFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
};
    
export const setFavInStorage = (dentist) =>{
    const storageFavs = getFavFromStorage()
    storageFavs.push(dentist)
    localStorage.setItem("favs", JSON.stringify(storageFavs));
}

   
   