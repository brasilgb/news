import React, { Fragment } from 'react'

const SiteLayout = ({ children }) => {
    return (
        <Fragment>
            <div className="bg-blue-400">
                {children}
            </div>
        </Fragment>
    )
}

export default SiteLayout;