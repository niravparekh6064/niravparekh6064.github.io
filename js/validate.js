function validate(event) {
  // TODO: write custom validation logic to validate the longitude and latitude values.
  // The latitude value must be a number between -90 and 90;
  // The Longitude value must be a number between -180 and 180.
  // If either/both are invalid, show the appropriate error message in the form,
  // and stop the form from being submitted.
  // If both values are valid, allow the form to be submitted.

  const checking = document.querySelector('form');

  const coords_latitude  = parseFloat(checking.cordinates_of_lat.value);
  const latitude_l  = checking.querySelector('#lat_label > span');
  const _longitude = parseFloat(checking.cordinates_of_long.value);
  const _labelLong = checking.querySelector('#long_label > span');
  let _result = true;

  if (coords_latitude < -90 || coords_latitude > 90 || isNaN(coords_latitude)) {
    latitude_l.innerText = '* must be a valid Latitude (-90 to 90)';
    return false;
  }
  else {
    latitude_l.innerText = '*';
  }

  if (_longitude < -180 || (_longitude > 180 || isNaN(_longitude))) {
    _labelLong.innerText = '* must be a valid Longitude (-180 to 180)';
    return false;
  } else {
    _labelLong.innerText = '*';
  }

  return _result;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
