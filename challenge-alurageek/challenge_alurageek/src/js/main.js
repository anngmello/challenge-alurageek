window.onload = function() {
    var overlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('closeBtn');

    // Exibe o overlay ao carregar a página
    overlay.style.display = 'flex';

    // Adiciona um evento de clique no botão de fechar
    closeBtn.onclick = function() {
        overlay.style.display = 'none';
    };
};


let products = [
    {
        id: 0,
        image: "https://static.fnac-static.com/multimedia/Images/PT/NR/4a/ae/8c/9219658/1540-1.jpg",
        product: "Barbie Edição Limitada",
        price: 250.0,
    },
    {
        id: 1,
        image: "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw582e5f22/images/col/796/7961337-cima.jpg?sw=2000&sh=2000",
        product: "Barbie Sapphire",
        price: 100.0,
    },
    {
        id: 2,
        image: "https://files.joguiba.com/images/ecommerce/MATFWV25.jpg",
        product: "Barbie Viajante",
        price: 99.0,
    },
    {
        id: 3,
        image: "https://www.centroxogo.pt/media/catalog/product/cache/b360a400a3def578629000afbc000986/h/l/hlc25_hlc25_op_22_117.jpg",
        product: "Barbie Bailarina",
        price: 100.0,
    },
    {
        id: 4,
        image: "https://www.centroxogo.pt/media/catalog/product/cache/f0df2b71b357b2ce4b5f7befdd363522/0/6/065HDJ36_1.jpg",
        product: "Barbie Sereia",
        price: 100.0,
    },
    {
        id: 5,
        image: "https://s1.kuantokusta.pt/img_upload/produtos_brinquedospuericultura/250352_3_mattel-barbie-bonecas-e-chelsea-com-cavalos-e-acessorios.jpg",
        product: "Barbie e o Cavalo",
        price: 180.0,
    },
];

// Função para mostrar um novo produto

function readProducts() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${product.image}" alt="Imagem do produto">
            <div class="card-container--info">
                <p>${product.product}</p>
                <div class="card-container--price">
                    <p>R$ ${product.price.toFixed(2)}</p>
                    <img class="trash" src="./src/images/trash.png" alt="Ícone do Lixo" onclick="deleteProduct(${product.id})">
                    <img class="edit" src="./src/images/pen.png" alt="Ícone de Edição" onclick="updateProduct(${product.id})">
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
}

// Função para criar um novo produto
function createProduct() {
    const form = document.getElementById("form-product");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const price = parseFloat(document.getElementById("price").value);
        const image = document.getElementById("image").value;
        if (name && price && image) {
            const newProduct = {
                id: products.length,
                image,
                product: name,
                price,
            };
            products.push(newProduct);
            readProducts();
            form.reset();
        } else {
            alert("Preencha todos os campos!");
        }
    });
}

// Função para deletar um produto
function deleteProduct(id) {
    if (confirm("Tem certeza que deseja excluir o produto?")) {
        products = products.filter((product) => product.id !== id);
        readProducts();
        if (products.length === 0) {
            alert("Nenhum produto encontrado!");
        }
    }
}

// Função para atualizar um produto
function updateProduct(id) {
    const product = products.find((product) => product.id === id);
    if (product) {
        const name = prompt("Novo nome do produto:", product.product);
        const price = parseFloat(prompt("Novo valor do produto:", product.price));
        const image = prompt("Nova imagem do produto:", product.image);
        if (name && price && image) {
            product.product = name;
            product.price = price;
            product.image = image;
            readProducts();
            alert("Produto atualizado com sucesso!");
        } else {
            alert("Preencha todos os campos!");
        }
    } else {
        alert("Produto não encontrado!");
    }
}

// Inicializar a leitura dos produtos
readProducts();

// Inicializar a criação de produtos
createProduct();
