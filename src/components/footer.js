import React from 'react';
import instagramicon from '@material-ui/icons/instagram';
import facebook from '@material-ui/icons/Facebook';
import '..//styles/footer.css'


const footer = () => {
    return (
        <div className="footer"> 
         <div className="socials">
             <instagramicon /> < facebook />

        </div>
            
        </div>
    )
}

export default footer
