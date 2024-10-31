"use client"; // Needed for Next.js components using hooks
import { useEffect } from "react";
import { motion,  useAnimation } from "framer-motion";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import image1 from"../../assests/ImageItem.jpg"
import image2 from "../../assests/ImageItem 2.jpg";
import image3 from "../..//assests/image3.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import {InstagramLogoIcon} from "@radix-ui/react-icons";
import logofull from "../../assests/Logo_full.png";
import AnimatedTitle from "@/components/Animatedtext";
import { useState , ChangeEvent  } from "react";
import { EmailFormschema, EmailFormschemaType } from "@/app/dashboard/blog/schema";
import { useForm } from "react-hook-form";
import { IEmaildetail } from "@/lib/types";
import { useTransition } from "react";
import {Form, FormControl , FormItem , FormField, FormMessage } from "@/components/ui/form";
export default function Home(
    {
        onHandleSubmit,
        defaultEmail,
      }: {
        defaultEmail: IEmaildetail;
        onHandleSubmit: (data: EmailFormschemaType) => void;
      }

) {
    const [isPending, startTransition] = useTransition();



  // Regular expression for email validation

  const form = useForm<EmailFormschemaType>({
    mode: "all",
    defaultValues: {
    email: defaultEmail?.email || "",
    
    },
  });

  const onSubmit = (data: EmailFormschemaType) => {
    console.log(data);
    startTransition(() => {
        onHandleSubmit(data);
      });

  };
  useEffect(() => {
    if (form.getValues().email) {
      form.setValue("created_at", new Date().toISOString().slice(0, 16));
    }
  }, [form.getValues().email]);
  
  const controls = useAnimation();
  

  // Run the intro fade-in and then animation sequence
  useEffect(() => {
    const sequence = async () => {
      // Start with low opacity
      await controls.start("faded");

      // Gradually increase opacity over iterations
      for (let i = 0; i < 3; i++) {
        // Select opacity level based on iteration
        const opacityVariant = i === 0 ? "faded" : i === 1 ? "lessVisible" : i === 2 ? "moreVisible" : "fullVisible";

        // Apply fade-out and fade-in at each opacity level
        await controls.start(opacityVariant);
        await controls.start("faded");
      }

      // End with full opacity
      controls.start("fullVisible");
    };

    sequence();
  }, [controls]);

  return (
    <div className="relative min-h-screen bg-white text-gray-800">
      <Analytics />
      <div>
        <main className="text-center md:py-10 py-2 px-4 md:px-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className=" text-[20px] pt-[6px] md:pt-[2px] pl-[10px]  gilroy_medium md:text-[38px] "
          >
            Your Dream Home Awaits
          </motion.h1>

          <div className="text-[40px] md:text-[130px] font-gilroy_bold text-shadow-lg  text-black">


          <AnimatedTitle />

          </div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-[#403D3D] font-gilroy  md:text-[25px]  text-sm md:font-[28px]  pt-[35px]"
          >
            "Stay tuned for the ultimate property search experience"
          </motion.p>

          {/* Email Input */}
<Form  {...form}>

    <form 
     onSubmit={form.handleSubmit(onSubmit)}>
          <div className="pt-[55px]  md:pl-[16px] ">

    <div className="md:w-[800px] w-[350px] md:mt-[10px] py-1  px-1 mx-auto border border-[#7A7979] rounded-full flex items-center     ">

    <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <div className="justify-between">
                        <Input
                          placeholder="Enter your email address"
                          {...field}
                          type="email"
                          className=" md:w-[550px] bg-white  placeholder-black md:text-[21px] text-[12px] font-gilroy  text-black  mx-4 border-none md:my-2 md:py-[18px] py-1"
                        />
                      </div>
                    </FormControl>

                    {form.getFieldState("email").invalid &&
                    form.getValues().email && (
                      <div className="text-red-400">
                        <FormMessage />
                      </div>
                    )}
                  </FormItem>
                );
              }}
            />

              <Button
               role="button"
               type="submit"
               disabled={!form.formState.isValid}
              className="bg-[#4C2B21] font-gilroy hover:shadow-xl shadow-gray-700    ml-[84px]  text-[8px]  md:text-[24px]  text-white py-2 md:py-[25px] rounded-full hover:bg-brown-800">
                
                <p className="font-gilroy text-[11px] md:text-[20px]">

                Notify Me

                </p>
              </Button>
            </div>
          </div>



    </form>


