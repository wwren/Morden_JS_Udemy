class EasyHttp {

  // get(url) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url)
  //     .then(res => res.json())
  //     .then(data => resolve(data))
  //     .catch(error => reject(error));
  //   });
  // }
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();

    return resData
  }

  // post(url, data) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify(data) //body must match 'Content-type' header
  //     })
  //     .then(res => res.json())
  //     .then(data => resolve(data))
  //     .then(error => reject(error));
  //   });
  // }

  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();

    return resData;
  }


  // put(url, data) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify(data) 
  //     })
  //     .then(res => res.json())
  //     .then(data => resolve(data))
  //     .catch(error => reject(error));
  //   });
  // }
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data) 
    });

    const resData = await response.json();

    return resData;
  }

  // delete(url, data) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-type': 'application/json'
  //       }
  //     })
  //     .then(res => res.json)
  //     .then(() => 'Deleted successfully')
  //     .catch(error => reject(error));
  //   });
  // }
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      header: {
        'Content-type' : 'application/json'
      }
    })

    const resData = await 'Resource delete';
 
    return resData;
  }
  

}