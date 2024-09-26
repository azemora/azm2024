import React from 'react';
import styles from "../style"; // make sure the path is correct for your styling

// Replace with your actual video source file path
const videoSource = "path_to_your_video.mp4"; 

// Sample clients array, replace with your actual client data
const clients = [
  { id: 1, logo: "path_to_client_logo1.png" },
  { id: 2, logo: "path_to_client_logo2.png" },
  // ...other clients
];

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Meet our <br className="sm:block hidden" /> clients.
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Enjoy our services, boosting your employees' skills. Take your company's operational efficiency to new heights, always with safety.
        </p>
      </div>
    </div>
    
    {/* Video Section */}
    <div className={`${styles.flexCenter} w-full my-4`}>
      <video controls style={{ width: '100%', borderRadius: '8px', maxHeight: '500px' }}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    {/* Clients Logos Section */}
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
            <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </div>
    </section>
  </section>
);

export default Testimonials;
