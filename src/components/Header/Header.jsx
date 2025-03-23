import React from "react";
import HeaderCSS from "./Header.module.css";
import Hero from "../../../public/Hero.jpg";
import ActionButton from "../Utilis/ActionButton";
function Header() {
  return (
    <>
      <section id="home">
      <div className={HeaderCSS.circle1}></div>
      <div className={HeaderCSS.circle2}></div>
        <div className={HeaderCSS.hero}>
          <div className={HeaderCSS.hero_info}>
            <div className={HeaderCSS.box}>
              <div className={HeaderCSS.textAnimation}>
              <h1>
               <span>Hi,</span>
               <span>I</span>
               <span>Am</span>

                <span>Yash Deep Singh</span>
              </h1>

              <p>
              "I am a passionate web developer skilled in building dynamic, responsive, and user-friendly applications. With expertise in React, JavaScript, and modern UI/UX, I create seamless experiences."
              </p>

              <div className={HeaderCSS.social_icons}>
              <a href="https://www.instagram.com/yash_rana2917?igsh=cWptZ3dybDQ1N3Ru" target="_blank">
              <i className="fa-brands fa-instagram"></i>
              </a>
                <a href="https://www.linkedin.com/in/yash-deep-singh-17b012303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="icon">
                <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100048388841485" target="_blank"><i className="fa-brands fa-facebook"></i></a>
               <a href="https://github.com/whitenight6" target="_blank"> <i className="fa-brands fa-github"></i></a>
              </div>

              <div className={HeaderCSS.hero_btns}>
               <ActionButton type="hire" />
              <ActionButton type="contact" />  

              </div>
              </div>

              <div className={HeaderCSS.hero_img}>
              <img src={Hero} alt="Yash Deep Singh" />
            </div>
            </div>

           
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
