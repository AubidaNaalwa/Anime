import { useState } from 'react';
import { observer, inject } from 'mobx-react'

function Home(props) {
    

    return (
        <div class="Home">
            
        </div>

    );
}

export default inject("userStore")(observer(Home))
