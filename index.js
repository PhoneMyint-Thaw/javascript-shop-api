var apicall = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
        const jsonResponse = await response.json();
        // console.log(jsonResponse);

        var tbody = document.getElementById("tbody");
        // console.log(jsonResponse.length);

        for (let i = 0; i < jsonResponse.length; i++) {
            tbody.innerHTML += `
            <tr>
                <td>${jsonResponse[i].id}</td>
                <td>${jsonResponse[i].title}</td>
                <td>${jsonResponse[i].description}</td>
                <td>${jsonResponse[i].category}</td>
                <td><img src="${jsonResponse[i].image}" style= "width : 70px"></td>
            </tr>
            `;
            
        }

        const autoCompleteInputTag = document.getElementsByClassName("autoCompleteInputTag")[0];
        const resultContainerTag = document.getElementsByClassName("resultContainer")[0];

        autoCompleteInputTag.addEventListener("keyup", (event) => {
        resultContainerTag.innerHTML = "";
        const searchText = event.target.value.toLowerCase();

        if (searchText.length === 0) {
        return;
        }

        const filterProducts = jsonResponse.filter(product =>  {
       return product.title.toLowerCase().includes(searchText);
      });
            const howProductToshow = filterProducts.length > 0;

        if(howProductToshow) {
        for (let i = 0; i < filterProducts.length; i++) {
            

            const productName = document.createElement("div");
            productName.classList.add("productName");
            productName.append(filterProducts[i].title);

            resultContainerTag.append(productName);
        }
    }
});
};

apicall();


