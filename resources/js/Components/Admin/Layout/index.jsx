import React, { Fragment } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';

const AdminLayout = ({ children }) => {
    return (
        <Fragment>
            <div className="flex h-screen bg-green-100">
                <Sidebar />
                <div className="flex flex-col flex-grow bg-red-200">
                    <div className="flex flex-col flex-grow">
                        <Header />
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </Fragment>
    )
}

export default AdminLayout;