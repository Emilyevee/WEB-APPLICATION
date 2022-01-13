import React from 'react';
import {Accountlist} from'../extras/accassets';
import accountassets from '../components/accountassets';
import '..//styles/account.css';


const account = () => {
    return (
        <div className="account"> 
        <h1 className="accountitle"> My Account </h1>
        <div className="Assets">{Accountlist.map((accountitem, key)=> {
            return (
                <accountassets
                    key={key}
                    image={accountitem.Image}
                />
            );
    })}

        </div>
            
        </div>
    );
}

export default account;
