var React = require('react');

var SourceManifestMetadataDialog = React.createClass({
  render: function() {
    return (
      <div className="modal fade manifest-metadata-dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title">Manifest Metadata</h4>
            </div>
            <div className="modal-body">
              <div className="source-manifest-metadata">
                {(() => {
                  var manifestId = this.props.manifestData.id;
                  if(manifestId !== undefined && manifestId !== '') {
                    return (
                      <div className="row metadata-field-row">
                        <div className="col-md-3 metadata-field-label">Manifest URI</div>
                        <div className="col-md-9 metadata-field-value">
                          <a href={manifestId} target="_blank">{manifestId}</a>
                        </div>
                      </div>
                    );
                  }
                })()}
                {(() => {
                  var label = this.props.manifestData.getLabel();
                  if(label !== undefined && label !== '') {
                    return (
                      <div className="row metadata-field-row">
                        <div className="col-md-3 metadata-field-label">Label</div>
                        <div className="col-md-9 metadata-field-value">{label}</div>
                      </div>
                    );
                  }
                })()}
                {(() => {
                  var description = this.props.manifestData.getDescription();
                  if(description !== undefined && description !== '') {
                    return (
                      <div className="row metadata-field-row">
                        <div className="col-md-3 metadata-field-label">Description</div>
                        <div className="col-md-9 metadata-field-value">{description}</div>
                      </div>
                    );
                  }
                })()}
                {(() => {
                  var attribution = this.props.manifestData.getAttribution();
                  if(attribution !== undefined && attribution !== '') {
                    return (
                      <div className="row metadata-field-row">
                        <div className="col-md-3 metadata-field-label">Attribution</div>
                        <div className="col-md-9 metadata-field-value">{attribution}</div>
                      </div>
                    );
                  }
                })()}
                {(() => {
                  var license = this.props.manifestData.getLicense();
                  if(license !== undefined && license !== '') {
                    return (
                      <div className="row metadata-field-row">
                        <div className="col-md-3 metadata-field-label">License</div>
                        <div className="col-md-9 metadata-field-value">{license}</div>
                      </div>
                    );
                  }
                })()}
                {(() => {
                  var logo = this.props.manifestData.getLogo();
                  if(logo !== undefined && logo !== '') {
                    return (
                      <div className="row metadata-field-row">
                        <div className="col-md-3 metadata-field-label">Logo</div>
                        <div className="col-md-9 metadata-field-value">{logo}</div>
                      </div>
                    );
                  }
                })()}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-close"></i> Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SourceManifestMetadataDialog;
