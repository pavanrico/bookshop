import React from 'react'
import Navbar from './navbar/Navbar'
import '../App.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const Home = () => {
  const id = sessionStorage.getItem('username');

  
  
  
  
  const buy = async (pname, price, pid) => {
    if (!id) {
      Swal.fire({
        title: 'Login',
        icon: 'warning',
        text: 'You need to login to proceed with the purchase',
        timer: 2000,
      });
      navigate('/login');
      return;
    }
    
  const data = {
    id, 
    ProductName: pname, 
    ProductPrice: price, 
    ProductID: pid, 
    ProductQuantity: 1
  };

  try {
    const resp = await axios.post(`https://ecom-e06dd-default-rtdb.firebaseio.com/Buy/.json`, data);
    navigate(`/CheckOut/${pid}`);
  } catch (error) {
    console.error("Error uploading purchase data:", error);
  }
};
                                              
    const Card = (props) => {
        return(
        <div className="card cards " style={{width:'15rem', height:'18rem'}}>
          <img src={props.img} className="card-img-top cardimg m-2" style={{width:'90%', height:'40%'}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">${props.ProductPrice}</p>
                <div className="d-flex mt-3  justify-content-around">
                <button onClick={()=>buy(props.Productname, props.Productprice,props.id) } className="btn btn-primary ">Buy Now</button>
             </div>
          </div>
        </div>
        )
      };

  return (
    <>
    <div className='home'>
      <Navbar/>
      <div className="h">
        <div className="hgird">
             <h4 style={{color:'purple'}}>Welcome To</h4>
             <h2 style={{marginLeft:'15px'}}> Pavan's Book shop</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum perferendis nesciunt maxime consectetur nostrum, vero asperiores sunt ea repellendus enim sapiente deserunt voluptates quaerat similique tempora! Deserunt praesentium rem voluptas!</p>
             <Link to='product' className='hbtn'> Lets Shop</Link>
        </div>
        <div className="hgrid">
            <img src="https://th.bing.com/th/id/OIP.zGVPqiYhrWe62V6YukbxFAHaEK?rs=1&pid=ImgDetMain" alt="book image" />
        </div>
      </div>
    </div>
    <div className="mid">
      
        <div className="mgrid">
            <img src="https://www.babelio.com/users/AVT_Arnold-Lobel_9032.jpg" alt="author pic" />
        </div>
        <div className="mgrid">
            <h3>“Books to the ceiling, Books to the sky, My pile of books is a mile high. How I love them! How I need them! I’ll have a long beard by the time I read them.” - Arnold Lobel</h3>
        </div>
    </div>
    <div style={{height:'500px'}} >
        <h6 style={{ textAlign: "center", marginTop: "10px" }}>
          
          HERE CHECK OUT
        </h6>
        <h1>Our Feature Products</h1>
        <Card id='1'  img="https://covers.audiobooks.com/images/covers/full/9781664930568.jpg" name='Autobiography of a Yogi' ProductPrice="270" />
        {/* <Card id='1'  img="https://covers.audiobooks.com/images/covers/full/9781664930568.jpg" name='Autobiography of a Yogi' ProductPrice="270" /> */}

        
        <Link to="/Product"  className="btnn2 ">
          See all Products
        </Link>
      </div>
      <footer style={{backgroundColor:'#07274f', display:'flex',width:'100%' ,height:'450px',justifyContent:'center'}}>
      <div className="footer">

      <div className="fgrid">
        <h5>pavan's shop</h5>
      </div>
      <div className="fgrid">
        <h5>Follow</h5>
      </div>
      <div className="fgrid">
        <h5> contact</h5>
      </div>
      <div className="fgrid">
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquid at officia fugiat consequatur accusantium libero! Debitis, magnam libero.</h5>
      </div>
      <div className="fgrid">
       <Link to="https://www.instagram.com/pavan_rico_/" ><i className="fa-brands fa-instagram "></i></Link>
       <Link >
       <i className="fa-brands ms-3 fa-linkedin"></i></Link>
      </div>
      <div className="fgrid">
        <p>8951624935</p>
        <p>pavanrico5@gmail.com</p>
      </div>
      <hr /><hr /><hr />
      <div className="fgrid">
        <p>© 2024 Pavan cart. All rights reserved.</p>
      </div>
      <div className="fgrid">
      <p>Privacy Policy</p>
      <p>terms and conditions</p>
      </div>
     
      </div>

     </footer>

    </>
  )
}

export default Home
