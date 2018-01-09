import React from 'react';

const Utils = require('../public/utils/reactUtils');

export default props => {
    return (
        <div>
            <h1>Família</h1>
            <hr />
            {/* passa as propriedades para os elementos filhos */}
            { Utils.childrenWithProps(props.children, { ...props }) }
        </div>
    )
}