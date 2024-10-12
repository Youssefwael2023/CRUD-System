// let ProductName = document.getElementById("ProductName");
// let ProductPrice = document.getElementById("ProductPrice");
// let ProductCategory = document.getElementById("ProductCategory");
// let ProductDescription = document.getElementById("ProductDescription");
// let BodyData = document.getElementById("BodyData");
// let AddBtn = document.getElementById("AddBtn");
// let ProductNameAlert = document.getElementById("ProductNameAlert");
// let ProductPriceAlert = document.getElementById("ProductPriceAlert");
// let ProductCategoryAlert = document.getElementById("ProductCatAlert");

// let productarr;
// if (localStorage.getItem("product") != null) {
//     productarr = JSON.parse(localStorage.getItem("product"));
//     show();
// } else {
//     productarr = [];
// }

// function Add2Procuct() {
//     if (AddBtn.innerText === "Add Product") {
//         AddProcuct();
//     } else {
//         update();
//     }
// }

// // Add Product
// function AddProcuct() {
//     if (validate() === true) {
//         ProductNameAlert.style.display = "none";
//         ProductPriceAlert.style.display = "none";
//         ProductCategoryAlert.style.display = "none";
//         ProductName.classList.remove("is-invalid");

//         let ProductInfo = {
//             ProductName: ProductName.value,
//             ProductPrice: ProductPrice.value,
//             ProductCategory: ProductCategory.value,
//             ProductDescription: ProductDescription.value,
//         };
//         productarr.push(ProductInfo);
//         localStorage.setItem("product", JSON.stringify(productarr));
//         clear();
//         show();
//     }
//     else {
//         ProductNameAlert.style.display = "block";
//         ProductPriceAlert.style.display = "block";
//         ProductCategoryAlert.style.display = "block";
//         ProductName.classList.add("is-invalid");
//     }
// }

// // Clear Inputs
// function clear() {
//     ProductName.value = "";
//     ProductPrice.value = "";
//     ProductCategory.value = "";
//     ProductDescription.value = "";
// }

// // Show Products
// function show() {
//     let row = "";
//     for (let i = 0; i < productarr.length; i++) {
//         row += `<tr>
//                     <td>${i + 1}</td>
//                     <td>${productarr[i].ProductName}</td>
//                     <td>${productarr[i].ProductPrice}</td>
//                     <td>${productarr[i].ProductCategory}</td>
//                     <td>${productarr[i].ProductDescription}</td>
//                     <td><button class="btn btn-outline-warning" onclick="UpdateProduct(${i})">Update</button></td>
//                     <td><button class="btn btn-outline-danger" onclick="DelteProduct(${i})">Delete</button></td>
//                 </tr>`;
//     }
//     BodyData.innerHTML = row;
// }

// // Delete Product
// function DelteProduct(index) {
//     productarr.splice(index, 1);
//     localStorage.setItem("product", JSON.stringify(productarr));
//     show();
// }

// // Update Product
// let currentindex;
// function UpdateProduct(index) {
//     currentindex = index;
//     ProductName.value = productarr[index].ProductName;
//     ProductPrice.value = productarr[index].ProductPrice;
//     ProductCategory.value = productarr[index].ProductCategory;
//     ProductDescription.value = productarr[index].ProductDescription;
//     AddBtn.style.backgroundColor = "red";
//     AddBtn.innerHTML = "Update";
// }

// function update() {
//     productarr[currentindex].ProductName = ProductName.value;
//     productarr[currentindex].ProductPrice = ProductPrice.value;
//     productarr[currentindex].ProductCategory = ProductCategory.value;
//     productarr[currentindex].ProductDescription = ProductDescription.value;
//     AddBtn.style.backgroundColor = "green";
//     AddBtn.innerHTML = "Add Product";
//     localStorage.setItem("product", JSON.stringify(productarr));
//     show();
//     clear();
// }

