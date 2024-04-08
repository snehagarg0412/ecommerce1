import "./home.css"
function Home()
{
    return(
        <div className="home">
            
    <section class="container-fluid">
        <div class="row">
            <div class="col-md-6 d-flex align-items-center justify-content-center bg-warning text-white p-5">
                <div>
                    <h1>Discover the Future With CoolGadgets!</h1>
                    <p class="mb-4"><em><br></br>one destination for premium product</em></p>
                    <a href="products.html" class="btn btn-light btn-lg">Shop Now &#10142;</a>
                </div>
            </div>
            <div class="col-md-6 banner-image"></div>
        </div>
    </section>
        </div>
    )
}
export default Home