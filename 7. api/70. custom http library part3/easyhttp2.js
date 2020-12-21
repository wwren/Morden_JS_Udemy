/**
 * EasyHttp Library
 * Library for making HTTP request
 * 
 * @version 2.0.0
 * @author Brad Traversy - Ran (Student)
 * @license MIT
 */

 class EasyHttp {
   get(url) {
     return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
     });    
   } 

   post(url, data) {
    return new Promise((resolve, reject) => {
     fetch(url, {
       method: 'POST',
       headers: {
         'Content-type': 'application/json'
       },
       body: JSON.stringify(data)
     })
     .then(res => res.json())
     .then(data => resolve(data))
     .catch(err => reject(err));
    });    
  } 

  put(url, data) {
    return new Promise((resolve, reject) => {
     fetch(url, {
       method: 'PUT',
       headers: {
         'Content-type': 'application/json'
       },
       body: JSON.stringify(data)
     })
     .then(res => res.json())
     .then(data => resolve(data))
     .catch(err => reject(err));
    });    
  } 

  delete(url) {
    return new Promise((resolve, reject) => {
     fetch(url, {
       method: 'DELETE',
       headers: {
         'Content-type': 'application/json'
       },
     })
     .then(res => res.json())
     .then(() => resolve('Resource deleted'))
     .catch(err => reject(err));
    });    
  } 

 }