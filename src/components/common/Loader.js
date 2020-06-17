import React from 'react';

const Loader = () => {
    return (
        <div className="container h-100">
            <div className="jumbotron vertical-center">
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
