var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var ThumbnailStripCanvas = require('ThumbnailStripCanvas');

var ThumbnailStrip = React.createClass({
  getSequenceFromManifest: function(manifestObj) {
    if(manifestObj.data !== undefined) {
      if(manifestObj.data.sequences.length > 0) {
        // return the first available sequence from the given manifest
        return manifestObj.data.sequences[0];
      } else {
        return {};
      }
    }
  },
  getCanvasesFromSequence: function(sequenceObj) {
    if(sequenceObj !== undefined) {
      if(sequenceObj.canvases.length > 0) {
        // return the list of canvases for the given sequence
        return sequenceObj.canvases;
      } else {
        return {};
      }      
    }
  },
  buildThumbnailStripCanvasComponents: function(canvases) {
    var thumbnailStripCanvasComponents = [];
    for(var canvasIndex = 0; canvasIndex < canvases.length; canvasIndex++) {
      var canvasMetadata = canvases[canvasIndex];
      thumbnailStripCanvasComponents.push(<ThumbnailStripCanvas key={canvasIndex} canvasMetadata={canvasMetadata}/>);
    }
    return thumbnailStripCanvasComponents;
  },
  render: function() {
    var {manifestData} = this.props;
    var sequence = this.getSequenceFromManifest(manifestData);
    var canvases = this.getCanvasesFromSequence(sequence);
    return (
      <div className="row thumbnail-strip-container">
        {this.buildThumbnailStripCanvasComponents(canvases)}
      </div>
    );
  }
});

module.exports = connect(
  (state) => {
    return {
      manifestData: state.manifestReducer.manifestData
    };
  }
)(ThumbnailStrip);
