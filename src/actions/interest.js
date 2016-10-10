import 'whatwg-fetch';

/***
 * https://www.npmjs.com/package/whatwg-fetch
 * @param response
 */
function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
}

export const updateInterest = (interest) => {
  return {
    type: 'FORM_UPDATED',
    payload: {
      interest
    }
  }
};

function fetchInterest() {
  return fetch('/interest/30');
}

export const getInterest = () => {
  return (dispatch) => {
    fetchInterest()
      .then(checkStatus)
      .then(parseJSON)
      .then((jsonResponse) => dispatch(updateInterest(jsonResponse.rate)))
      .catch((error) => console.log(`error occurred while fetching`));
  }
};
