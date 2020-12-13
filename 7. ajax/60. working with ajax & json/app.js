document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if (this.status === 200) {
      // console.log(this.responseText);
      //parse as object
      const user = JSON.parse(this.responseText);

      const output = `
      <ul> 
        <li>ID: ${user.id}</li>
        <li>Name: ${user.name}</li>
        <li>Company: ${user.company}</li>
        <li>Phone: ${user.phone}</li>
      </ul> 
      `;

      document.getElementById('customer').innerHTML = output;
    }  
  }

  xhr.send();
}

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e){

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if (this.status === 200){

      const customers = JSON.parse(this.responseText);

      let output = ''

      //use forEach
      customers.forEach(function(curr){
        output += `
        <ul> 
          <li>ID: ${curr.id}</li>
          <li>Name: ${curr.name}</li>
          <li>Company: ${curr.company}</li>
          <li>Phone: ${curr.phone}</li>
        </ul> 
        `;    
      })

      //use for loop
      // for (let i = 0 ; i < customers.length; i++){
      //   output += `
      //   <ul> 
      //     <li>ID: ${customers[i].id}</li>
      //     <li>Name: ${customers[i].name}</li>
      //     <li>Company: ${customers[i].company}</li>
      //     <li>Phone: ${customers[i].phone}</li>
      //   </ul> 
      //   `;      
      // }

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}