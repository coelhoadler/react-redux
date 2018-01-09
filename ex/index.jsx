import React from 'react';
import ReactDOM from 'react-dom';

import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family lastname="Coelho Santos">
        <Member name="Adler" />
        <Member name="Adriane" />
        <Member name="Ilma" />
        <Member name="Naldo" />
    </Family>
, document.querySelector("#app"));