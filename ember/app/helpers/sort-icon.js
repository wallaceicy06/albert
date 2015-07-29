import Ember from 'ember';

export function sortIcon(params) {
  var sortProperties = params[0];
  var isAscending = params[1];
  var thisColumn = params[2];

  if (sortProperties.contains(thisColumn)) {
    if (isAscending) {
      return 'uk-icon-chevron-up';
    } else {
      return 'uk-icon-chevron-down';
    }
  }
}

export default Ember.Helper.helper(sortIcon);
