import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const layout = (title, metaDesc, content, pathStr, schemaStr) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${metaDesc}">
    <link rel="stylesheet" href="/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    ${schemaStr ? `<script type="application/ld+json">\n${schemaStr}\n</script>` : ''}
</head>
<body>
    <header class="site-header">
        <div class="container header-inner">
            <a href="/" class="logo"><img src="https://assets.cdn.filesafe.space/gGtmQYvc0s6yNrsidLE4/media/69ca6cf423b082470f691cb7.svg" alt="Swiftclean Ladies" style="max-height: 50px;"></a>
            <nav class="main-nav">
                <a href="/" class="${pathStr === '/' ? 'active' : ''}">Home</a>
                <a href="/about.html" class="${pathStr === '/about.html' ? 'active' : ''}">About</a>
                <a href="/services.html" class="${pathStr === '/services.html' ? 'active' : ''}">Services</a>
                <a href="/faq.html" class="${pathStr === '/faq.html' ? 'active' : ''}">FAQ</a>
                <a href="/contact.html" class="${pathStr === '/contact.html' ? 'active' : ''}">Contact</a>
            </nav>
            <div class="header-actions">
                <span class="phone">(850) 815-6998</span>
                <a href="/booking.html" class="btn btn-primary">Book Now</a>
            </div>
        </div>
    </header>

    <main class="main-content">
        ${content}
    </main>

    <div class="global-cta">
        <div class="container text-center">
            <h2>Refresh Your Space with Our Committed Cleaning Professionals</h2>
            <p>Let Swiftclean Ladies help you enjoy a cleaner, healthier, more organized space.</p>
            <a href="/booking.html" class="btn btn-primary mt-4">Book Now</a>
        </div>
    </div>

    <footer class="site-footer">
        <div class="container footer-grid">
            <div class="footer-col brand-col">
                <h3>Swiftclean Ladies</h3>
                <p>117 Allen Harvey ST<br>Crawfordville, FL 32327</p>
                <p><a href="tel:8508156998">(850) 815-6998</a></p>
                <p><a href="mailto:swift.clean25@gmail.com">swift.clean25@gmail.com</a></p>
                <p class="mt-4">Serving Crawfordville, Saint Marks, and Panacea, FL</p>
            </div>
            <div class="footer-col nav-col">
                <h4>Navigation</h4>
                <a href="/">Home</a>
                <a href="/about.html">About</a>
                <a href="/services.html">Services</a>
                <a href="/faq.html">FAQ</a>
                <a href="/contact.html">Contact</a>
                <a href="/booking.html">Book Now</a>
            </div>
            <div class="footer-col nav-col">
                <h4>Services</h4>
                <a href="/recurring-cleaning.html">Recurring Cleaning</a>
                <a href="/one-time-cleaning.html">One-Time Cleaning</a>
                <a href="/deep-cleaning.html">Deep Cleaning</a>
                <a href="/commercial-cleaning.html">Commercial Cleaning</a>
                <a href="/organizational-services.html">Organizational Services</a>
            </div>
            <div class="footer-col nav-col">
                <h4>Legal</h4>
                <a href="/privacy-policy.html">Privacy Policy</a>
                <a href="/terms-conditions.html">Terms & Conditions</a>
            </div>
        </div>
        <div class="container footer-bottom">
            <p>&copy; 2026 Swiftclean Ladies. All Rights Reserved.</p>
        </div>
    </footer>
