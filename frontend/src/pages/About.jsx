import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center md:w-2/4 gap-6 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            ullam quos, inventore aperiam consectetur adipisci nisi fuga illum
            consequuntur dolores iusto expedita nobis possimus accusantium earum
            eum rerum dolorem explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, animi
            repellat reprehenderit tempore corrupti, incidunt nihil temporibus
            assumenda ducimus eaque totam dolore hic cum magni iste cumque
            blanditiis? Numquam, error?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolore
            tenetur provident, doloribus dolorum fugit explicabo voluptate
            debitis maiores vel quasi molestias dignissimos facere similique
            ipsam exercitationem, voluptatem qui necessitatibus.
          </p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOS US"} />
      </div>
      <div className="flex flex-row md:flex-row mb-20 text-sm mb20">
        <div className="border px-10 md:px-16 py-16 sm:py-20 flex flex-col gap-5">
          <b>Quality assuarance:</b>
          <p className="text-gary-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            molestiae dolores nisi numquam quidem magni modi sit asperiores quas
            animi, earum perferendis voluptates nobis beatae incidunt ipsum
            saepe nihil sapiente!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-16 sm:py-10 flex flex-col gap-5">
          <b>Conveniance:</b>
          <p className="text-gary-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            molestiae dolores nisi numquam quidem magni modi sit asperiores quas
            animi, earum perferendis voluptates nobis beatae incidunt ipsum
            saepe nihil sapiente!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-16 sm:py-20 flex flex-col gap-5">
          <b>Exception CustomerService:</b>
          <p className="text-gary-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            molestiae dolores nisi numquam quidem magni modi sit asperiores quas
            animi, earum perferendis voluptates nobis beatae incidunt ipsum
            saepe nihil sapiente!
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
