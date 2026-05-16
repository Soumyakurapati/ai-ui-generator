async function generateUI(){

  const prompt =
  document.getElementById("prompt").value;

  const output =
  document.getElementById("output");

  output.innerHTML =
  "Generating AI Website...";

  try{

    const response =
    await fetch("/api/generate", {

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({
        prompt
      })

    });

    const data =
    await response.json();

    console.log(data);

    output.innerHTML = `

    <div class="dashboard">

      <nav class="navbar">

        <h1>Luxury Fashion</h1>

        <div class="nav-links">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Collections</a>
          <a href="#">Contact</a>
        </div>

      </nav>

      <section class="hero">

        <div class="hero-text">

          <h2>Discover Luxury Fashion</h2>

          <p>
          Explore premium styles and futuristic fashion trends.
          </p>

          <button>Shop Now</button>

        </div>

        <img src="
https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600">

      </section>

      <h2 class="section-title">
        Featured Products
      </h2>

      <div class="shop-container">

        <div class="product-card">

          <img src="
https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800">

          <h2>Luxury Black Jacket</h2>

          <p>$99.99</p>

          <button>Buy Now</button>

        </div>

        <div class="product-card">

          <img src="
https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800">

          <h2>Modern Streetwear</h2>

          <p>$149.99</p>

          <button>Buy Now</button>

        </div>

        <div class="product-card">

          <img src="
https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800">

          <h2>Premium Fashion Dress</h2>

          <p>$199.99</p>

          <button>Buy Now</button>

        </div>

      </div>

    </div>

    `;

  }

  catch(error){

    console.log(error);

    output.innerHTML =
    "Something went wrong.";

  }

}