// // Search Functionality
// function search(term) {
//     let data = '';
//     for (let i = 0; i < productarr.length; i++) {
//         if (productarr[i].ProductName.toLowerCase().includes(term.toLowerCase())) {
//             data += `<tr>
//                         <td>${i + 1}</td>
//                         <td>${productarr[i].ProductName}</td>
//                         <td>${productarr[i].ProductPrice}</td>
//                         <td>${productarr[i].ProductCategory}</td>
//                         <td>${productarr[i].ProductDescription}</td>
//                         <td><button class="btn btn-outline-warning" onclick="UpdateProduct(${i})">Update</button></td>
//                         <td><button class="btn btn-outline-danger" onclick="DelteProduct(${i})">Delete</button></td>
//                     </tr>`;
//         }
//     }
//     BodyData.innerHTML = data || '<tr><td colspan="7">No products found</td></tr>'; // Clear or show message if not found
// }

// // Validation
// ProductNameAlert.style.display = "none";
// ProductPriceAlert.style.display = "none";
// ProductCategoryAlert.style.display = "none";
// function validate() {
//     let reg = /^[A-Z][a-z]{1,9}$/; // Fixed regex
//     if (reg.test(ProductName.value)) {
//         ProductName.classList.add("is-valid");
//         return true;
//     } else {
//         ProductName.classList.remove("is-valid");
//         ProductName.classList.add("is-invalid");
//         ProductNameAlert.style.display = "block";
//         return false;
//     }
//     if (reg.test(ProductCategory.value)) {
//         ProductCategory.classList.add("is-valid");
//         return true;
//     } else {
//         ProductCategory.classList.remove("is-valid");
//         ProductCategory.classList.add("is-invalid");
//         ProductCategoryAlert.style.display = "block";
//         return false;
//     }

//     if (ProductPrice.value > 0) {
//         ProductPrice.classList.add("is-valid");
//         return true;
//     } else {
//         ProductPrice.classList.remove("is-valid");
//         ProductPrice.classList.add("is-invalid");
//         ProductPriceAlert.style.display = "block";
//         return false;
//     }
// }

///////////////////////////////

//////////////regux////////////////

//reg/abc/ sequence abc
//reg/[abc]/ any one of abc
//reg=/[a-z]/ any word
//reg=/[0-9]/ any number
//reg=/[A-Z0-9]/ any word or number
//reg=/[^0-9]/ not number
//reg=/^[A-Z]/ first letter must be capital
//reg=/^[A-Z][a-z]$/ first letter must be capital and last letter must be capital or small
//reg=/^[A-Z][a-z]{3,9}$/ first letter must be capital and last letter must be capital or small and length must be 3 to 9
//reg=/web(dev|designer)/ web dev or web designer
//reg=/+20(10|11|12|15)[0-9]{8}/ 10 or 11 or 12 or 15 and 8 number
//reg=/(+20)?(10|11|12|15)[0-9]{8}/ optioanl 20 and 10 or 11 or 12 or 15 and 8 number









//////////////////////////////////////
let ProductName = document.getElementById("ProductName");
let ProductPrice = document.getElementById("ProductPrice");
let ProductCategory = document.getElementById("ProductCategory");
let ProductDescription = document.getElementById("ProductDescription");
let AddBtn = document.getElementById("AddBtn");
let BodyData = document.getElementById("BodyData");

let AddARR;


if (localStorage.getItem("Product") != null) {
    AddARR = JSON.parse(localStorage.getItem("Product"));
    Show();
} else {
    AddARR = [];
}
function Add2Product() {

    if (AddBtn.innerText == "Add Product") {
        AddProduct();
    }
    else {
        UpdateProduct();
    }
}
function AddProduct() {
    
    if (Namevalidation() == true) {
        ProductNameAlert.style.display = "none";
        ProductPriceAlert.style.display = "none";
        ProductCategoryAlert.style.display = "none";
        ProductName.classList.remove("is-invalid");
        ProductName.classList.add("is-valid");
        ProductPrice.classList.remove("is-invalid");
        ProductPrice.classList.add("is-valid");
        ProductCategory.classList.remove("is-invalid");
        ProductCategory.classList.add("is-valid");
        let AddObj = {
            Name: ProductName.value,
            Price: ProductPrice.value,
            Category: ProductCategory.value,
            Description: ProductDescription.value
        }
        AddARR.push(AddObj);
        localStorage.setItem("Product", JSON.stringify(AddARR));
        Clear();
        Show();

    }
    else {
        alert("Please Enter Valid Data");
    }
}

