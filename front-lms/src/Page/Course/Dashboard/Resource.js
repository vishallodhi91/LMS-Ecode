import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Resource = () => {
    return (
        <div>
            <button type="button" className="site-action-toggle btn-raised btn btn-success btn-floating" data-toggle="modal" data-target="#myModal">
                <h2>+</h2>
            </button>

            <div className="modal" id="myModal">
                <div className="modal-dialog  modal-lg">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h4 className="modal-title"><FontAwesomeIcon icon="paperclip" />&nbsp;Lecture Description & Resources</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div className="modal-body">
                            <h1>hello</h1>
                        </div>


                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resource