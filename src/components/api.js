export default class Api {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  _request(url) {
    return fetch(url).then(this.renderResult);
  }

  renderResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`'Error:' ${res.status}`);
    }
  }

  //   getInfo(city) {
  //     return this._request(`${this._baseUrl}/api/organizations/search/:${city}`, {
  //       headers: this._headers,
  //     });
  //   }

  getInfo(cause) {
    console.log(
      `${this._baseUrl}search/causes=${cause}?apiKey=${this._apiKey}`
    );
    return fetch(
      `${this._baseUrl}search/causes=${cause}?apiKey=${this._apiKey}`
    ).then(this.renderResult);
  }

}
