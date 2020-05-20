

export class CarsAPI {

  constructor(url) {
    this._url = url;
  }

  buildElementUri(carId) {
    return `${this._url}/${encodeURIComponent(carId)}`;
  }

  buildRequestBody(method, car) {

    if (method === 'DELETE') {
      return { method };
    }

    return {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    }
  }

  async refresh() {

    const res = await fetch(this._url);

    return res.json();

  }

  async append(car) {

    const res = await fetch(
      this._url,
      this.buildRequestBody('POST', car),
    );

    return res.json();
  }

  async replace(car) {

    const res = await fetch(
      this.buildElementUri(car.id),
      this.buildRequestBody('PUT', car),
    );

    return res.json();
  }

  async remove(carId) {

    const res = await fetch(
      this.buildElementUri(carId),
      this.buildRequestBody('DELETE'),
    );

    return res.json();
  }


}