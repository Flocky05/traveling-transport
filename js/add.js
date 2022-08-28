var carObject={
    vehecal:'car',
    imageUrl:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    farePerKilo:4,
    capacity:4,
    description:"ATPI Halo is a carbon measurement, reduction and offset service designed by travel management experts."

};
var bikeObject={
    vehecal:'bike',
    imageUrl:"https://images.unsplash.com/photo-1571188654248-7a89213915f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpa2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    farePerKilo:2,
    capacity:2,
    description:"ATPI Halo is a carbon measurement, reduction and offset service designed by travel management experts."

};
var busObject={
    vehecal:'bus',
    imageUrl:"https://images.unsplash.com/photo-1544214643-652d421190f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    farePerKilo:3,
    capacity:30,
    description:"ATPI Halo is a carbon measurement, reduction and offset service designed by travel management experts."

};
var aeroplaneObject={
    vehecal:'aeroplane',
    imageUrl:"https://media.istockphoto.com/photos/3d-rendering-of-the-airport-terminal-picture-id1316256407?b=1&k=20&m=1316256407&s=170667a&w=0&h=Q_GYGCNfVs5ppoUdTGz372s82G-P_pBbKWnxeroq2Ek=",
    farePerKilo:30,
    capacity:300,
    description:"ATPI Halo is a carbon measurement, reduction and offset service designed by travel management experts."

};


function displayService(service){
   const mainSection=document.getElementById('main-section');
   const div=document.createElement('div')
   div.innerHTML=`
   <div class="card mt-4 mx-auto" style="max-width: full;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Transport mode: ${service.vehecal}</h5>
                <p class="card-text"> ${service.description} </p>
                <p class="card-text"><small class="text-muted">fareperKilo: ${service.farePerKilo} capacity: ${service.capacity} </small></p>
              </div>
            </div>
          </div>
        </div>
   `;
   mainSection.appendChild(div);
   console.log(service);
}
displayService(busObject);
displayService(carObject);
displayService(bikeObject);
displayService(aeroplaneObject);