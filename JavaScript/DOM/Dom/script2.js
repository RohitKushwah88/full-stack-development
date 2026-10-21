const ar=["ROHIT","SUJAL"];


const list =document.createElement("ol");

ar.forEach((item)=> {
    const L = document.createElement("li");
    L.textContent = item;
    list.appendChild(L);
} );

document.getElementById("mylist").appendChild(list);