</body>
</html>`;

const pages = [
  {
    path: 'index.html',
    title: 'Professional Cleaning Services in Crawfordville, FL | Swiftclean Ladies',
    meta: 'Swiftclean Ladies provides residential, commercial, deep cleaning, recurring cleaning, one-time cleaning, and organizational services in Crawfordville, Saint Marks, and Panacea, FL.',
    content: `
      <section class="hero-bg" style="background-image: url('/images/hero-banner.png');">
        <div class="container text-left max-w-5xl text-white">
            <h1 style="color: white; font-size: 4.5rem; letter-spacing: -0.02em; margin-bottom: 1.5rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">Professional Cleaning Services <br>in Crawfordville, FL</h1>
            <p class="lead" style="color: rgba(255,255,255,0.9); font-size: 1.5rem; font-weight: 300; max-width: 800px; margin-bottom: 2rem; text-shadow: 0 1px 3px rgba(0,0,0,0.5);">Swiftclean Ladies delivers dependable, detail-focused cleaning services for homes, offices, and new house developments in Crawfordville, Saint Marks, and Panacea, FL.</p>
            <div class="hero-actions">
               <a href="/booking.html" class="btn btn-primary" style="padding: 1rem 2rem; font-size: 1.1rem;">Book Now</a>
               <a href="/contact.html" class="btn btn-outline text-white" style="border-color: white; color: white; padding: 1rem 2rem; font-size: 1.1rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(4px);">Get a Free Quote</a>
            </div>
        </div>
      </section>

      <section class="after-work-gallery default-padding bg-light text-center">
        <div class="container max-w-4xl">
           <h2>See the Swiftclean Difference</h2>
           <p>Immaculate results from our professional cleaning services</p>
           <div class="grid grid-2 mt-8">
               <img src="https://assets.cdn.filesafe.space/gGtmQYvc0s6yNrsidLE4/media/69ca6cf40c5c8932a1b48df7.jpg" alt="After work - spotless clean" class="b-radius shadow-md w-full">
               <img src="https://assets.cdn.filesafe.space/gGtmQYvc0s6yNrsidLE4/media/69ca6cf4b862d7cf581f019f.jpg" alt="After work - perfect shine" class="b-radius shadow-md w-full">
           </div>
        </div>
      </section>

      <section class="intro py-12 bg-light">
          <div class="container text-center max-w-3xl">
              <h2>A Cleaner Space. A Better Routine.</h2>
              <p>At Swiftclean Ladies, we believe a clean and organized environment makes everyday life easier. Our professional team is committed to quality, consistency, and personalized service. We work closely with each client to deliver cleaning solutions that fit their home, business, schedule, and priorities.</p>
              <p>From routine home cleaning to deep cleaning and organization, we help you enjoy a cleaner, healthier, and more comfortable space.</p>
          </div>
      </section>

      <section class="services-overview default-padding">
        <div class="container text-center">
          <h2>Our Services</h2>
          <div class="grid grid-3">
            <div class="card service-card">
              <h3>Recurring Cleaning</h3>
              <p>Keep your home consistently clean with flexible recurring service plans. We clean key areas thoroughly and can tailor each visit to fit your needs.</p>
              <a href="/recurring-cleaning.html" class="btn btn-outline text-sm">Learn More</a>
            </div>
            <div class="card service-card">
              <h3>One-Time Cleaning</h3>
              <p>Our one-time cleaning service offers a flexible option for clients who want a customized clean without an ongoing schedule.</p>
              <a href="/one-time-cleaning.html" class="btn btn-outline text-sm">Learn More</a>
            </div>
            <div class="card service-card">
              <h3>Deep Cleaning</h3>
              <p>Remove built-up dirt and grime, refresh overlooked areas, and give your home a strong foundation for ongoing maintenance.</p>
              <a href="/deep-cleaning.html" class="btn btn-outline text-sm">Learn More</a>
            </div>
            <div class="card service-card">
              <h3>Commercial Cleaning</h3>
              <p>Cleaning for business offices and new house developments, helping maintain professional, polished, move-in-ready spaces.</p>
              <a href="/commercial-cleaning.html" class="btn btn-outline text-sm">Learn More</a>
            </div>
            <div class="card service-card">
              <h3>Organizational Services</h3>
              <p>Create calm, clutter-free spaces with personalized organization for closets, pantries, home offices, garages, and storage areas.</p>
              <a href="/organizational-services.html" class="btn btn-outline text-sm">Learn More</a>
            </div>
          </div>
          <div class="mt-8">
             <a href="/services.html" class="btn btn-secondary">Explore All Services</a>
          </div>
        </div>
      </section>

      <section class="why-choose-us default-padding bg-light">
          <div class="container max-w-4xl text-center">
              <h2>Why Choose Swiftclean Ladies</h2>
              <div class="grid grid-2 mt-8 text-left">
                  <div class="list-card">
                      <h4>✔️ Reliable, Professional Service</h4>
                      <p>We are committed to delivering dependable service with strong attention to detail and consistent results.</p>
                  </div>
                  <div class="list-card">
                      <h4>✔️ Customized Cleaning Plans</h4>
                      <p>Every home and business is different. We tailor our cleaning and organizational services to match your goals and priorities.</p>
                  </div>
                  <div class="list-card">
                      <h4>✔️ Residential and Commercial Experience</h4>
                      <p>We serve both homeowners and businesses with a range of services designed for everyday maintenance.</p>
                  </div>
                  <div class="list-card">
                      <h4>✔️ Licensed, Bonded, and Insured</h4>
                      <p>We are fully licensed, bonded, and insured, giving you peace of mind with every cleaning session.</p>
                  </div>
              </div>
          </div>
      </section>

      <section class="service-area text-center py-12">
          <div class="container">
              <h2>Areas We Serve</h2>
              <p class="lead mt-4">Swiftclean Ladies proudly serves:</p>
              <div class="flex-center gap-4 mt-4 text-primary font-bold custom-tags">
                  <span class="tag">Crawfordville, FL</span>
                  <span class="tag">Saint Marks, FL</span>
                  <span class="tag">Panacea, FL</span>
              </div>
          </div>
      </section>

      <section class="testimonials py-12 bg-primary text-white">
          <div class="container max-w-5xl text-center">
              <h2>What Our Customers Say</h2>
              <div class="grid grid-3 mt-8">
                  <div class="testimonial-card">
                      <p>“Their attention to detail is unmatched, and their team is both professional and friendly. I couldn’t be happier with their service.”</p>
                      <strong>— Carolyn James</strong>
                  </div>
                  <div class="testimonial-card">
                      <p>“They consistently deliver exceptional results and go above and beyond to ensure everything is perfect.”</p>
                      <strong>— Sarah T</strong>
                  </div>
                  <div class="testimonial-card">
                      <p>“The space looks immaculate, and their service is reliable and efficient.”</p>
                      <strong>— Emily Saints</strong>
                  </div>
              </div>
          </div>
      </section>
    `
  },
  {
    path: 'about.html',
    title: 'About Swiftclean Ladies | Trusted Cleaning Professionals in Crawfordville, FL',
    meta: 'Learn more about Swiftclean Ladies, a Crawfordville-based cleaning company providing residential, commercial, deep cleaning, and organizational services.',
    content: `
      <section class="hero text-center hero-sm">
        <div class="container">
          <h1>About Swiftclean Ladies</h1>
          <p class="lead">Crawfordville’s Trusted Cleaning Professionals</p>
        </div>
      </section>
      
      <section class="default-padding text-content max-w-3xl center-block">
        <p>Swiftclean Ladies is a professional cleaning company based in Crawfordville, Florida, serving local homes, businesses, and new house development projects with reliable cleaning and organizational services. We are dedicated to providing quality work, personalized service, and a consistently clean, welcoming environment for every client.</p>
        <p><strong>Our mission is simple: to make homes and workplaces cleaner, healthier, more comfortable, and easier to manage.</strong></p>
        
        <hr class="spacer">
        
        <h2>Our Approach</h2>
        <p>At Swiftclean Ladies, we focus on more than surface-level results. We believe excellent cleaning service comes from:</p>
        <ul class="styled-list">
            <li>Careful attention to detail</li>
            <li>Consistent quality</li>
            <li>Professionalism</li>
            <li>Clear communication</li>
            <li>Customized service plans</li>
        </ul>
        <p>We work to understand what matters most to each client so we can deliver cleaning and organization solutions that truly fit their space and routine.</p>
        
        <hr class="spacer">

        <h2>Our Commitment</h2>
        <p>Swiftclean Ladies is fully <strong>Licensed, Bonded, and Insured</strong>. We are committed to excellence, reliability, and client satisfaction.</p>
        <p>We aim to help our clients enjoy the peace of mind that comes with knowing their home or business is being cared for by dedicated professionals.</p>

        <hr class="spacer">
        
        <h2>Who We Serve</h2>
        <p>Swiftclean Ladies serves a diverse range of clients:</p>
        <ul class="styled-list">
            <li>Homeowners looking for dependable cleaning support</li>
            <li>Busy families who need recurring or one-time help</li>
            <li>Clients preparing for a deep clean</li>
            <li>Offices and business spaces that require a professional appearance</li>
            <li>New house development projects in need of cleaning before occupancy</li>
            <li>Clients seeking better organization and less clutter at home</li>
        </ul>

        <div class="mt-8 text-center bg-light b-radius p-8">
            <h3>Let’s Get Your Space Looking Its Best</h3>
            <p>Whether you need routine cleaning, a detailed deep clean, or help organizing your space, Swiftclean Ladies is here to help.</p>
            <a href="/contact.html" class="btn btn-primary mt-4">Contact Us</a>
        </div>
      </section>
    `
  },
  {
    path: 'services.html',
    title: 'Cleaning Services in Crawfordville, FL | Swiftclean Ladies',
    meta: 'Explore Swiftclean Ladies services, including recurring cleaning, one-time cleaning, deep cleaning, commercial cleaning, and organizational services.',
    content: `
      <section class="hero text-left hero-sm">
        <div class="container hero-grid">
          <div class="hero-content">
            <h1>Our Cleaning and Organization Services</h1>
            <p class="lead">Professional solutions for homes, businesses, and new house developments</p>
          </div>
          <div class="hero-image">
             <img src="/images/residential.png" alt="Residential Cleaning" class="b-radius shadow-lg w-full">
          </div>
        </div>
      </section>

      <section class="default-padding">
        <div class="container text-center max-w-3xl mb-12">
            <p>Swiftclean Ladies offers professional cleaning and organizational services in Crawfordville, Saint Marks, and Panacea, FL. We tailor our services to your needs so you can enjoy a clean, functional, and welcoming environment without the stress of handling it all yourself.</p>
        </div>
        
        <div class="container grid grid-2">
            <a href="/recurring-cleaning.html" class="card link-card">
                <h3>Recurring Cleaning &rarr;</h3>
                <p>Scheduled recurring cleaning designed to keep your home consistently clean with flexible service plans and personalized attention.</p>
            </a>
            <a href="/one-time-cleaning.html" class="card link-card">
                <h3>One-Time Cleaning &rarr;</h3>
                <p>A flexible one-time service focused on your priorities and schedule, with service described in fixed 2 to 5-hour slots.</p>
            </a>
            <a href="/deep-cleaning.html" class="card link-card">
                <h3>Deep Cleaning &rarr;</h3>
                <p>A more comprehensive service designed to eliminate buildup and grime while refreshing overlooked areas throughout the home.</p>
            </a>
            <a href="/commercial-cleaning.html" class="card link-card">
                <h3>Commercial Cleaning &rarr;</h3>
                <p>Professional cleaning for business offices and new house developments to maintain polished, move-in-ready spaces.</p>
            </a>
            <a href="/organizational-services.html" class="card link-card">
                <h3>Organizational Services &rarr;</h3>
                <p>Customized organization solutions for closets, pantries, home offices, garages, and storage spaces.</p>
            </a>
        </div>

        <div class="container max-w-3xl text-center bg-light mt-12 p-8 b-radius">
            <h2>Not Sure Which Service You Need?</h2>
            <p>We can help you choose the right service based on your space, your goals, and the level of cleaning or organization you need.</p>
            <div class="text-left mt-4" style="max-width: 400px; margin-left: auto; margin-right: auto; line-height: 2;">
                <b>Need regular upkeep?</b> Recurring Cleaning<br>
                <b>Need a reset?</b> Deep Cleaning<br>
                <b>Need flexible help once?</b> One-Time Cleaning<br>
                <b>Need business cleaning?</b> Commercial Cleaning<br>
                <b>Need clutter solutions?</b> Organizational Services<br>
            </div>
            <a class="btn btn-secondary mt-6" href="/contact.html">Get a Free Quote</a>
        </div>
      </section>
    `
  },
  {
    path: 'recurring-cleaning.html',
    title: 'Recurring Cleaning Services in Crawfordville, FL | Swiftclean Ladies',
    meta: 'Keep your home consistently clean with recurring cleaning services from Swiftclean Ladies in Crawfordville, FL.',
    content: `
      <section class="hero text-left hero-sm">
        <div class="container hero-grid">
          <div class="hero-content">
            <h1>Recurring Cleaning Services in Crawfordville, FL</h1>
            <p class="lead">Flexible ongoing cleaning to keep your home consistently fresh and inviting</p>
          </div>
          <div class="hero-image">
             <img src="/images/recurring.png" alt="Recurring Cleaning Service" class="b-radius shadow-lg w-full">
          </div>
        </div>
      </section>

      <section class="default-padding max-w-4xl center-block text-content">
        <p>Keep your home fresh, clean, and well-maintained with recurring cleaning services from Swiftclean Ladies. Our recurring service is designed for clients who want dependable support on an ongoing basis with flexible plans tailored to their home and priorities.</p>
        <p>We clean the spaces you use most and help maintain a healthier, more inviting environment from visit to visit.</p>

        <hr class="spacer">

        <h2 class="text-center">What’s Included</h2>
        <div class="grid grid-2 mt-8 align-top">
            <div class="content-box">
                <h4>Kitchens and Bathrooms</h4>
                <p>We thoroughly clean and sanitize surfaces and appliances to help keep these high-use areas fresh and hygienic.</p>
            </div>
            <div class="content-box">
                <h4>Living Areas and Bedrooms</h4>
                <p>We dust, vacuum, and maintain horizontal surfaces to keep your everyday spaces neat and comfortable.</p>
            </div>
            <div class="content-box">
                <h4>Additional Detail Work</h4>
                <p>Recurring cleaning may also include attention to baseboards, interior windows, trim, and light fixtures.</p>
            </div>
            <div class="content-box">
                <h4>Personalized Options</h4>
                <p>Optional tasks such as dishwashing, bed linen changes, and high dusting of ceilings or fans are available upon request.</p>
            </div>
        </div>

        <hr class="spacer">

        <h2>Why Choose Recurring Cleaning?</h2>
        <p>Recurring cleaning helps reduce the stress of staying on top of household chores while giving you more consistency, comfort, and peace of mind.</p>
        <p>This service is a great fit for:</p>
        <ul class="styled-list">
            <li>Busy households</li>
            <li>Families needing regular support</li>
            <li>Clients who want ongoing upkeep after a deep clean</li>
            <li>Anyone who prefers a consistently clean home</li>
        </ul>

        <div class="mt-8 p-8 bg-light b-radius text-center">
            <h3>Customized for Your Home</h3>
            <p>Recurring cleaning is fully customizable. We work around your priorities and cleaning goals so each visit supports the way you live.</p>
            <a href="/booking.html" class="btn btn-primary mt-4">Book Recurring Cleaning</a>
        </div>
      </section>
    `
  },
  {
    path: 'one-time-cleaning.html',
    title: 'One-Time Cleaning Services in Crawfordville, FL | Swiftclean Ladies',
    meta: 'Book a flexible one-time cleaning service in Crawfordville, FL with Swiftclean Ladies. Customized cleaning based on your priorities and schedule.',
    content: `
      <section class="hero text-left hero-sm">
        <div class="container hero-grid">
          <div class="hero-content">
            <h1>One-Time Cleaning Services in Crawfordville, FL</h1>
            <p class="lead">Flexible cleaning tailored to your priorities and schedule</p>
          </div>
          <div class="hero-image">
             <img src="/images/one-time.png" alt="One-Time Cleaning Service" class="b-radius shadow-lg w-full">
          </div>
        </div>
      </section>

      <section class="default-padding max-w-4xl center-block text-content">
        <p>Need a professional clean without signing up for recurring service? Swiftclean Ladies offers one-time cleaning designed to fit your schedule and focus on the areas that matter most to you.</p>
        <p>This flexible option is booked in fixed 2 to 5-hour slots with two dedicated professionals working on your priorities.</p>

        <hr class="spacer">

        <div class="grid grid-2">
            <div>
                <h2>Service Highlights</h2>
                <ul class="styled-list">
                    <li>Flexible scheduling</li>
                    <li>Priority-based cleaning</li>
                    <li>Customized service</li>
                    <li>Two dedicated professionals</li>
                    <li>Efficient cleaning within a set time block</li>
                </ul>
            </div>
            <div>
                <h2>Ideal For</h2>
                <ul class="styled-list">
                    <li>Occasional home resets</li>
                    <li>Before or after guests</li>
                    <li>Seasonal cleaning support</li>
                    <li>Busy weeks when you need extra help</li>
                    <li>Clients who want to try the service before committing</li>
                </ul>
            </div>
        </div>

        <div class="mt-8 py-8 px-6 bg-light b-radius text-center">
            <h3>A Personalized Cleaning Experience</h3>
            <p>We understand that every home is different. Our one-time cleaning service is designed to give you focused support where you need it most.</p>
            <a href="/booking.html" class="btn btn-primary mt-4">Schedule a One-Time Cleaning</a>
        </div>
      </section>
    `
  },
  {
    path: 'deep-cleaning.html',
    title: 'Deep Cleaning Services in Crawfordville, FL | Swiftclean Ladies',
    meta: 'Professional deep cleaning services in Crawfordville, FL for homes that need a detailed, comprehensive clean.',
    content: `
      <section class="hero text-left hero-sm">
        <div class="container hero-grid">
          <div class="hero-content">
            <h1>Deep Cleaning Services in Crawfordville, FL</h1>
            <p class="lead">A more detailed clean for homes that need extra attention</p>
          </div>
          <div class="hero-image">
             <img src="/images/deep.png" alt="Deep Cleaning Services" class="b-radius shadow-lg w-full">
          </div>
        </div>
      </section>

      <section class="default-padding max-w-4xl center-block text-content">
        <p>When your home needs more than a routine clean, Swiftclean Ladies offers a deep cleaning service designed to refresh every corner. This service is built to remove long-standing buildup, tackle overlooked areas, and create a strong foundation for ongoing maintenance.</p>
        <p>Deep cleaning is often the best starting point for clients who want a more complete reset of their space.</p>

        <hr class="spacer">

        <h2 class="text-center">Included Services</h2>
        <div class="grid grid-2 mt-8 align-top">
            <div class="card p-6 border">
                <h4>Kitchen Care</h4>
                <ul class="text-sm">
                    <li>Inside and outside cleaning of microwaves and ovens</li>
                    <li>Polishing of refrigerators and other appliances</li>
                    <li>Detailed cleaning of countertops, sinks, fixtures, stove hoods, and backsplashes</li>
                    <li>Cleaning and sanitizing surfaces and appliances</li>
                </ul>
            </div>
            <div class="card p-6 border">
                <h4>Living Rooms and Bedrooms</h4>
                <ul class="text-sm">
                    <li>Dusting furniture</li>
                    <li>Bed-making and Linen changes</li>
                    <li>Thorough vacuuming of carpets and rugs</li>
                </ul>
            </div>
            <div class="card p-6 border">
                <h4>Throughout the Home</h4>
                <ul class="text-sm">
                    <li>Cleaning glass surfaces</li>
                    <li>Emptying trash and replacing liners</li>
                    <li>Dusting ceiling fans, light fixtures, air vents, switches</li>
                    <li>Removing cobwebs, sweeping and mopping floors</li>
                </ul>
            </div>
            <div class="card p-6 border">
                <h4>Vertical Surfaces and Details</h4>
                <ul class="text-sm">
                    <li>Baseboards & Trim work</li>
                    <li>Interior windows and blinds</li>
                    <li>Exterior cabinets & Doors</li>
                    <li>Light fixtures</li>
                </ul>
            </div>
        </div>

        <hr class="spacer">

        <h2>Why Start with a Deep Clean?</h2>
        <p>A deep clean helps remove grime that routine cleaning may miss and gives your home a cleaner, fresher baseline. It is especially helpful for first-time clients, homes needing extra attention, or anyone preparing to transition into recurring service.</p>

        <p class="mt-4">Our team is fully <strong>licensed, bonded, and insured</strong> with a commitment to high-quality service and careful attention to detail.</p>
        <div class="text-center mt-8">
             <a href="/booking.html" class="btn btn-primary">Schedule Your Deep Cleaning</a>
        </div>
      </section>
    `
  },
  {
    path: 'commercial-cleaning.html',
    title: 'Commercial Cleaning Services in Crawfordville, FL | Swiftclean Ladies',
    meta: 'Commercial cleaning for offices and new house developments in Crawfordville, FL from Swiftclean Ladies.',
    content: `
      <section class="hero text-left hero-sm">
        <div class="container hero-grid">
          <div class="hero-content">
            <h1>Commercial Cleaning Services in Crawfordville, FL</h1>
            <p class="lead">Professional cleaning for offices and new house developments</p>
          </div>
          <div class="hero-image">
             <img src="/images/commercial.png" alt="Commercial Cleaning Service" class="b-radius shadow-lg w-full">
          </div>
        </div>
      </section>

      <section class="default-padding max-w-4xl center-block text-content">
        <p>Swiftclean Ladies provides commercial cleaning services for business offices and new house developments. Our goal is to help maintain clean, professional, and well-presented spaces that support productivity, leave a positive impression, and prepare properties for use.</p>


        <div class="grid grid-2 mt-8 align-top">
          <div>
            <h2>Business Office Cleaning</h2>
            <p>We provide cleaning for:</p>
            <ul class="styled-list">
                <li>Reception areas</li>
                <li>Workstations</li>
                <li>Meeting rooms</li>
                <li>Common spaces</li>
            </ul>
            <p>We also give detailed attention to high-touch areas such as door handles, light switches, and conference equipment. Customized cleaning schedules are available to minimize disruption and maintain a professional image.</p>
          </div>
          <div>
             <div class="card bg-light">
                 <h2>New House Development Cleaning</h2>
                 <p>Swiftclean Ladies also offers cleaning support for new house developments. We help ensure properties are clean, pristine, and ready for occupancy, providing essential finishing touches before move-in day.</p>
                 <img src="/images/new-construction.png" alt="New Construction Cleaning" class="b-radius shadow-md w-full mt-4">
             </div>
          </div>
        </div>

        <hr class="spacer">

        <h2 class="text-center">Why Businesses Choose Us</h2>
        <div class="grid grid-3 mt-8">
            <div class="text-center">
                <h4>Expertise & Reliability</h4>
                <p class="text-sm text-gray">Licensed, bonded, and insured team, trained to handle both office and development environments.</p>
            </div>
            <div class="text-center">
                <h4>Customized Plans</h4>
                <p class="text-sm text-gray">Flexible schedules and service plans based on the precise needs of your business or project.</p>
            </div>
            <div class="text-center">
                <h4>Consistent Quality</h4>
                <p class="text-sm text-gray">Committed to a high standard of cleanliness that supports the appearance and professionalism of your space.</p>
            </div>
        </div>

        <div class="text-center mt-12 bg-light p-8 b-radius">
            <h3>Built Around Your Needs</h3>
            <p>Whether you manage an office or a housing development project, Swiftclean Ladies works to deliver dependable service with minimal interruption to your operations.</p>
             <a href="/contact.html" class="btn btn-primary mt-4">Request a Commercial Quote</a>
        </div>
      </section>
    `
  },
  {
    path: 'organizational-services.html',
    title: 'Professional Home Organization in Crawfordville, FL | Swiftclean Ladies',
    meta: 'Swiftclean Ladies offers personalized home organization services in Crawfordville, FL for closets, pantries, home offices, and storage spaces.',
    content: `
      <section class="hero text-left hero-sm">
        <div class="container hero-grid">
          <div class="hero-content">
            <h1>Professional Organizational Services in Crawfordville, FL</h1>
            <p class="lead">Personalized organization for calmer, cleaner, more efficient spaces</p>
          </div>
          <div class="hero-image">
             <img src="/images/organization.png" alt="Home Organization Services" class="b-radius shadow-lg w-full">
          </div>
        </div>
      </section>

      <section class="default-padding max-w-4xl center-block text-content">
        <p>Swiftclean Ladies offers professional organizational services designed to help create calm, clutter-free, and more efficient spaces. We tailor each organization project to your needs so your home works better for your routine, your lifestyle, and your goals.</p>

        <hr class="spacer">

        <h2 class="text-center mb-8">What We Organize</h2>
        <div class="grid grid-2 mt-4 align-top">
            <div class="card border">
                <h4>Closet and Wardrobe Organization</h4>
                <p class="text-sm">Customized systems for keeping clothing, shoes, and accessories neatly arranged and easy to access.</p>
            </div>
            <div class="card border">
                <h4>Kitchen and Pantry Organization</h4>
                <p class="text-sm">Streamlined organization that helps improve storage, simplify meal preparation, and make kitchen spaces easier to manage.</p>
            </div>
            <div class="card border">
                <h4>Home Office Organization</h4>
                <p class="text-sm">Workspace organization designed to support focus, productivity, and a more efficient daily routine.</p>
            </div>
            <div class="card border">
                <h4>Garage and Storage Areas</h4>
                <p class="text-sm">Practical storage solutions that help make larger or more cluttered spaces easier to use.</p>
            </div>
        </div>

        <hr class="spacer">

        <div class="grid grid-2 bg-light p-8 b-radius align-center">
            <div>
                <h2>Benefits of Professional Organization</h2>
                <ul class="styled-list">
                    <li>Reduced stress from clutter-free spaces</li>
                    <li>Better productivity and efficiency</li>
                    <li>Greater comfort and enjoyment at home</li>
                </ul>
            </div>
            <div>
                <h3>A Personalized Approach</h3>
                <p>Our organizational services are built around your specific challenges and goals. We combine attention to detail, customized strategies, and practical systems designed to create lasting results.</p>
                <a href="/booking.html" class="btn btn-primary mt-4">Book Organizational Services</a>
            </div>
        </div>
      </section>
    `
  },
  {
    path: 'faq.html',
    title: 'FAQ | Swiftclean Ladies',
    meta: 'Frequently asked questions about Swiftclean Ladies cleaning and organizational services in Crawfordville, FL.',
    content: `
      <section class="hero text-center hero-sm">
        <div class="container max-w-4xl">
          <h1>Frequently Asked Questions</h1>
          <p class="lead">Everything you need to know about our services</p>
        </div>
      </section>

      <section class="default-padding max-w-3xl center-block">
        <div class="accordion">
            <details class="faq-item" open>
                <summary>What types of cleaning services do you offer?</summary>
                <div class="faq-content">
                    <p>Swiftclean Ladies offers recurring cleaning, one-time cleaning, deep cleaning, commercial cleaning, new house development cleaning, and organizational services.</p>
                </div>
            </details>
            <details class="faq-item">
                <summary>Are your cleaning products safe for children and pets?</summary>
                <div class="faq-content">
                    <p><i>We prioritize the health and safety of your family. Please contact us to query about specific eco-friendly and pet-safe products used during our cleans. [Placeholder - client to confirm]</i></p>
                </div>
            </details>
            <details class="faq-item">
                <summary>Do I need to be home during the cleaning service?</summary>
                <div class="faq-content">
                    <p><i>No, you are not required to be home. Many of our clients prefer to provide access via a lockbox or spare key so they can come home to a fresh space. [Placeholder - client to confirm]</i></p>
                </div>
            </details>
            <details class="faq-item">
                <summary>What happens if I’m not satisfied with the cleaning service?</summary>
                <div class="faq-content">
                    <p><i>Your satisfaction is our top priority. Please contact us within 24 hours of the service, and we will gladly return to address any overlooked areas. [Placeholder - client to confirm]</i></p>
                </div>
            </details>
            <details class="faq-item">
                <summary>How do I schedule a cleaning service?</summary>
                <div class="faq-content">
                    <p>You can schedule service easily through our website by requesting a free quote on our contact page or by using our direct booking form. We'll reply quickly to confirm details!</p>
                </div>
            </details>
            <details class="faq-item">
                <summary>Are your cleaners insured and background-checked?</summary>
                <div class="faq-content">
                    <p>Yes, Swiftclean Ladies is a fully licensed, bonded, and insured professional company for your peace of mind.</p>
                </div>
            </details>
        </div>
        
        <div class="text-center mt-12">
            <h2>Still Have Questions?</h2>
            <p>We’re here to help. Reach out to learn more about our services, scheduling, and availability.</p>
            <a href="/contact.html" class="btn btn-secondary mt-4">Contact Us</a>
        </div>
      </section>
    `
  },
  {
    path: 'contact.html',
    title: 'Contact Swiftclean Ladies | Cleaning Services in Crawfordville, FL',
    meta: 'Contact Swiftclean Ladies for residential, commercial, deep cleaning, and organizational services in Crawfordville, FL.',
    content: `
      <section class="hero text-center hero-sm">
        <div class="container max-w-4xl">
          <h1>Contact Swiftclean Ladies</h1>
          <p class="lead">Reach out today for reliable cleaning services in Crawfordville, FL</p>
        </div>
      </section>

      <section class="default-padding">
        <div class="container grid grid-2">
            
            <div class="contact-info">
                <h2>Why Contact Us?</h2>
                <p>Our team is here to assist with questions about services, scheduling, and service packages. If you are looking for professional cleaning support or home organization, we would be glad to help you get started.</p>
                
                <hr class="spacer">

                <h3>Contact Information</h3>
                <ul class="styled-list no-bullet pl-0 font-medium">
                    <li>📍 117 Allen Harvey ST, Crawfordville, FL 32327</li>
                    <li>📞 <a href="tel:8508156998" class="text-primary">(850) 815-6998</a></li>
                    <li>✉️ <a href="mailto:swift.clean25@gmail.com" class="text-primary">swift.clean25@gmail.com</a></li>
                </ul>

                <h3 class="mt-8">Service Area</h3>
                <p>Crawfordville, FL &bull; Saint Marks, FL &bull; Panacea, FL</p>
            </div>

            <div class="contact-form block-card">
                <h3>Send Us a Message</h3>
                <form action="#" method="POST" class="form-container mt-4">
                    <div class="grid grid-2" style="gap: 1rem;">
                        <div class="form-group">
                            <label>First Name</label>
                            <input type="text" class="form-control" placeholder="Jane" required>
                        </div>
                        <div class="form-group">
                            <label>Last Name</label>
                            <input type="text" class="form-control" placeholder="Doe" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="janedoe@example.com" required>
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input type="tel" class="form-control" placeholder="(850) 555-5555" required>
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <textarea class="form-control" rows="5" placeholder="How can we help you?" required></textarea>
                    </div>
                    <div class="checkbox-group mt-4">
                        <label>
                            <input type="checkbox" required> I agree to the <a href="/terms-conditions.html">Terms and Conditions</a> and consent to receiving text messages.
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary mt-6 w-full">Get a Free Quote</button>
                </form>
            </div>

        </div>
      </section>
    `
  },
  {
    path: 'booking.html',
    title: 'Book Your Cleaning Service | Swiftclean Ladies',
    meta: 'Book professional cleaning and organization services in Crawfordville, FL directly online.',
    content: `
      <section class="hero text-center hero-sm">
        <div class="container max-w-4xl">
          <h1>Book Your Cleaning Service</h1>
          <p class="lead">Tell us what you need and we’ll help you get started</p>
        </div>
      </section>

      <section class="default-padding">
        <div class="container max-w-3xl block-card mx-auto">
            <form action="#" method="POST" class="form-container">
                    <div class="grid grid-2" style="gap: 1rem;">
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input type="tel" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control" required>
                    </div>
                     <div class="form-group">
                        <label>Service Type</label>
                        <select class="form-control">
                            <option value="recurring">Recurring Cleaning</option>
                            <option value="one_time">One-Time Cleaning</option>
                            <option value="deep">Deep Cleaning</option>
                            <option value="commercial">Commercial Cleaning</option>
                            <option value="organization">Organizational Services</option>
                        </select>
                    </div>
                    <div class="grid grid-2" style="gap: 1rem;">
                        <div class="form-group">
                            <label>Preferred Date</label>
                            <input type="date" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Preferred Time</label>
                            <input type="time" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Message / Notes</label>
                        <textarea class="form-control" rows="4"></textarea>
                    </div>
                    <div class="mt-4 text-center">
                        <span class="trust-badge display-inline-block p-2 bg-light b-radius text-sm text-gray">🔒 Licensed, Bonded, and Insured</span>
                    </div>
                    <button type="submit" class="btn btn-primary mt-6 w-full text-lg">Submit Request</button>
                </form>
        </div>
      </section>
    `
  },
  {
    path: 'privacy-policy.html',
    title: 'Privacy Policy | Swiftclean Ladies',
    meta: 'Privacy Policy for Swiftclean Ladies. Learn how we collect, use, and protect your information.',
    content: `
      <section class="hero text-center hero-sm">
        <div class="container max-w-4xl">
          <h1>Privacy Policy</h1>
          <p class="lead">How we collect, use, and protect your information</p>
        </div>
      </section>
      <section class="default-padding max-w-4xl center-block text-content">
         <h2>1. Information We Collect</h2>
         <p>Swiftclean Ladies collects information you provide directly to us when you request a quote, schedule a service, or contact us. This may include your name, email address, phone number, physical address, and details about your home or business.</p>
         
         <h2>2. How We Use Your Information</h2>
         <p>We use the information we collect to provide, maintain, and improve our cleaning services; process your transactions and send related information; respond to your comments, questions, and requests; and provide customer service.</p>
         
         <h2>3. Information Sharing</h2>
         <p>We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights. We do not sell your personal data.</p>
         
         <h2>4. Data Security</h2>
         <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
         
         <h2>5. Contact Us</h2>
         <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:swift.clean25@gmail.com">swift.clean25@gmail.com</a>.</p>
      </section>
    `
  },
  {
    path: 'terms-conditions.html',
    title: 'Terms & Conditions | Swiftclean Ladies',
    meta: 'Terms and Conditions for Swiftclean Ladies cleaning services in Crawfordville, FL.',
    content: `
      <section class="hero text-center hero-sm">
        <div class="container max-w-4xl">
          <h1>Terms & Conditions</h1>
          <p class="lead">Rules and guidelines for our services</p>
        </div>
      </section>
      <section class="default-padding max-w-4xl center-block text-content">
         <h2>1. Agreement to Terms</h2>
         <p>By accessing our website and using the services of Swiftclean Ladies, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>
         
         <h2>2. Service Booking and Cancellation</h2>
         <p>We require at least 24 hours' notice for cancellations. Cancellations made with less than 24 hours' notice may be subject to a cancellation fee.</p>
         
         <h2>3. Access to Property</h2>
         <p>Clients are required to provide access to the property at the scheduled time of service. If our team is unable to access the property, a lockout fee may apply.</p>
         
         <h2>4. Satisfaction Guarantee</h2>
         <p>Your satisfaction is our priority. If you are not satisfied with our service, please contact us within 24 hours. We will make arrangements to return and re-clean the overlooked areas.</p>
         
         <h2>5. Liability</h2>
         <p>While we take the utmost care while cleaning your home or office, accidents can transpire. Our company is fully bonded and insured to protect against significant damage.</p>
         
         <h2>6. Contact Us</h2>
         <p>For any questions regarding these Terms, contact us at <a href="mailto:swift.clean25@gmail.com">swift.clean25@gmail.com</a>.</p>
      </section>
    `
  }
];

pages.forEach(p => {
  let schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": p.title,
    "description": p.meta,
    "url": "https://swiftcleanladies.com/" + p.path.replace('index.html', '')
  };
  
  if (p.path === 'index.html') {
    schema = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": "Swiftclean Ladies",
      "image": "https://assets.cdn.filesafe.space/gGtmQYvc0s6yNrsidLE4/media/69ca6cf423b082470f691cb7.svg",
      "description": p.meta,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "117 Allen Harvey ST",
        "addressLocality": "Crawfordville",
        "addressRegion": "FL",
        "postalCode": "32327",
        "addressCountry": "US"
      },
      "telephone": "+1-850-815-6998",
      "areaServed": ["Crawfordville, FL", "Saint Marks, FL", "Panacea, FL"]
    };
  } else if (p.path.includes('cleaning') || p.path.includes('services')) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": p.title.split('|')[0].trim(),
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Swiftclean Ladies"
      },
      "areaServed": ["Crawfordville, FL", "Saint Marks, FL", "Panacea, FL"],
      "description": p.meta
    };
  } else if (p.path === 'faq.html') {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of cleaning services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Swiftclean Ladies offers recurring cleaning, one-time cleaning, deep cleaning, commercial cleaning, new house development cleaning, and organizational services."
          }
        },
        {
          "@type": "Question",
          "name": "Are your cleaners insured and background-checked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Swiftclean Ladies is a fully licensed, bonded, and insured professional company for your peace of mind."
          }
        }
      ]
    };
  }

  const finalHtml = layout(p.title, p.meta, p.content, '/' + p.path, JSON.stringify(schema, null, 2));
  fs.writeFileSync(path.join(__dirname, p.path), finalHtml);
  console.log('Created:', p.path);
});
