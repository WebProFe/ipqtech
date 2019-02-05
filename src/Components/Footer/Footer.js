import React, { Component } from "react";
import footer_image1 from '../../Images/footer_image1.png';


export default class Header extends Component {
   render() {
      return (
         <footer class="container-fluid">
            <div class="container">
               <div class="row">
                  <div class="col-3">
                     <img src={footer_image1} alt=""/>
                  </div>
                  <div class="col-3">
                     <p><a href="">Lorem Ipsum</a></p>
                     <p><a href="">Lorem Ipsum</a></p>
                     <p><a href="">Lorem Ipsum</a></p>
                     <p><a href="">Lorem Ipsum</a></p>
                  </div>
                  <div class="col-3">
                     <p><a href="">Lorem Ipsum</a></p>
                     <p><a href="">Lorem Ipsum</a></p>
                     <p><a href="">Lorem Ipsum</a></p>
                     <p><a href="">Lorem Ipsum</a></p>
                  </div>
                  <div class="col-3">
                     <h3>Newsletter Subsrciption</h3>
                     <form class="form-inline">
                        <div class="form-group">
                           <input type="text" class="form-control" placeholder="email address"/>
                        </div>
                        <a href="#" class="btn btn-outline-info">Submit</a>
                     </form>
                  </div>
               </div>
               <div class="row text-center">
                  <div class="col-12">
                     <p>Copyright &#9400; All Rights Reserved 2019 | Design & Development by IPQtech LLC</p>
                  </div>
               </div>
            </div>
         </footer>
      )
   }
}
