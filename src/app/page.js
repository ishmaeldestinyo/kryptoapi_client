import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import FeeStructureTable from '@/components/PlanPricingComponent'
import { faFileInvoice, faMicroscope, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {

  const coreServices = [
    {
      title: "Payment As a Service",
      api_docs: "https://documenter.getpostman.com/view/38937255/2sAXxWbVfm",
      image_path: "/images/payment.png",
      descr: (
        <div className='text-base text-gray-600'>
          With our advanced features like offline crypto payments, QR code payment, <Link href={"https://documenter.getpostman.com/view/38937255/2sAXxY2TTv"} className='text-blue-500'>transactions</Link>, payment links, invoice payments, and escrow services, KryptoAPI ensures secure and efficient payment processing. We&apos;re committed to helping businesses manage crypto payments seamlessly, offering a scalable solution that grows with your needs.
        </div>
      )
    },
    {
      title: "Fraud As a Service",
      api_docs: "https://documenter.getpostman.com/view/38937255/2sAXxY2TYG",
      image_path: "/images/fraud-detection.png",
      descr: (
        <div className='text-base text-gray-600'>
          We detect and prevent fraud by analyzing blockchain transactions, monitoring for suspicious patterns, and utilizing machine learning for real-time alerts. Our system safeguards against wash trading, pump-and-dump schemes, and counterfeit assets, ensuring your business operates securely in an ever-evolving digital landscape.
        </div>
      )
    },
   
    {
      title: "Wallet As a Service",
      api_docs: "https://documenter.getpostman.com/view/38937255/2sAXxY2TYE",
      image_path: "/images/wallet.png",
      descr: (
        <div className='text-base text-gray-600'>
          Our wallet endpoint, allows trusted partners to integrate our wallet management such as creation of wallets, seamless funding, withdrawal, and the ability to freeze and unfreeze wallets.
        </div>
      )
    },
    
    {
      title: "Transaction Management",
      api_docs: "https://documenter.getpostman.com/view/38937255/2sAXxY2TTv",
      image_path: "/images/payment.png",
      descr: (
        <div className='text-base text-gray-600'>
          With our transaction endpoint, you can query offline crypto payments, QR code payment, payment links, invoice payments, and escrow services transaction details at all levels.
        </div>
      )
    },

  ];


  return (
    <div>
      <Navbar />
      <main>
        <div className='md:flex md:w-4/5 gap-5 md:gap-6 md:p-12 p-6 mx-auto'>

          <div className='md:w-3/5'>
            <h1 className='text-2xl md:text-5xl text-gray-900 font-semibold'>Limitless Crypto API Engine for Businesses</h1>
            <h3 className='text-base mt-3'>An Optimized crypto API engine offering a comprehensive suite of services, including fraud detection, wallet-as-a-service, and payment-as-a-service.</h3>

            <div className='my-2'>
              <Image src={"/images/3line.webp"} priority className='my-3' width={160} height={15} alt='Liner' />

              <h3 className='text-base'>
                Explore our endless Crypto APIs create account and ship your product at-easy
              </h3>

            </div>
          </div>

          <div className='md:w-2/5'>
            <Image src={"/images/hero-wallpaper.png"} alt='hero-wallpaper' width={400} height={400} />
          </div>
        </div>

        <div className='md:mt-12 md:grid md:w-4/5 md:p-0 p-5 mx-auto grid-cols-12 gap-6 md:gap-10'>
          <div className='col-span-5 md:block hidden'>
            <Image src={"/images/solutions.png"} width={400} height={400} />

          </div>
          <div className='col-span-7'>
            <h2 className='text-lg md:text-xl text-[#2299fb]'>Our Services</h2>
            <Image src={"/images/3line.webp"} priority className='md:my-3 my-1' width={160} height={15} alt='Liner' />

            <div className='p-3 text-base leading-[2]'>
              We support multi-chain payments across <Link href={"/supported-networks"}>multiple blockchain</Link> and provide advanced features like offline transactions, QR code payments, payment links, and escrow services. At KryptoAPI, we&apos;re dedicated to streamlining secure crypto payments and simplifying digital business operations, making us your trusted partner for seamless and scalable transaction management.
            </div>
          </div>
        </div>

        <div id='services' className='md:w-4/5 md:mt-12 mx-auto gap-5 md:p-0 p-5  md:grid grid-cols-12'>
          {
            coreServices.map((service, key) => (
              <div className={`col-span-4 shadow-sm p-4 md:mt-0 ${key <= 1 ? 'mt-3': 'mt-5'} flex flex-col relative group transition-transform duration-300 hover:scale-105`} key={key}>
                <div className='relative h-48 w-full'>
                  <Image
                    src={service.image_path}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="absolute rounded-3xl inset-0 transition-all duration-300"
                  />
                  {/* Button container */}
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-50 rounded-3xl z-50'>
                    <a href={service.api_docs} target='_blank' className="text-white font-semibold py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 transition duration-200">
                      View API Docs
                    </a>
                  </div>
                </div>
                <h2 className='my-4 md:pl-4 text-base text-blue-700 font-semibold'>{service.title}</h2>
                <div className=''>{service.descr}</div>

                {/* Lightning effect */}
                <div className='absolute inset-0 rounded-3xl bg-whitesmoke opacity-0 group-hover:opacity-30 transition-opacity duration-300'></div>
              </div>
            ))
          }
        </div>

        <div id='pricing' className='md:mt-12 md:w-4/5 mx-auto md:p-0 p-6 '>
          <h2 className='text-lg md:text-xl text-[#2299fb]'>Pricing &amp; Plan</h2>
          <Image src={"/images/3line.webp"} priority className='my-3' width={160} height={15} alt='Liner' />
          <FeeStructureTable />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default page