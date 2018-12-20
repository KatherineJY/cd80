let storage={
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    },
    get(key){
        return JSON.parse(localStorage.getItem(key))
    },
    remove(key){
        localStorage.removeItem(key)
    }
} 

export default storage;

//<Icon type="user" theme="outlined" />
//<Icon type="shopping-cart" theme="outlined" />
//<Icon type="heart" theme="outlined" />
//<Icon type="warning" theme="outlined" />
//<Icon type="close-circle" theme="outlined" />
//<Icon type="right" theme="outlined" />