function Clear() { //for clearing the input fields
    ProductName.value = "";
    ProductPrice.value = "";
    ProductCategory.value = "";
    ProductDescription.value = "";
}

function Show() {

    let row = ''
    for (let i = 0; i < AddARR.length; i++) {
        row += `
         <tr>
                <td>${i + 1}</td>
                <td>${AddARR[i].Name}</td>
                <td>${AddARR[i].Price}</td>
                <td>${AddARR[i].Category}</td>
                <td>${AddARR[i].Description}</td>
               <td><button class="btn btn-outline-warning" onclick="SetProduct(${i})" >Update</button></td>
                <td><button class="btn btn-outline-danger" onclick="DeletProduct(${i})">Delete</button></td>
                
               </tr>
        `
    }
    BodyData.innerHTML = row;

}



function DeletProduct(index) {
    AddARR.splice(index, 1)
    localStorage.setItem("Product", JSON.stringify(AddARR));
    Show();
}
let currentindex;

function SetProduct(index) {
    currentindex = index;
    ProductName.value = AddARR[index].Name;
    ProductPrice.value = AddARR[index].Price;
    ProductCategory.value = AddARR[index].Category;
    ProductDescription.value = AddARR[index].Description;
    AddBtn.innerHTML = "Update Product";
    AddBtn.style.backgroundColor = "red";
}

function UpdateProduct() {
    AddARR[currentindex].Name = ProductName.value;
    AddARR[currentindex].Price = ProductPrice.value;
    AddARR[currentindex].Category = ProductCategory.value;
    AddARR[currentindex].Description = ProductDescription.value;
    localStorage.setItem("Product", JSON.stringify(AddARR));
    Show();
    Clear();
    AddBtn.innerHTML = "Add Product";
    AddBtn.style.backgroundColor = "green";
}


///validation
let ProductNameAlert = document.getElementById("ProductNameAlert");
ProductNameAlert.style.display = "none";
let ProductPriceAlert = document.getElementById("ProductPriceAlert");
ProductPriceAlert.style.display = "none";
let ProductCategoryAlert = document.getElementById("ProductCatAlert");
ProductCategoryAlert.style.display = "none";

function Namevalidation() {
    let nregx = /^[A-Z][a-z]{3,9}$/;//first letter must be capital and last letter must be capital or small and length must be 3 to 9
    let numreg=/^[0-9]{1,5}$/;

    if (nregx.test(ProductName.value)&&numreg.test(ProductPrice.value)&&nregx.test(ProductCategory.value)) {
        ProductName.classList.add("is-valid");
        ProductNameAlert.style.display = "none";
        ProductPrice.classList.add("is-valid");
        ProductPriceAlert.style.display = "none";
        ProductCategory.classList.add("is-valid");
        ProductCategoryAlert.style.display = "none";

        return true;
    }
    else {
        ProductName.classList.remove("is-valid");
        ProductName.classList.add("is-invalid");
        ProductNameAlert.style.display = "block";
        ProductPrice.classList.remove("is-valid");
        ProductPrice.classList.add("is-invalid");
        ProductPriceAlert.style.display = "block";
        ProductCategory.classList.remove("is-valid");
        ProductCategory.classList.add("is-invalid");
        ProductCategoryAlert.style.display = "block";
        return false;
    }
 
   
}

///sarch

function search(term){
    let data = '';
        for (let i = 0; i < AddARR.length; i++) {
            if (AddARR[i].Name.toLowerCase().includes(term.toLowerCase())) {
                data += `<tr>
                            <td>${i + 1}</td>
                            <td>${AddARR[i].Name}</td>
                            <td>${AddARR[i].Price}</td>
                            <td>${AddARR[i].Category}</td>
                            <td>${AddARR[i].Description}</td>
                            <td><button class="btn btn-outline-warning" onclick="UpdateProduct(${i})">Update</button></td>
                            <td><button class="btn btn-outline-danger" onclick="DelteProduct(${i})">Delete</button></td>
                        </tr>`;
            }
        }
        BodyData.innerHTML = data || '<tr><td colspan="7">No products found</td></tr>'; // Clear or show message if not found
    }
