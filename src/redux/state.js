import menuitems from '../jsons/MenuItems.json'
import subm from '../jsons/SubMenuItems.json'
import photos from '../jsons/photos.json'
import contacts from '../jsons/contacts.json'

var state = {
    HeaderPage: {

    },
    MenuPage: {
        m: menuitems,
    },
    MainPage:{
        subm: subm,
        photos: photos
    },
    FooterPage:{
        contacts: contacts
    }
}

export default state;