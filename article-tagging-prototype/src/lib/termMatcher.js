'use strict';

const termMatcher = (params, data) => {
  // Return everything if search blank
  if ($.trim(params.term) === '') {
    return data;
  }

  // Return everything if parent topic matches term
  if (data.text.toLowerCase().indexOf(params.term.toLowerCase()) !== -1) {
    return data;
  }

  // Skip if no children
  if (typeof(data.children) === 'undefined') {
    return null;
  }

  // Case-insensitive filter of sub-topics
  const filteredChildren = data.children.filter((child) => {
    return child.text.toLowerCase().indexOf(params.term.toLowerCase()) !== -1;
  });

  // Modify and return if we have sub-topic results
  if ( filteredChildren.length ) {
    var modifiedData = $.extend({}, data, true);
    modifiedData.children = filteredChildren;
    return modifiedData;
  };

  // Nothing here
  return null;
};

export default termMatcher;