</Form>





    

          <div id="calling" className=" pt-[55px] md:pl-[6px] cursor-pointer hover:text-[#4C2B21]  mb-[15px]">
<div className="md:w-[732px] hover:shadow-lg shadow-gray-700  w-[300px] h-[43px] md:h-[83px] md:pl-[135px] justify-center md:pr-[173px] pt-[26px] pb-[21px] bg-[#f6f4f4] rounded-[19px] items-center inline-flex">
<div className="text-[#2d2c2c] md:pl-[13px] md:text-2xl text-[12px] font-normal font-gilroy_medium">Call/WhatsApp us at +91 9873344942 </div>
</div>
          </div>
        </main>
      </div>

        {/* Section with Villas */}
        <section className="px-[28px] py-4 text-center md:mt-[60px] pt-[85px] pb-[50px] md:px-20 bg-[#FBF8F4] ">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-5xl font-gilroy_medium mb-[44px]"
          >
            Luxury Living in the Heart of Goa
          </motion.h2>
          <p className="max-w-xl md:text-xl  text-[14px] font-gilroy mx-auto mb-[52px] text-gray-600">
            Discover the perfect blend of modern comforts and tropical charm at
            Goa Villas. Our premium villas are designed to provide you with an
            unparalleled living experience.
          </p>

          {/* Villa Images */}
            <div className="grid grid-cols-1 justify-center md:mb-[40px] items-center sm:grid-cols-2 md:grid-cols-3 gap-8 md:ml-[54px]">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className=" "
            >
              <Image
                src={image1}
                alt="Villa 1"
                width={368}
                height={724}
                className=""
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative "
            >
              <Image
                src={image2}
                alt="Villa 2"
                width={368}
                height={724}
                className="object-cover"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden "
            >
              <Image
                src={image3}
                alt="Villa 3"
                width={368}
                height={724}
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>



    <footer className="bg-[#FBF8F4] md:px-[120px] py-10 border-t border-gray-300">
  <div className="container mx-auto flex  flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
    <div className="flex  md:text-xl justify-center items-center gap-1 text-lg   *:
    ">
      <span className="font-semibold md:ml-[15px] md:text-xl text-black">Follow us on -</span>
      <a  className=" md:text-2xl "href="https://www.instagram.com/homefinderr.in?igsh=MXo4eHc4Z200OXJ4&utm_source=qr" target="_blank" rel="noopener noreferrer">
      <InstagramLogoIcon width={25} height={25}   />
      </a>
      <a className=" md:text-2xl " href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <LinkedInLogoIcon  width={25} height={25}  />
      </a>
    </div>

    <div className="text-black md:text-xl  md:pr-[10px] md:mb-[12px] text-center ">
      <span className="font-semibold md:pl-[50px]  ">Need Support ? -</span>
      <a  href="mailto:Care@Homefinderr.com" className= "md:text-xl ml-2">
        Care@Homefinderr.com
      </a>
    </div>
  </div>



  
</footer>


<div className="flex border-t px-[25px] md:pl-[105px]  md:px-[90px] md:pb-[20px] md:pt-[20px] bg-[#FBF8F4] justify-between">


<div className="">
<Image width={180} height={180} src={logofull} alt="logo">

</Image>
  </div>  
<div className=" bg-[#FBF8F4]  text-[8px]  pt-[44px]   md:pr-[36px] pr-[16px] md:text-sm    md:px-[86px] border-gray-300 md:pt-10  text-[#3F3E3E] ">
    Homefinderr©copyright2024 All Rights Reserved.
  </div>


</div>





    </div>
  );
}
