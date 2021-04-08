import Carousel from 'react-bootstrap/Carousel'
import ControlledCarousel from './ControlledCarousel'
function Home() {
    
return (
    
<header className="sans-serif">
    <div
    className="cover bg-left bg-center-l"
    style={{backgroundImage: "url(https://img.etimg.com/thumb/width-1200,height-900,imgsize-36428,resizemode-1,msid-69424429/small-biz/startups/newsbuzz/navia-life-care-launches-navi-voice-based-virtual-assistant-for-doctors.jpg)"}}
    >
        <div className="bg-black-80 pb5 pb6-m pb7-l">
            <div className="tc-l mt5-m ph3">
                <h1 className="f2 f1-l pa7 fw2 white-90 mb0 lh-title">
                Welcome to One Health System!
                </h1>
                <h2 className="fw1 f3 white-80 mt3 mb4">
                Get everything taken care of with our Virtual Assistant
                </h2>
                <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">
                Virtual Assistant
                </a>
                <span className="dib v-mid ph3 white-70 mb3">
                or
                </span>
                <a
                className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"
                href=""
                >
                Check Medi +
                </a>
            </div>
        </div>
    </div>
    

    {/* Cardsss */}
    

    <div className="row row-cols-1 row-cols-md-4 g-4 pa3">
        <div className="col">
            <div className="card h-100">
            <img src="https://ca-times.brightspotcdn.com/dims4/default/ae6c31a/2147483647/strip/true/crop/2048x1413+0+0/resize/840x580!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb1%2F8c%2F31c2c9db81c475a39018fae24c0f%2Fla-1543947916-p4eu2k4wd4-snap-image" className="card-img-top"  height="173" alt="dentist"/>
            <div className="card-body">
                <h5 className="card-title">Dentist</h5>
                <p className="card-text fw1">Teething troubles? Schedule a dental checkup</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <img src="https://www.centurymedicaldental.com/wp-content/uploads/2018/05/specialty-neurology.jpg" className="card-img-top" height="173" alt="Neurologist"/>
            <div className="card-body">
                <h5 className="card-title">Neurologist</h5>
                <p className="card-text fw1">Have migraine headaches? you should probably make an appointment with a neurologist</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <img src="http://www.gaba.org.nz/wp-content/uploads/2018/09/app1-2.jpg" class="card-img-top" height="173" alt="Dietician"/>
            <div className="card-body">
                <h5 className="card-title">Dietician/Nutrition</h5>
                <p className="card-text fw1">Get gudiance on eating right, weight management and sports nutrition</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <img src="https://www.amnhealthcare.com/uploadedImages/MainSite/Content/Staffing_Recruitment/stock%20photo_1.jpg" className="card-img-top" height="173" alt="Physician"/>
            <div className="card-body">
                <h5 className="card-title">General Physician</h5>
                <p className="card-text fw1">Find the right family doctor in your neighborhood</p>
            </div>
            </div>
        </div>
    </div>


    {/* Articles from health experts */}
    <div class="container-xxl">
        <div class="row pl6 pr3">
            <div class="col-sm-6 pa6">
                <h2>Read top articles from health experts</h2>
                <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
                <button className="btn btn-primary btn-lg">See all articles</button>
            </div>
            <div class="col-sm-6">
                <div class="row ma3">
                    <div class="col-6 col-sm-6">
                        <div className="card h-100">
                            <img src="https://www.pacificmedicalcenters.org/images/uploads/flu_and_cold_season.jpg" className="card-img-top" height="173" alt="Physician"/>
                            <div className="card-body">
                                <h5 className="card-title">A sniffle, a sneeze</h5>
                                <p className="card-text fw1">PacMed doctor explains the differences between the common cold and flu virus</p>
                                <p className="fw1">Dimple Sahay, MD</p>
                                <a href="https://www.pacificmedicalcenters.org/physician-articles/a-sniffle-a-sneeze-dimple-sahay"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-6">
                        <div className="card h-100">
                            <img src="https://www.pacificmedicalcenters.org/images/uploads/SpringAllergyArticle.jpg" className="card-img-top" height="173" alt="Physician"/>
                            <div className="card-body">
                                <h5 className="card-title">Controlling Allergies in Spring and Early Summer</h5>
                                <p className="card-text fw1">Springtime brings sunshine, green grass, chirping birds, blooming bulbs and if...</p>
                                <p className="fw1">Alexander M. Hamling, MD, MBA, FAAP </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* REVIEWS */}
        {/* <ControlledCarousel /> */}
        <div className="pa3">
            <h2 className="tc fw4 ">What our users have to say</h2>
            <Carousel className="pa2 bg-white"> 
                <Carousel.Item className="pa5 bg-white">
                    <Carousel.Caption className="pa1">
                    <h3 className="black-80 fw2">Really very great application</h3>
                    <p className="black-80">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  className="pa5 bg-white">
                    <Carousel.Caption className="pa1">
                    <h3 className="black-80 fw2">WOW, Wonderfulll!</h3>
                    <p className="black-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  className="pa5 bg-white">
                    <Carousel.Caption className="pa1">
                    <h3 className="black-80 fw2">TI get to learn a lot from this website!</h3>
                    <p className="black-80">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

</header>
);

}



export default Home;