import './App.css';
import React,{Component} from "react"
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg"

class App extends Component{

  render(){
    return (
    <div className="App">
<div id="navbar">
  <a className="active" href="javascript:void(0)">TourGarh</a>
</div>
     <div className="container">
  <div  className="anime-writer">
          <p className="text-uppercase heading">Welcome to Chhattisgarh</p>
          <p className="text-uppercase">The place of Nature, History and Art.</p>
        </div>
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">

      <div className="item active">
        <img src="./images/1.jpg" alt="cgpics" />
      </div>
      <div className="item">
        <img src="./images/2.jpg" alt="cgpics" />
      </div>
      <div className="item">
        <img src="./images/3.jpg" alt="cgpics" />
      </div>
      <div className="item">
        <img src="./images/4.jpg" alt="cgpics" />
      </div>
      <div className="item">
        <img src="./images/5.jpg" alt="cgpics" />
      </div>
  
    </div>

    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
<div className="row"> 
  <div className="column">
    <img src="./images/1.jpg" alt="cgpics" />
    <img src="./images/2.jpg" alt="cgpics" />
    <img src="./images/3.jpg" alt="cgpics" />
    <img src="./images/4.jpg" alt="cgpics" />
    <img src="./images/5.jpg" alt="cgpics" />
  </div>
  <div className="column">
    <img src="./images/7.jpg" alt="cgpics" />
    <img src="./images/8.jpg" alt="cgpics" />
    <img src="./images/9.jpg" alt="cgpics" />
    <img src="./images/10.jpg" alt="cgpics" />
    <img src="./images/11.jpg" alt="cgpics" />
  </div>  
  <div className="column">
    <img src="./images/13.jpg" alt="cgpics" />
    <img src="./images/14.jpg" alt="cgpics" />
    <img src="./images/15.jpg" alt="cgpics" />
    <img src="./images/16.jpg" alt="cgpics" />
    <img src="./images/17.jpg" alt="cgpics" />
  </div>
  <div className="column">
    <img src="./images/6.jpg" alt="cgpics" />
    <img src="./images/12.jpg" alt="cgpics" />
    <img src="./images/18.jpg" alt="cgpics" />
    <img src="./images/19.jpg" alt="cgpics" />
    <img src="./images/20.jpg" alt="cgpics" />
  </div>
</div>
<div className="container-fluid position-relative box">
          <h1 className="heading">Hi, Nice to meet you.</h1>
          <p>We would like you to thank you to start an amazing journey with us, TourGarh is an initiative to boost travel and tourism in Chhattisgarh. Chhattisgarh is filled with hidden treasures from waterfalls to mountains, Chhattisgarh got it all. TourGarh is a guide for you to let you discover the treasures. The state is full of ancient monuments, rare wildlife, exquisitely carved temples, Buddhist sites, palaces, waterfalls, caves, rock paintings, and hill plateaus. There are many waterfalls, hot springs, caves, temples, dams and national parks, tiger reserves and wildlife sanctuaries in Chhattisgarh. India's first man-made jungle safari is also situated in Raipur.</p>
    </div>
     <div className="container-fluid position-relative box" style={{background: 'rgba(1,1,1,0.2)'}}>
          <h1 className="heading">Travelling, Learning and Living.</h1>
          <p >Connect with  Us</p>
          <div>
          <a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
          <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
          <a href=""><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
          <a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="mailto:"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
          </div>
          <p >Crafted by Us <i className="fa fa-copyright" aria-hidden="true"></i> TourGarh</p>

    </div>
    </div>
  );
}
}
export default App;
