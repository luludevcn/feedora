import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header></Header>
      {/* <!-- Hero Section --> */}
      <section className='pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row items-center'>
            <div className='lg:w-1/2 mb-12 lg:mb-0'>
              <div className='inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6'>
                Built for indie developers
              </div>
              <h1 className='text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-6 text-shadow'>
              Ship things people
              <span className='bg-gradient-to-r from-primary ml-2 to-secondary bg-clip-text text-transparent'>
                actually want
              </span>
            </h1>
            <p className='text-lg md:text-xl text-gray-600 mb-8 max-w-lg'>
              You&apos;re building something new — a product, a service, a community. But are you building the right thing? Feedora helps you collect and analyze feedback during the critical moments: when people join your waitlist, when they first experience what you offer, and when they decide whether to stick around.
            </p>
              <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
                <a href='javascript:void(0);' className='bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center'>
                  Start collecting feedback for free
                </a>
                <a href='javascript:void(0);' className='flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-md hover:shadow-lg text-center'>
                  <i className='fas fa-play-circle text-primary'>
                  </i>
                  <span >
                    Watch Demo
                  </span>
                </a>
              </div>
              <div className='mt-6 text-sm text-gray-500'>
                No credit card required. Set up in 2 minutes.
              </div>
              <div className='mt-10 flex items-center'>
                <div className='flex -space-x-3'>
                  <img src='/user-sarah.svg' alt='User' className='w-10 h-10 rounded-full border-2 border-white' />
                  <img src='/user-alex.svg' alt='User' className='w-10 h-10 rounded-full border-2 border-white' />
                  <img src='/user-jamie.svg' alt='User' className='w-10 h-10 rounded-full border-2 border-white' />
                  <img src='/user-sarah.svg' alt='User' className='w-10 h-10 rounded-full border-2 border-white' />
                </div>
                <div className='ml-4'>
                  <div className='flex items-center'>
                    <div className='flex text-yellow-400'>
                      <i className='fas fa-star'>
                      </i>
                      <i className='fas fa-star'>
                      </i>
                      <i className='fas fa-star'>
                      </i>
                      <i className='fas fa-star'>
                      </i>
                      <i className='fas fa-star-half-alt'>
                      </i>
                    </div>
                    <span className='ml-2 font-semibold'>
                      4.9/5
                    </span>
                  </div>
                  <p className='text-sm text-gray-500'>
                    Rated by 500+ indie builders
                  </p>
                </div>
              </div>
            </div>
            <div className='lg:w-1/2 relative'>
              <div className='relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500'>
                <img src='/dashboard-preview.svg' alt='Feedora Dashboard' className='w-full h-auto' />
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6'>
                  <div className='flex items-center space-x-2 text-white'>
                    <i className='fas fa-check-circle text-secondary'>
                    </i>
                    <span className='font-medium'>
                      Real-time feedback analytics
                    </span>
                  </div>
                </div>
              </div>
              <div className='absolute -bottom-6 -left-6 w-64 h-64 bg-accent/20 rounded-full blur-3xl'>
              </div>
              <div className='absolute -top-6 -right-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl'>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Trusted By Section --> */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <p className='text-center text-gray-500 text-sm font-medium mb-10'>
            Trusted by 500+ indie builders shipping faster
          </p>
          <div className='flex flex-wrap justify-center items-center gap-12 opacity-70'>
            <div className='text-2xl font-bold text-gray-400'>
              Sarah
            </div>
            <div className='text-2xl font-bold text-gray-400'>
              Alex
            </div>
            <div className='text-2xl font-bold text-gray-400'>
              Jamie
            </div>
            <div className='text-2xl font-bold text-gray-400'>
              Sam
            </div>
            <div className='text-2xl font-bold text-gray-400'>
              Taylor
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Features Section --> */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <div className='inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6'>
              Build with confidence
            </div>
            <h2 className='text-[clamp(1.8rem,4vw,3rem)] font-bold mb-6'>
              Feedback for every stage of your launch
            </h2>
            <p className='text-lg text-gray-600'>
              From waitlist to post-launch, collect the right feedback at the right time to build products users love.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* <!-- Pre-launch Feature --> */}
            <div className='bg-white rounded-2xl p-8 shadow-md card-hover'>
              <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6'>
                <i className='fas fa-lightbulb'>
                </i>
              </div>
              <h3 className='text-xl font-bold mb-3'>
                Pre-launch: Validate your idea
              </h3>
              <p className='text-gray-600 mb-4'>
                Perfect for validating a new product, newsletter, course, or service. Ask: &quot;What&apos;s your biggest challenge right now?&quot; and &quot;If you could wave a magic wand, what would this look like?&quot;
              </p>
              <a href='javascript:void(0);' className='inline-flex items-center text-primary font-medium hover:underline'>
                Learn more
                <i className='fas fa-arrow-right ml-2 text-sm'>
                </i>
              </a>
            </div>
            {/* <!-- During launch Feature --> */}
            <div className='bg-white rounded-2xl p-8 shadow-md card-hover'>
              <div className='w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary text-2xl mb-6'>
                <i className='fas fa-rocket'>
                </i>
              </div>
              <h3 className='text-xl font-bold mb-3'>
                During launch: Listen to early users
              </h3>
              <p className='text-gray-600 mb-4'>
                Get notified when someone submits feedback. See patterns emerge in real-time. One indie creator collected 2,500+ responses from a 6,000-person waitlist — that&apos;s a 30%+ response rate.
              </p>
              <a href='javascript:void(0);' className='inline-flex items-center text-primary font-medium hover:underline'>
                Learn more
                <i className='fas fa-arrow-right ml-2 text-sm'>
                </i>
              </a>
            </div>
            {/* <!-- Post-launch Feature --> */}
            <div className='bg-white rounded-2xl p-8 shadow-md card-hover'>
              <div className='w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-2xl mb-6'>
                <i className='fas fa-chart-line'>
                </i>
              </div>
              <h3 className='text-xl font-bold mb-3'>
                Post-launch: Let users shape your roadmap
              </h3>
              <p className='text-gray-600 mb-4'>
                Feedback scattered across social media, email, and DMs? Bring it into one place. Let your community vote on what to improve next, and communicate what&apos;s coming.
              </p>
              <a href='javascript:void(0);' className='inline-flex items-center text-primary font-medium hover:underline'>
                Learn more
                <i className='fas fa-arrow-right ml-2 text-sm'>
                </i>
              </a>
            </div>
            {/* <!-- Data Ownership Feature --> */}
            <div className='bg-white rounded-2xl p-8 shadow-md card-hover'>
              <div className='w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 text-2xl mb-6'>
                <i className='fas fa-lock'>
                </i>
              </div>
              <h3 className='text-xl font-bold mb-3'>
                Your data stays yours
              </h3>
              <p className='text-gray-600 mb-4'>
                Export your data anytime. No lock-in. Your feedback belongs to you, and we respect that.
              </p>
              <a href='javascript:void(0);' className='inline-flex items-center text-primary font-medium hover:underline'>
                Learn more
                <i className='fas fa-arrow-right ml-2 text-sm'>
                </i>
              </a>
            </div>
            {/* <!-- Easy Setup Feature --> */}
            <div className='bg-white rounded-2xl p-8 shadow-md card-hover'>
              <div className='w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-6'>
                <i className='fas fa-code'>
                </i>
              </div>
              <h3 className='text-xl font-bold mb-3'>
                Simple embed code
              </h3>
              <p className='text-gray-600 mb-4'>
                Add feedback forms to your website with just a few lines of code. No complicated setup required.
              </p>
              <a href='javascript:void(0);' className='inline-flex items-center text-primary font-medium hover:underline'>
                Learn more
                <i className='fas fa-arrow-right ml-2 text-sm'>
                </i>
              </a>
            </div>
            {/* <!-- Indie-friendly Feature --> */}
            <div className='bg-white rounded-2xl p-8 shadow-md card-hover'>
              <div className='w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-2xl mb-6'>
                <i className='fas fa-heart'>
                </i>
              </div>
              <h3 className='text-xl font-bold mb-3'>
                Built by an indie dev
              </h3>
              <p className='text-gray-600 mb-4'>
                Made for indie developers, by an indie developer. We understand the challenges you face and built Feedora to help you succeed.
              </p>
              <a href='javascript:void(0);' className='inline-flex items-center text-primary font-medium hover:underline'>
                Learn more
                <i className='fas fa-arrow-right ml-2 text-sm'>
                </i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Dashboard Preview Section --> */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            <div className='lg:w-1/2 order-2 lg:order-1'>
              <div className='relative'>
                <div className='relative z-10 rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500'>
                  <img src='/dashboard-preview.svg' alt='Feedora Dashboard' className='w-full h-auto' />
                </div>
                <div className='absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl'>
                </div>
                <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl'>
                </div>
              </div>
            </div>
            <div className='lg:w-1/2 order-1 lg:order-2'>
              <div className='inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6'>
                Data-driven decisions
              </div>
              <h2 className='text-[clamp(2rem,4vw,3rem)] font-bold mb-6'>
                Turn feedback into actionable insights
              </h2>
              <p className='text-lg text-gray-600 mb-8'>
                Our powerful analytics dashboard gives you real-time visibility into survey results, helping you identify trends and make informed decisions quickly.
              </p>
              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4 mt-1 flex-shrink-0'>
                    <i className='fas fa-check'>
                    </i>
                  </div>
                  <div >
                    <h3 className='text-lg font-semibold mb-1'>
                      Spot patterns in minutes, not hours
                    </h3>
                    <p className='text-gray-600'>
                      Interactive charts and graphs that make complex feedback data easy to understand at a glance.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4 mt-1 flex-shrink-0'>
                    <i className='fas fa-check'>
                    </i>
                  </div>
                  <div >
                    <h3 className='text-lg font-semibold mb-1'>
                      Know if users are excited or frustrated
                    </h3>
                    <p className='text-gray-600'>
                      Automatically detect positive, negative, and neutral responses in open-ended answers.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4 mt-1 flex-shrink-0'>
                    <i className='fas fa-check'>
                    </i>
                  </div>
                  <div >
                    <h3 className='text-lg font-semibold mb-1'>
                      Share insights with your team (or just yourself)
                    </h3>
                    <p className='text-gray-600'>
                      Create and share custom reports in multiple formats, perfect for solo devs or small teams.
                    </p>
                  </div>
                </div>
              </div>
              <a href='javascript:void(0);' className='inline-flex items-center mt-8 text-primary font-medium hover:underline'>
                Explore Analytics
                <i className='fas fa-arrow-right ml-2 text-sm'>
                </i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Templates Section --> */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <div className='inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6'>
              Launch-ready templates
            </div>
            <h2 className='text-[clamp(2rem,4vw,3rem)] font-bold mb-6'>
              Templates for every launch stage
            </h2>
            <p className='text-lg text-gray-600'>
              Choose from our curated templates designed specifically for indie developers launching new products.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* <!-- Pre-launch Waitlist Template --> */}
            <div className='bg-white rounded-2xl overflow-hidden shadow-md card-hover'>
              <div className='h-48 overflow-hidden'>
                <img src='/prelaunch-template.svg' alt='Pre-launch Waitlist Template' className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-center mb-3'>
                  <span className='text-sm font-medium text-gray-500'>
                    Pre-launch
                  </span>
                  <span className='px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full'>
                    Popular
                  </span>
                </div>
                <h3 className='text-xl font-bold mb-2'>
                  Pre-launch Waitlist Template
                </h3>
                <p className='text-gray-600 mb-4'>
                  Perfect for validating a new product, newsletter, course, or service. Ask: &quot;What&apos;s your biggest challenge right now?&quot; and &quot;If you could wave a magic wand, what would this look like?&quot;
                </p>
                <a href='javascript:void(0);' className='block text-center bg-gray-50 hover:bg-gray-100 text-gray-800 py-3 rounded-xl font-medium transition-colors'>
                  Use Template
                </a>
              </div>
            </div>
            {/* <!-- Post-launch Feedback Template --> */}
            <div className='bg-white rounded-2xl overflow-hidden shadow-md card-hover'>
              <div className='h-48 overflow-hidden'>
                <img src='/postlaunch-template.svg' alt='Post-launch Feedback Template' className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-center mb-3'>
                  <span className='text-sm font-medium text-gray-500'>
                    Post-launch
                  </span>
                  <span className='px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full'>
                    New
                  </span>
                </div>
                <h3 className='text-xl font-bold mb-2'>
                  Post-launch Feedback Template
                </h3>
                <p className='text-gray-600 mb-4'>
                  Ideal for gathering first impressions after launch — whether it&apos;s a SaaS, a book, a podcast, or a physical product. Ask: &quot;What was your first impression?&quot; and &quot;What&apos;s one thing we could improve?&quot;
                </p>
                <a href='javascript:void(0);' className='block text-center bg-gray-50 hover:bg-gray-100 text-gray-800 py-3 rounded-xl font-medium transition-colors'>
                  Use Template
                </a>
              </div>
            </div>
            {/* <!-- Feature Request Board --> */}
            <div className='bg-white rounded-2xl overflow-hidden shadow-md card-hover'>
              <div className='h-48 overflow-hidden'>
                <img src='/feature-request-board.svg' alt='Feature Request Board' className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-center mb-3'>
                  <span className='text-sm font-medium text-gray-500'>
                    Ongoing
                  </span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'>
                    Pro
                  </span>
                </div>
                <h3 className='text-xl font-bold mb-2'>
                  Feature Request Board
                </h3>
                <p className='text-gray-600 mb-4'>
                  Let your customers, readers, or members submit and vote on ideas. See what&apos;s most wanted and share what you&apos;re working on.
                </p>
                <a href='javascript:void(0);' className='block text-center bg-gray-50 hover:bg-gray-100 text-gray-800 py-3 rounded-xl font-medium transition-colors'>
                  Use Template
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Product Preview Section --> */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <div className='inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6'>
              How it works
            </div>
            <h2 className='text-[clamp(2rem,4vw,3rem)] font-bold mb-6'>
              See Feedora in action
            </h2>
            <p className='text-lg text-gray-600'>
              A quick look at how Feedora helps you collect and analyze feedback throughout your product launch journey.
            </p>
          </div>
          <div className='relative'>
            <div className='bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100'>
              <img src='/dashboard-preview.svg' alt='Feedora Dashboard' className='w-full h-auto' />
            </div>
            <div className='absolute -bottom-6 -right-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl'></div>
            <div className='absolute -top-6 -left-6 w-64 h-64 bg-secondary/20 rounded-full blur-3xl'></div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials Section --> */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <div className='inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6'>
              Indie dev stories
            </div>
            <h2 className='text-[clamp(2rem,4vw,3rem)] font-bold mb-6'>
              What indie developers are saying
            </h2>
            <p className='text-lg text-gray-600'>
              Join 500+ indie developers using Feedora to ship better products faster.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* <!-- Testimonial 1 --> */}
            <div className='bg-gray-50 rounded-2xl p-8 shadow-md'>
              <div className='flex text-yellow-400 mb-4'>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
              </div>
              <p className='text-gray-600 mb-6 italic'>
                {`"Feedora helped me validate my SaaS idea before writing a single line of code. The waitlist feedback gave me clear direction on what features to build first."`}
              </p>
              <div className='flex items-center'>
                <img src='/user-sarah.svg' alt='Sarah' className='w-12 h-12 rounded-full mr-4' />
                <div >
                  <h4 className='font-bold'>
                    Sarah
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Building her first SaaS
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Testimonial 2 --> */}
            <div className='bg-gray-50 rounded-2xl p-8 shadow-md'>
              <div className='flex text-yellow-400 mb-4'>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
              </div>
              <p className='text-gray-600 mb-6 italic'>
                {`"I collected 2,500+ responses from my 6,000-person waitlist using Feedora. That's a 30%+ response rate! The insights helped me prioritize features for launch."`}
              </p>
              <div className='flex items-center'>
                <img src='/user-alex.svg' alt='Alex' className='w-12 h-12 rounded-full mr-4' />
                <div >
                  <h4 className='font-bold'>
                    Alex
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Indie game developer
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Testimonial 3 --> */}
            <div className='bg-gray-50 rounded-2xl p-8 shadow-md'>
              <div className='flex text-yellow-400 mb-4'>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star-half-alt'>
                </i>
              </div>
              <p className='text-gray-600 mb-6 italic'>
                {`"The feature request board has been a game-changer. Instead of tracking requests across Discord and Twitter, everything is in one place with user votes."`}
              </p>
              <div className='flex items-center'>
                <img src='/user-jamie.svg' alt='Jamie' className='w-12 h-12 rounded-full mr-4' />
                <div >
                  <h4 className='font-bold'>
                    Jamie
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Full-stack developer
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Testimonial 4 --> */}
            <div className='bg-gray-50 rounded-2xl p-8 shadow-md'>
              <div className='flex text-yellow-400 mb-4'>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
              </div>
              <p className='text-gray-600 mb-6 italic'>
                {`"I used Feedora to collect feedback from my newsletter subscribers before launching a paid tier. The responses told me exactly what content they'd pay for — I hit my revenue goal in the first week."`}
              </p>
              <div className='flex items-center'>
                <img src='/user-priya.svg' alt='Priya' className='w-12 h-12 rounded-full mr-4' />
                <div >
                  <h4 className='font-bold'>
                    Priya
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Newsletter creator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Light CTA Section --> */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-[clamp(2rem,4vw,3rem)] font-bold mb-6'>
              Start shipping with confidence
            </h2>
            <p className='text-lg text-gray-600 mb-10'>
              Join 500+ indie builders who are creating things people actually want.
            </p>
            <a href='javascript:void(0);' className='inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center'>
              Start collecting feedback for free
              <i className='fas fa-arrow-right ml-2 text-sm'>
              </i>
            </a>
            <p className='text-gray-500 mt-6 text-sm'>
              No credit card required. 30-day free trial. Set up in 2 minutes.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- CTA Section --> */}
      <section className='py-24 bg-gradient-primary relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <div className='absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzIgMzJjNC40IDEuNyA4LjQgMiAxCMyOS42IDM3LjcgMjggNDBjLTUuMyAzLjMgLTEwLjcgNS0xNiA1cy0xMC43LTEuNy0xNi01Yy00LjQgMi4zLTguNCA0LTEyIDRzLTcuNi0xLjctMTItNHYzMnptLTE2IDBIMHYtMjRjMC01LjMgNC43LTEwIDEwLTEwcS44IDAgMS41LjMgMi4xLjdsMi4zIDIuM2MuNi42IDEuNCAxIDEuOSAxLjlsMi45IDIuOWMxLjIgMS4yIDEuMiAzLjEgMCA0LjNsLTIuOSAyLjljLS42LjYtMS40IDEtMiAxLjlsLTIuMyAyLjNjLS42LjYtMS4zLjktMi4xLjlINHYtMjRjMC01LjMgNC43LTEwIDEwLTEwcS44IDAgMS41LjMgMi4xLjdsMi4zIDIuM2MuNi42IDEuNCAxIDEuOSAxLjlsMi45IDIuOWMxLjIgMS4yIDEuMiAzLjEgMCA0LjNsLTIuOSAyLjljLS42LjYtMS40IDEtMiAxLjlsLTIuMyAyLjNjLS42LjYtMS4zLjktMi4xLjlINHYtMjRjMC01LjMgNC43LTEwIDEwLTEwcS44IDAgMS41LjMgMi4xLjdsMi4zIDIuM2MuNi42IDEuNCAxIDEuOSAxLjlsMi45IDIuOWMxLjIgMS4yIDEuMiAzLjEgMCA0LjNsLTIuOSAyLjljLS42LjYtMS40IDEtMiAxLjlsLTIuMyAyLjNjLS42LjYtMS4zLjktMi4xLjlINHYtMjRjMC01LjMgNC43LTEwIDEwLTEwIi8+PC9nPjwvZz48L3N2Zz4=")] opacity-20'>
          </div>
        </div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-6 leading-tight'>
              Ready to launch with confidence?
            </h2>
            <p className='text-xl text-white/80 mb-10'>
              Join 500+ indie developers using Feedora to collect feedback and build products users love.
            </p>
            <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
              <a href='javascript:void(0);' className='bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center'>
                Start collecting feedback for free
              </a>
              <a href='javascript:void(0);' className='flex items-center justify-center space-x-2 bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all text-center'>
                <i className='fas fa-play-circle'>
                </i>
                <span >
                  Watch Demo
                </span>
              </a>
            </div>
            <p className='text-white/60 mt-6 text-sm'>
              No credit card required. 30-day free trial. Set up in 2 minutes.
            </p>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  )
}