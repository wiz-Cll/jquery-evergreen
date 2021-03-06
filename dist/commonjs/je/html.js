"use strict";
// # HTML

var makeIterable = require("../util").makeIterable;

/*
 * ## html
 *
 *     $('.item').html();
 *     $('.item').html('<span>more</span>');
 *
 * @param {String} [fragment] HTML fragment to set for the element
 * @return {Node|NodeList|$Object} Returns the object it was applied to (`this`).
 */

var html = function(fragment) {

    if(!fragment) {
        return (this.nodeType ? this : this[0]).innerHTML;
    }

    makeIterable(this).forEach(function(element) {
        element.innerHTML = fragment;
    });
    return this;

};

// Export interface

exports["default"] = html;