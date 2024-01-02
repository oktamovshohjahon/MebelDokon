import Logo from "../../assets/images/logo-dark.jpg";

function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero-information">
        <h1 className="title">Mebel oling va soting !</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          autem, accusantium ut voluptates voluptatibus dolorum aliquam
          assumenda a modi, doloremque fuga eveniet eius placeat. Explicabo
          eaque assumenda debitis cum nostrum. Non quae laudantium fuga
          reprehenderit dolorem! Illum voluptate, adipisci pariatur non itaque
          ullam sunt molestias eaque tenetur voluptas possimus quam debitis
          quasi nostrum eum nihil odit minus cum. Ipsa, nisi vel. Unde dicta
          quidem, esse vel quaerat molestiae deserunt, adipisci hic quia neque
          eius fuga nam dolore deleniti assumenda illum debitis fugit soluta
          voluptatum dolor enim amet maiores, beatae inventore! Iusto at quae
          dolorum dignissimos ipsum facere, accusamus repudiandae earum.
        </p>
      </div>
      <div className="hero-image">
        <img
          src={Logo}
          width={"300px"}
          height={"300px"}
          style={{ borderRadius: "20px" }}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
