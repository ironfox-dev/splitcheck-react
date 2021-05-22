import react from "react";

const AddPhoto = () => {
  return (
    // <!-- modal-add-photo -->
    <div
      className="modal fade add-photo drop-photo--over"
      tabindex="-1"
      id="add-photo"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content position-relative">
          {/* <!-- modal-header --> */}
          <div className="modal-header d-flex align-items-center">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {/* <!-- /modal-header --> */}
          {/* <!-- modal-body --> */}
          <div className="modal-body">
            <div className="drop-photo dropzone position-relative d-flex flex-wrap flex-column align-items-center justify-content-center">
              <div className="drop-photo__start dz-message">
                <figure className="position-relative">
                  <i className="icon icon-cloud"></i>
                </figure>
                <h4>Drag and drop your photo</h4>
                <p>
                  Or <span>browse</span> to choose a file
                </p>
              </div>
            </div>
          </div>
          {/* <!-- /modal-body --> */}
          <div className="modal-footer d-flex flex-sm-row align-items-center justify-content-end">
            <a href="#" className="btn-border btn-drop-photo-crop">
              Crop
            </a>
            <a href="#" className="btn-blue" data-dismiss="modal">
              Save
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPhoto;
