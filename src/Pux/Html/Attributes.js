'use strict';

// module Pux.Html.Attributes

exports.attribute = function (key, val) {
  if (key === 'dangerouslySetInnerHTML') {
    val = { __html: val };
  }
  return [key, val];
};
